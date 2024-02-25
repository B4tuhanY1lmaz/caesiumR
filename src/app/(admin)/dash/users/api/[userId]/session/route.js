import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function DELETE(request, props){

    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        // TODO: Create the API for terminating existing user sessions

    } catch (e) {
        console.log("[SESSION_TERMINATION]", e)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}