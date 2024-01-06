import {getPostContent} from "@/lib/getPostContent"
import Markdown from "markdown-to-jsx";

import HeroHeader from "@/components/blog/hero-header"

async function BlogPostPage(props) {
    const slug = props.params.slug
    const PostContent = await getPostContent(slug)


    return (
        <>
            <div className="min-h-screen h-full">
                <div>
                    <HeroHeader
                        header={PostContent.title}
                        date={PostContent.date}
                        author={PostContent.author}
                        image={PostContent.image}
                    />
                </div>
                <article className="container mx-auto max-w-4xl mt-5
                 prose prose-invert prose-p:text-[#D1D0CB] prose-sm md:prose-lg lg:prose-xl justify-center mb-5
                ">
                    <Markdown>
                        {PostContent.content}
                    </Markdown>
                </article>
            </div>
        </>
    )
}

export default BlogPostPage