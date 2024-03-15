import { getPostMetadata } from "@/lib/getPostMetadata"

import HeroSection from "@/components/body/hero-section"
import BlogCard from "@/components/blog/blog-card"

import readConfig from "/config/siteconfig.json"

export const metadata = {
    title: `Blog | ${readConfig.siteName}`,
}

async function BlogPage() {

    const posts = await getPostMetadata()

    return (
        <div className="px-10">
            <HeroSection
                header="Server Blog"
                description="Updates about server and community." 
            />
            <div className="container justify-center w-full mx-auto pt-5">
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