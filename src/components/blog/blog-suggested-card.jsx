"use client"

import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardDescription, 
    CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

function BlogSuggestedCard({ title, link, date, image, avatarImg, author }) {

    const authorFirst = author.substring(0,1)

    return (
        <Link href={`/blog/${link}`}>
            <Card className="rounded-2xl bg-[#1B4049] hover:bg-[#22505C] border-none 
            h-auto max-w-[350px] justify-center mx-auto mb-5">
                <CardContent>
                    <div className="flex flex-col max-h-full pt-5">
                        <div className="max-w-[300px] mx-auto">
                            <Image
                                className="rounded-2xl h-auto mx-auto"
                                src={image}
                                width={200}
                                height={200}
                                alt="" 
                            />
                        </div>
                        <div className="mt-5 mx-auto h-full">
                            <CardTitle>{title}</CardTitle>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full justify-between">
                        <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                                <AvatarImage src={avatarImg} />
                                <AvatarFallback>{authorFirst.toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <p className="text-white text-xs mr-2">{author}</p>
                        </div>
                        <div>
                            <CardDescription>
                                {new Date(date).toDateString()}
                            </CardDescription>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default BlogSuggestedCard