"use client"

import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

function HeaderButton({ title, link }) {
    const router = useRouter()
    const pathname = usePathname()


    return (
        <Button className={cn(pathname === link && "bg-accent text-accent-foreground")}
                variant={"ghost"} onClick={() => {router.push(link)}}>
            {title}
        </Button>
    )
}

function AdminHeader() {
    return (
        <div className="top-2 sticky my-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className={`flex w-full py-5 px-10 justify-between sm:px-20 bg-[#1B4049] rounded-2xl`}>
                <HeaderButton
                    link={"/dash"}
                    title="Dashboard"
                />
                <div className={`h-full items-center hidden sm:flex`}>
                    <div className={`flex gap-3`}>
                        <HeaderButton
                            link={"/dash/config"}
                            title={"Site Config"}
                        />
                        <HeaderButton
                            link={"/dash/analytics"}
                            title={"Analytics"}
                        />
                        <HeaderButton
                            link={"/dash/users"}
                            title={"Users"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader