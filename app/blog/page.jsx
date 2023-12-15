
import HeroSection from "@/components/body/hero-section"

function BlogPage() {
    return (
        <div className="h-screen">
            <div className="px-10">
                <HeroSection
                    header="Server Blog"
                    description="Public server and community updates."
                    image="/hero/4.png"
                />
            </div>
            <div>

            </div>
        </div>
    )
}

export default BlogPage