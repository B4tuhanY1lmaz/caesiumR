"use client"
import Image from "next/image"
import localFont from "next/font/local";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })
function HeroImage({ header, description, image }) {
    return (
        <div className="relative overflow-hidden bg-center h-[250px] w-full z-0">
            <Image src={image} alt={"Hero Image"}
                width={1920} height={600}
                   className="bg-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full
                overflow-hidden bg-fixed bg-black/60"
            >
                <div className={`flex flex-col h-full items-center justify-center ${MinecraftFont.className}`}>
                    <h1 className="text-2xl mb-3">{header}</h1>
                    <p className="px-5 justify-center mb-3">{description}</p>
                    <p className="text-green-500 text-sm">Server is Online! | 1.20.1 + EasyAuth + Terralith</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage