import { db } from "./db"

export async function getAllUsers() {
    const users = await db.user.findMany({
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

    const results = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            img: user.image
        }
    })

    return results
}