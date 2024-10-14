import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from 'cloudinary';
import config from "@/config/config";
import { auth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

// Configuration
cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET
});

interface CloudinaryVideoUploadResults {
    public_id: string;
    [key: string]: any;
    bytes: number;
    duration?: number;
}

export async function POST(request: NextRequest) {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ error: "User is not Authencated" }, { status: 401 })
    }

    try {

        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const originalSize = formData.get("originalSize") as string;

        if (!file) {
            return NextResponse.json({ error: "File not found" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await new Promise<CloudinaryVideoUploadResults>(
            (resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        folder: "croper/videos",
                        resource_type: "video",
                        transformation: [
                            {
                                quality: "auto",
                                fetch_format: "mp4"
                            }
                        ]
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result as CloudinaryVideoUploadResults);
                    }
                )

                uploadStream.end(buffer);
            }
        );

        const video = await prisma.video.create({
            data: {
                title,
                description,
                publicId: result.public_id,
                originalSize,
                compressedSize: String(result.bytes),
                duration: result.duration || 0,
            }
        })

        return NextResponse.json({
            video
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error while uploading the video" }, { status: 501 })
    } finally {
        prisma.$disconnect();
    }
}
