import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"

import HeroSection from "@/components/body/hero-section"

function AboutPage() {
    const getPageContent = () => {
        const file = "config/pages/about.md"
        const content = fs.readFileSync(file, "utf-8")
        const MatterResult = matter(content)
        return MatterResult
    }

    return (
        <div className="h-full">
            <div className="px-10 mb-5">
                <HeroSection
                    header="About Us"
                />
            </div>
            <div className="px-10 md:px-[80px] w-full">
                <article className="
                    prose prose-invert prose-p:text-[#D1D0CB] prose-sm md:prose-lg lg:prose-xl
                    justify-center mx-auto mb-5
                ">
                    <Markdown>
                        {getPageContent().content}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}

export default AboutPage