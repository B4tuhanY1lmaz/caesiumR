import { db } from "@/lib/db"

export async function getPostMetadata() {
    const posts = await db.blog.findMany({
        where: {
            isPosted: true
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            author: true,
            categories: true
        }
    })

    return posts
}