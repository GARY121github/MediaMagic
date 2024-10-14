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

interface CloudinaryImageUploadResults {
    public_id: string;
    [key: string]: any
}

export async function POST(request: NextRequest) {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ error: "User is not Authencated" }, { status: 401 })
    }

    try {

        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "File not found" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await new Promise<CloudinaryImageUploadResults>(
            (resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        folder: "croper/images"
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result as CloudinaryImageUploadResults);
                    }
                )

                uploadStream.end(buffer);
            }
        );

        return NextResponse.json({
            publicId: result.public_id
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Error while uploading the image" }, { status: 501 })
    } finally {
        prisma.$disconnect();
    }
}
