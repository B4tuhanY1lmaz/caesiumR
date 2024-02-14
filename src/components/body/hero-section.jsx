"use client"
import localFont from "next/font/local";
import Link from "next/link";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })
function HeroSection({ header, description }) {
    return (
        <div
            className="relative overflow-hidden h-[250px] z-0 hero-layout">
            <div className="bottom-0 left-0 right-0 top-0 h-full w-full
                overflow-hidden bg-fixed bg-[#0F2227]"
            >
                <div className={`relative flex flex-col h-full items-center justify-center ${MinecraftFont.className}`}>
                    <div className="absolute inset-x-0 top-2 mt-2">
                        <a href={"/"}
                           className={`text-white hover:underline ml-5 ${MinecraftFont.className}`}>{"< Go back"}</a>
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-3 md:mb-10">{header}</h1>
                    <p className="px-5 justify-center mb-3 text-xs sm:text-md md:text-lg text-center">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection