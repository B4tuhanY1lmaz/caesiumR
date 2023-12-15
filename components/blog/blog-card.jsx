"use client"

import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardDescription, 
    CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

function BlogCard({ title, description, link, date, image, avatarImg, author }) {
    return (
        <Link href={link}>
            <Card className="rounded-2xl bg-[#1B4049] hover:bg-[#22505C] border-none 
            h-auto w-[350px] md:w-[600px] xl:w-[750px] justify-center mx-auto mb-5">
                <CardContent>
                    <div className="flex flex-col md:flex-row max-h-full pt-5">
                        <div className="max-w-[300px] mx-auto md:mx-0 md:mr-5">
                            <Image
                                className="rounded-2xl md:h-auto max-w-3xl min-w-[300px] mx-auto"
                                src={image}
                                width={300}
                                height={300}
                                alt="" 
                            />
                        </div>
                        <div className="mt-5 md:mt-0 mx-auto md:mx-0 h-full">
                            <CardTitle>{title}</CardTitle>
                            <p className="text-md mt-2 hidden md:flex">{description}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full justify-between">
                        <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                            <p className="text-white text-xs mr-2 md:mr-0">{author}</p>
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

export default BlogCard