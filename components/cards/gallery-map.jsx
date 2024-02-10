"use client"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

function GalleryMapCard({ Header, Description, Link }) {
        return (
            <a href={Link}>
                <Card className="rounded-2xl min-h-[300px] bg-[#1B4049] hover:bg-[#22505C] border-none">
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
                </Card>
            </a>
        )
}

export default GalleryMapCard