"use client"

import Image from "next/image"
import localFont from "next/font/local";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })

function HeroHeader({ header, author, date, image }) {
    return (
        <div className="relative overflow-hidden bg-center h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] w-full z-0 rounded-2xl">
            <Image src={image} alt={"Hero Image"}
                width={1920} height={600}
                   className="justify-center mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full
                overflow-hidden bg-fixed bg-black/60"
            >
                <div className={`flex flex-col h-full items-center justify-center`}>
                    <h1 className={`text-lg sm:text-xl md:text-2xl mb-3 ${MinecraftFont.className}`}>{header}</h1>
                    <div className="flex gap-5 justify-between items-center">
                        <div className="flex items-center">
                            <Avatar className={`${MinecraftFont.className} h-8 w-8`}>
                                <AvatarImage src={author} />
                                <AvatarFallback>{author.name.substring().slice(0, 1).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <p className="ml-0 sm:ml-2">{author.name}</p>
                        </div>
                        <p>{new Date(date).toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader