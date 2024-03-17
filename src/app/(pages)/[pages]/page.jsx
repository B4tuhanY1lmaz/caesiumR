import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import readConfig from "/config/siteconfig.json"

import HeroSection from "@/components/body/hero-section"

const getPageContent = (page) => {
    const folder = "config/pages/";
    const file = `${folder}${page}.md`;
    const content = fs.readFileSync(file, "utf8");
    return matter(content)
}

export async function generateMetadata(props) {
    const slug = props.params.page
    const pageContent = getPageContent(slug)
    return {
        title: `${pageContent.data.title} | ${readConfig.siteName}`,
        openGraph: {
            type: `article`,
        },
    }
}

function MarkPages(props) {
    const page = props.params.pages
    const content = getPageContent(page)

    if (!content) {
        return notFound()
    }

    return (
        <div>
            <div className="px-10">
                <HeroSection
                    header={content.data.title}
                />
            </div>
            <article className="container mx-auto max-w-4xl mt-5
                 prose prose-invert prose-p:text-[#D1D0CB] prose-sm md:prose-lg lg:prose-xl justify-center mb-5">
                <Markdown>
                    {content.content}
                </Markdown>
            </article>
        </div>
    )
}

export default MarkPages