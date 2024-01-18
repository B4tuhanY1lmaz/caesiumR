import { db } from "@/lib/db"
import matter from "gray-matter"
import fs from "fs"

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

    const file = `public/data/posts/${slug}.md`
    const MarkContent = fs.readFileSync(file, "utf8")
    const matterResult = matter(MarkContent)

    const content = matterResult.content

    return {
        slug: postContent.id,
        date: postContent.updatedAt,
        author : {
          name : postContent.author.name,
            image: postContent.author?.image
        },
        title: postContent.title,
        image: postContent.image,
        content: content,
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