import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(request) {
    try {
        const session = await getServerSession(authOptions)
        const { searchParams } = new URL(request.url)
        const postId = searchParams.get("postId")
        const { comment } = await request.json()

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        if (!comment) {
            return new NextResponse("Comment can't be empty", { status: 400 })
        }

        const user = await db.user.findUnique({
            where: {
                email: session.user.email
            }
        })

        const server = await db.blog.update({
            where: {
                id: postId
            },
            data: {
                comments: {
                    create: {
                        authorId: user.id,
                        content: comment
                    }
                }
            }
        })

        return NextResponse.json(server)
        // return new NextResponse("Success", { status: 200 })

    } catch (error) {
        console.log("[NEW_COMMENT]", error)
        return new NextResponse("There was an Error", { status: 500 })
    }
}