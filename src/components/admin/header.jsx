"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"


function AdminHeader() {
    return (
        <div className="top-2 sticky my-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className={`flex w-full py-5 px-10 justify-between sm:px-20 bg-[#1B4049] rounded-2xl`}>
                <div className={`flex h-full items-center`}>
                    <p>Caesium Admin dashboard</p>
                </div>
                <div className={`h-full items-center hidden sm:flex`}>
                    <div className={`flex gap-3`}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader