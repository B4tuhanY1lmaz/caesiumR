"use client"

import BlogSuggestedCard from "@/components/blog/blog-suggested-card"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem } from "@/components/ui/carousel";

function BlogSuggestedCarousel({ SuggestedPosts }) {
    return (
        <div className="mx-auto">
            <Carousel className="w-3/4 mx-auto">
                <CarouselContent>
                    {SuggestedPosts.map((post) => (
                        <CarouselItem className="md:basis-1/2">
                            <BlogSuggestedCard
                                author={post.author.name}
                                image={post.image}
                                date={post.createdAt}
                                avatarImg={post.author.image}
                                title={post.title}
                                link={post.id}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default BlogSuggestedCarousel