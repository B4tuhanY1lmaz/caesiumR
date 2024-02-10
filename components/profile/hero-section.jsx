"use client"
import localFont from "next/font/local";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MinecraftFont = localFont({ src: '../body/Minecraft.woff2' })
function ProfileHeroSection({ username, user_avatar, bg_color }) {
    const usernameFirst = username.substring(0, 1)

    return (
        <div className="relative overflow-hidden h-[250px] z-0 mx-10 rounded-2xl">
            <div className={`bottom-0 left-0 right-0 top-0 h-full w-full
                overflow-hidden bg-fixed bg-gradient-to-br from-indigo-600 via-pink-400 to-pink-700`}
            >
                <div className={`absolute h-1/2 inset-x-0 bottom-0 bg-black/50 backdrop-blur-xl ${MinecraftFont.className}`}>
                    <div className="flex">
                        <Avatar className={"ml-10 w-24 h-24 -top-12 bg-transparent"}>
                            <AvatarImage src={user_avatar} />
                            <AvatarFallback className="bg-transparent backdrop-blur-3xl">
                                <p className="text-3xl text-center items-center">{usernameFirst.toUpperCase()}</p>
                            </AvatarFallback>
                        </Avatar>
                        <h2 className={"ml-5 mt-2 text-2xl"}>{username}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeroSection