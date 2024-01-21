import { getPostMetadata } from "@/lib/getPostMetadata"

import HeroSection from "@/components/body/hero-section"
import BlogCard from "@/components/blog/blog-card"

export const metadata = {
    title: "CaesiumR Blog"
}

async function BlogPage() {

    const posts = await getPostMetadata()

    return (
        <div className="px-10">
            <HeroSection
                header="Server Blog"
                description="Updates about server and community." 
            />
            <div className="container justify-center mx-auto pt-5">
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