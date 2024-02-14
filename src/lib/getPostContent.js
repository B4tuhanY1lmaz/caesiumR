import {db} from "@/lib/db"
import matter from "gray-matter"
import fs from "fs"

export async function getPostContent(slug) {
    try {
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

        if (postContent === null) {
            return
        }

        return {
            slug: postContent.id,
            date: postContent.updatedAt,
            author: {
                name: postContent.author.name,
                image: postContent.author?.image
            },
            title: postContent.title,
            image: postContent.image,
            content: content,
            categories: postContent.categories
        }
    } catch (e) {
        console.log("[GET_POST_CONTENT]", e)
    }
}

export async function getSuggestedPosts(slug) {
    try {
        const posts = await db.blog.findMany({
            where: {
                NOT: {
                    id: slug
                }
            },
            include: {
                author: true,
            },
        })

        const SuggestedPosts = posts.slice(0, 2)
        return SuggestedPosts
    } catch (e) {
        console.log("[GET_SUGGESTED_POSTS]", e)
    }
}

export async function getPostComments(slug) {
    const comments = await db.comments.findMany({
        where: {
            isDeleted: false,
            postId: slug
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            author: true
        }
    })
    return comments
}