import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        // TODO: Create the API for banning users from posting comments and etc.

    } catch (e) {
        console.log("[USER_BAN]", e)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
}