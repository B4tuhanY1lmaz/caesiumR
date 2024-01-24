"use client"

import { FaMicrophone } from "react-icons/fa"
import { GiWorld } from "react-icons/gi"
import { FaUnlockAlt } from "react-icons/fa"
import { BiSolidCabinet } from "react-icons/bi"

function InfoSection() {
    return (
        <div className="w-full bg-[#1B4049] rounded-2xl mb-5">
            <div className="p-5 justify-center">
                <div className="grid sm:grid-cols-2 justify-center">
                    <div className="flex flex-col gap-5 text-center mb-5">
                        <div className="text-6xl mx-auto">
                            <FaMicrophone/>
                        </div>
                        <p>Simple Voice Chat</p>
                    </div>
                    <div className="flex flex-col gap-5 text-center mb-5">
                        <div className="text-6xl mx-auto">
                            <GiWorld/>
                        </div>
                        <p>Custom World generation</p>
                    </div>
                    <div className="flex flex-col gap-5 text-center mb-5">
                        <div className="text-6xl mx-auto">
                            <FaUnlockAlt/>
                        </div>
                        <p>EasyAuth</p>
                    </div>
                    <div className="flex flex-col gap-5 text-center mb-5">
                        <div className="text-6xl mx-auto">
                            <BiSolidCabinet/>
                        </div>
                        <p>Custom Skins</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection