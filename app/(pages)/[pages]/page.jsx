import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import HeroSection from "@/components/body/hero-section"

const getPageContent = (page) => {
    const folder = "config/pages/";
    const file = `${folder}${page}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

function MarkPages(props) {
    const page = props.params.pages
    const content = getPageContent(page)

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