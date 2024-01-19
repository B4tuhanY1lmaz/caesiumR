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

        return new NextResponse("Success", { status: 200 })

    } catch (error) {
        console.log("[NEW_COMMENT]", error)
        return new NextResponse("There was an Error", { status: 500 })
    }
}