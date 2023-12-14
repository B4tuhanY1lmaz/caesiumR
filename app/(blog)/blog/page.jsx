import HeroSection from "@/components/body/hero-section"
import BlogCard from "@/components/blog/blog-card"

function BlogPage() {

    return (
        <div>
            <HeroSection
                header="Server Blog"
                description="Updates about server and community." 
            />
            <div className="px-10 md:px-20 lg:px-30">
                <BlogCard 
                    title="Test Card 123"
                    description="Test description 123"
                />
            </div>
        </div>
    )
}

export default BlogPage