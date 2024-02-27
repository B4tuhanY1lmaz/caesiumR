import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


export async function GET(request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
           return new NextResponse("Unauthorized", { status: 401 })
        }
        if (session.user.role === "USER") {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const server = await db.user.findMany({
            include: {
                posts: true,
                comments: true,
                accounts: true,
                sessions: true
            },
            orderBy: {
                name: "desc"
            }
        })

        return NextResponse.json(server)
    } catch (e) {
        console.log("[GET_USERS]", e)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function POST(request) {
    try {
        const session = await getServerSession(authOptions)
        const { userId, role } = await request.json()

        console.log(userId, role)

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        if (!userId) {
            return new NextResponse("userId can't be empty", { status: 400 })
        }
        if (!role) {
            return new NextResponse("role can't be empty", { status: 400 })
        }

        const user = await db.user.findUnique({
            where: {
                email: session.user.email
            }
        })

        if (user.role === "MEMBER") {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const server = await db.user.update({
            where: {
                id: userId
            },
            data: {
                role: role,
                }
        })

        return NextResponse.json(server)
        // return new NextResponse("Success", { status: 200 })

    } catch (error) {
        console.log("[NEW_COMMENT]", error)
        return new NextResponse("There was an Error", { status: 500 })
    }
}