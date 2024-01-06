import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })

import { FaDiscord } from "react-icons/fa"
import { FaCircleExclamation } from "react-icons/fa6"
import { FaCircleUser } from "react-icons/fa6"
import { FaCopyright } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiFeedly } from "react-icons/si"

function Footer() {
    return (
        <footer className={`bg-stone-800/50 justify-center bottom-0`}>
            <div className={`flex flex-wrap gap-20 px-5 sm:px-10 md:px-20 py-5 ${MinecraftFont.className}`}>
                <div className="flex flex-col mx-auto">
                    <p className="text-2xl mb-2">The Batuhan's Network</p>
                    <div className="flex">
                        <div className="flex flex-col">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-md"
                            >
                                <FaDiscord />
                                Discord
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-md"
                            >
                                <FaCircleExclamation />
                                About
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-md"
                            >
                                <FaCircleUser />
                                Contact Us
                            </Link>
                        </div>
                        <div className="flex flex-col ml-20">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-md"
                            >
                                <SiFeedly />
                                RSS Feed
                            </Link>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-md"
                            >
                                <FaGithub />
                                Source Code
                            </Link>
                            <div
                                href="/"
                                className="flex items-center gap-2 text-md"
                            >
                                <FaCopyright />
                                {new Date().getFullYear()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer