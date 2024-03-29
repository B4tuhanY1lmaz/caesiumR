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
        <footer className={`inset-x-0 bottom-0 max-w-[1000px] mx-auto px-10`}>
            <div className="rounded-2xl bg-[#1B4049] mb-5">
                <div className={`flex w-full justify-center p-5 ${MinecraftFont.className}`}>
                    <div>
                        <p className="text-2xl mb-2">The Batuhan's Network</p>
                        <div className="flex">
                            <div className="flex flex-col">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-md"
                                >
                                    <FaDiscord/>
                                    Discord
                                </Link>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-md"
                                >
                                    <FaCircleExclamation/>
                                    About
                                </Link>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-md"
                                >
                                    <FaCircleUser/>
                                    Contact Us
                                </Link>
                            </div>
                            <div className="flex flex-col ml-5 sm:ml-20">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-md"
                                >
                                    <SiFeedly/>
                                    RSS Feed
                                </Link>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-md"
                                >
                                    <FaGithub/>
                                    Source Code
                                </Link>
                                <div
                                    href="/"
                                    className="flex items-center gap-2 text-md"
                                >
                                    <FaCopyright/>
                                    {new Date().getFullYear()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer