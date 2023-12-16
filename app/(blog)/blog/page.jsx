import HeroSection from "@/components/body/hero-section"
import BlogCard from "@/components/blog/blog-card"

import { db } from "@/lib/db"
export const metadata = {
    title: "CaesiumR Blog"
}

async function BlogPage() {

    const posts = await db.blog.findMany({
        where: {
            isPosted: true,
        },
        include: {
            author: true,
            categories: true
        }
    })

    return (
        <div>
            <HeroSection
                header="Server Blog"
                description="Updates about server and community." 
            />
            <div className="px-10 md:px-20 lg:px-30 w-full justify-center mx-auto pt-10">
                {posts.map((post) => (
                    <BlogCard
                        author={post.author.name}
                        date={post.updatedAt}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        link={post.id}
                        key={post.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogPage