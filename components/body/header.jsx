"use client"

import items from "@/config/header/navigation-items.json"

import localFont from "next/font/local";
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem,
NavigationMenuTrigger, NavigationMenuList, } from "@/components/ui/navigation-menu";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })

function Header() {
    return (
        <div className="top-2 sticky my-5 mx-10 z-20">
            <div className={`flex w-full py-5 px-10 justify-between sm:px-20 bg-[#1B4049] rounded-2xl ${MinecraftFont.className}`}>
                <div className={`flex h-full items-center hover:underline`}>
                    <Link href="/" className="flex h-full items-center mt-2">
                        <Image
                            src="/assets/logo.png" alt={"TBNMC Logo"}
                            height={100} width={100}
                            className={`h-[30px] w-[30px] rounded-[4px]`}
                        />
                        <p className={`ml-3`}>TBN SMP</p>
                    </Link>
                </div>
                <div className={`h-full items-center hidden sm:flex`}>
                    <div className={`flex gap-3`}>
                        <NavigationMenu>
                            <NavigationMenuList>
                                {items.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            {item.items.map((content) => (
                                                    <Button key={content.title} asChild>
                                                        <Link href={content.link}>
                                                            {content.title}
                                                        </Link>
                                                    </Button>
                                            ))}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))}

                            </NavigationMenuList>
                        </NavigationMenu>
                        <div>
                            <Button variant="outline">
                                Register / Log in
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header