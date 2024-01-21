import { getPostContent, getSuggestedPosts, getPostComments } from "@/lib/getPostContent"
import Markdown from "markdown-to-jsx";

import HeroHeader from "@/components/blog/hero-header"
import PostPageComments from "@/components/blog/comment-card"
import WriteCommentCard from "@/components/blog/write-comment-card"
import BlogSuggestedCarousel from "@/components/blog/blog-suggested-carousel";

async function BlogPostPage(props) {
    const slug = props.params.slug
    const PostContent = await getPostContent(slug)
    const PostComments = await getPostComments(slug)
    const SuggestedPosts = await getSuggestedPosts(slug)

    return (
        <>
            <div>
                <div className="px-10">
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
                    <p className="text-2xl font-bold mb-3 w-full text-center">Suggested Posts</p>
                    <BlogSuggestedCarousel
                        SuggestedPosts={SuggestedPosts}
                    />
                </div>
                <div className="container mx-auto max-w-[768px]">
                <hr className="h-px mt-5 mb-3 bg-gray-500 border-0 justify-center"></hr>
                    <p className="text-2xl font-bold mb-3 w-full text-center">Comments</p>
                    <div>
                        <WriteCommentCard/>
                        {PostComments.map((comment) => (
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