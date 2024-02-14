import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function getServerProfile() {
    const session = await getServerSession(authOptions)

    return session
}