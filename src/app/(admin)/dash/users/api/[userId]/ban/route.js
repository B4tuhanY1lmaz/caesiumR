import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(request, { params }) {
    try {
        const userId = params.userId
        const { userName, date, reason, issuerId } = request.json()
        const session = await getServerSession(authOptions)

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        if (session.user.role === "USER") {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        if (!userName) {
            return new NextResponse("UserName can't be empty.", { status: 400 })
        }
        if (!issuerId) {
            return new NextResponse("issuerId can't be empty", { status: 400 })
        }

        const userDetails = await db.user.findUnique({
            where: {
                id: userId,
                name: userName
            }
        })

        if (!userDetails) {
            return new NextResponse("User cannot be found on the server", { status: 404 })
        }

        const issuerDetails = await db.user.findUnique({
            where: {
                id: issuerId,
                role: session.user.role
            }
        })

        if (!issuerDetails) {
            return new NextResponse("Admin cannot be found", { status: 500 })
        }

        const server = await db.user.update({
            where: {
                id: issuerDetails.id
            },
            data: {
                bans: {
                    create: {
                        issuerId: issuerDetails.id,
                        userId: userDetails.id,
                        userName: userDetails.name,
                        issuedUntil: date,
                        reason: reason
                    }
                }
            }
        })

        console.log(`[${new Date().toISOString()}] Admin ${issuerDetails.name} has banned the user ${userDetails.name} until ${new Date(date)} becouse of ${reason}.`)
        return NextResponse.json(server)

    } catch (e) {
        console.log("[USER_BAN]", e)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}