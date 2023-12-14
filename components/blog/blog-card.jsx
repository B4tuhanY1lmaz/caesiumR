"use client"

import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardDescription, 
    CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"

function BlogCard({ title, description, link, date, image }) {
    return (
        <Card className="rounded-2xl bg-stone-700 border-none h-auto">
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
                    <div className="mt-5 md:mt-0 mx-auto md:mx-0">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default BlogCard