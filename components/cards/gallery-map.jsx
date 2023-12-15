"use client"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

function GalleryMapCard({ type, Header, Description, Link }) {
    if (type === "map") {
        return (
            <Card className="rounded-2xl w-[300px] bg-[#1B4049] border-none">
                <CardHeader>
                    <CardTitle>{Header}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <AspectRatio ratio={16 / 9}>
                            <Image src="/cards/map.png" alt="map image" width={1280} height={720} className="rounded-2xl object-cover" />
                        </AspectRatio>
                    </div>
                    <div>
                        <p className="mt-2">{Description}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="bg-lime-800 ml-auto rounded-2xl mt-1" asChild>
                        <a href={Link}>Visit</a>
                    </Button>
                </CardFooter>
            </Card>
        )
    }

    if (type === "gallery") {
        return (
            <Card className="rounded-2xl w-[300px] bg-[#1B4049] border-none">
                <CardHeader>
                    <CardTitle>{Header}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <AspectRatio ratio={16 / 9}>
                            <Image src="/cards/map.png" alt="map image" width={1280} height={720} className="rounded-2xl object-cover" />
                        </AspectRatio>
                    </div>
                    <div>
                        <p className="mt-2">{Description}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="bg-lime-800 ml-auto rounded-2xl mt-1" asChild>
                        <a href={Link}>Visit</a>
                    </Button>
                </CardFooter>
            </Card>
        )
    }

    if (type === "blog") {
        return (
            <Card className="rounded-2xl w-[300px] bg-[#1B4049] border-none">
                <CardHeader>
                    <CardTitle>{Header}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <AspectRatio ratio={16 / 9}>
                            <Image src="/cards/map.png" alt="map image" width={1280} height={720} className="rounded-2xl object-cover" />
                        </AspectRatio>
                    </div>
                    <div>
                        <p className="mt-2">{Description}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="bg-lime-800 ml-auto rounded-2xl mt-1" asChild>
                        <a href={Link}>Visit</a>
                    </Button>
                </CardFooter>
            </Card>
        )
    }
}

export default GalleryMapCard