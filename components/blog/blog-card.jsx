"use client"

import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardDescription, 
    CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"

function BlogCard({ title, description, link, date, image }) {
    return (
        <Card className="rounded-2xl bg-stone-700 border-none h-[300px]">
            <CardHeader className="flex ">
                <AspectRatio ratio={16 / 9}>
                    <Image src="/cards/map.png" alt="map image" width={1280} height={720} className="rounded-2xl object-cover" />
                </AspectRatio>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>
                    Test Button
                </Button>
            </CardFooter>
        </Card>
    )
}

export default BlogCard