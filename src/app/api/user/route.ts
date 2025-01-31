import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { decode } from "next-auth/jwt";

const SECRET_KEY = process.env.JWT_SECRET || "chave_super_secreta"; // Defina isso em seu .env

// Middleware para verificar o token JWT
async function verifyToken(req: NextRequest) {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return null;

    const token = authHeader.split(" ")[1]; // Pega apenas o token sem o "Bearer"
    try {
        
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
}

export async function GET(req: NextRequest) {
    const decoded = await verifyToken(req);
    if (!decoded) {
        return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const id = req.nextUrl.searchParams.get("id");
    const email = req.nextUrl.searchParams.get("email");
    const username = req.nextUrl.searchParams.get("username");

    try {
        if (id) {
            const user = await prisma.user.findUnique({ where: { id } });
            if (!user) return new NextResponse(JSON.stringify({ error: "User Not Found" }), { status: 404 });
            return new NextResponse(JSON.stringify(user), { status: 200 });
        }

        if (email) {
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) return new NextResponse(JSON.stringify({ error: "User Not Found" }), { status: 404 });
            return new NextResponse(JSON.stringify(user), { status: 200 });
        }

        if (username) {
            const user = await prisma.user.findUnique({ where: { username } });
            if (!user) return new NextResponse(JSON.stringify({ error: "User Not Found" }), { status: 404 });
            return new NextResponse(JSON.stringify(user), { status: 200 });
        }

        const users = await prisma.user.findMany();
        return new NextResponse(JSON.stringify(users), { status: 200 });

    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const decoded = await verifyToken(req);
    if (!decoded) {
        return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    try {
        const body = await req.json();
        const newUser = await prisma.user.create({ data: body });
        return new NextResponse(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Bad Request" }), { status: 400 });
    }
}

export async function PUT(req: NextRequest) {
    const decoded = await verifyToken(req);
    if (!decoded) {
        return new NextResponse(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    try {
        const body = await req.json();
        const updatedUser = await prisma.user.update({
            where: { id: body.id },
            data: body,
        });
        return new NextResponse(JSON.stringify(updatedUser), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Bad Request" }), { status: 400 });
    }
}
