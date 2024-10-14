import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const videos = await prisma.video.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return NextResponse.json(videos, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error while fetching the videos" }, { status: 501 })
    } finally {
        prisma.$disconnect();
    }
}