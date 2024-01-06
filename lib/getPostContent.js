import { db } from "@/lib/db"
import { Blog } from "@prisma/client";

export async function getPostContent(slug) {
    const postContent = await db.blog.findUnique({
        where: {
            isPosted: true,
            id: slug
        },
        include: {
            author: true,
            categories: true
        }
    })

    return {
        slug: postContent.id,
        date: postContent.updatedAt,
        author : {
          name : postContent.author.name,
            image: postContent.author?.image
        },
        title: postContent.title,
        image: postContent.image,
        content: postContent.content,
        categories: postContent.categories
    }
}

export async function getPostComments(slug) {
    const postComments = await db.comments.findMany({
        where: {
            isDeleted: false,
            postId: slug
        },
        include: {
            author: true
        }
    })

    return postComments
}