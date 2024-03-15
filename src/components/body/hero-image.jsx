import Image from "next/image"
import localFont from "next/font/local";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })
function HeroImage({ header, description, image }) {
    return (
        <div className="w-full py-5">
            <div
                className="relative overflow-hidden bg-center h-[250px] w-full z-0 rounded-2xl">
                <Image src={image} alt={"Hero Image"}
                       width={1600} height={250}
                       className="justify-center items-center w-full mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full
                overflow-hidden bg-fixed bg-black/60"
                >
                    <div className={`flex flex-col h-full items-center justify-center ${MinecraftFont.className}`}>
                        <h1 className="text-lg sm:text-xl md:text-2xl mb-3">{header}</h1>
                        <p className="px-5 justify-center mb-3 text-xs sm:text-md md:text-lg text-center">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroImage