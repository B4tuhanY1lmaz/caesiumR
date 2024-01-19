import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


export async function POST(request, { params }) {
    try {
        const session = await getServerSession(authOptions)
        const postId = params.slug

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        if (!postId) {
            return new NextResponse("PostID is missing", { status: 400 })
        }

        const user = await db.user.findUnique({
            where: {
                email: session.email,
                name: session.name
            }
        })
        console.log(session)
        console.log(user)

         // const server = await db.comments.create({})



    } catch (error) {
        console.log("[NEW_COMMENT]", error)
        return new NextResponse("There was an Error", { status: 500 })
    }
}