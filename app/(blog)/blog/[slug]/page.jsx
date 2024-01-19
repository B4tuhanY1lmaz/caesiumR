import { getPostContent, getPostComments } from "@/lib/getPostContent"
import Markdown from "markdown-to-jsx";

import { Separator } from "@/components/ui/separator"
import HeroHeader from "@/components/blog/hero-header"
import PostPageComments from "@/components/blog/comment-card"
import WriteCommentCard from "@/components/blog/write-comment-card"

async function BlogPostPage(props) {
    const slug = props.params.slug
    const PostContent = await getPostContent(slug)
    const PostComments = await getPostComments(slug)
    const PostCommentsReversed = PostComments.slice().reverse()

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
                <div className="container mx-auto max-w-4xl">
                    <hr className="h-px mt-5 mb-3 bg-gray-500 border-0 justify-center"></hr>
                    <p className="text-2xl font-bold mb-3 w-full text-center">Comments</p>
                    <div>
                        <WriteCommentCard/>
                        {PostCommentsReversed.map((comment) => (
                            <PostPageComments
                                key={comment.content}
                                author={comment.author.name}
                                content={comment.content}
                                date={comment.updatedAt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPostPage