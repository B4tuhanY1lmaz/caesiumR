"use client"
import localFont from "next/font/local";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })
function HeroSection({ header, description, image }) {
    return (
        <div className="relative overflow-hidden bg-center h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] w-full z-0 rounded-2xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full
                overflow-hidden bg-fixed bg-black/60"
            >
                <div className={`flex flex-col h-full items-center justify-center ${MinecraftFont.className}`}>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-3 md:mb-10">{header}</h1>
                    <p className="px-5 justify-center mb-3 text-xs sm:text-md md:text-lg text-center">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection