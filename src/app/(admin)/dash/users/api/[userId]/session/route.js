import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET({ params }) {
    try {
        const userId = params.userId

        if (!userId) {
            return new NextResponse("UserId is Missing", { status: 400 })
        }

        const server = db.session.findMany()

        return NextResponse.json(server)

    } catch (e) {
        console.log("[GET_SESSIONS]", e)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function DELETE(request, { params }){
    try {
        const userId = params.userId
        const session1 = await getServerSession(authOptions)

        if (!userId) {
            return new NextResponse("UserId is Missing", { status: 400 })
        }
        if (!session1) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        if (session1.user.role === "USER") {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const server = await db.session.deleteMany({
            where: {
                userId: userId
            }
        })

        return NextResponse.json(server)

    } catch (e) {
        console.log("[SESSION_TERMINATION]", e)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}