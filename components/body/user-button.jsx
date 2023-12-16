"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem,
    DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuGroup
} from "@/components/ui/dropdown-menu"
import { User, Settings, LifeBuoy, LogOut } from "lucide-react";

import { useSession, signIn, signOut } from "next-auth/react"
import localFont from "next/font/local";

const MinecraftFont = localFont({ src: './Minecraft.woff2' })

function UserButton() {
    const { data: session, status } = useSession()

    if (status === "authenticated") {
        const username = session?.user.name
        const userNameFirst =  username.substring(0, 1)
        return (
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="items-center">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src={session?.user.image} />
                                <AvatarFallback>{userNameFirst.toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={MinecraftFont.className}>
                        <DropdownMenuLabel>
                            <div className="items-center flex">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={session?.user.image} />
                                    <AvatarFallback>{userNameFirst.toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <p className="text-lg ml-2">{session?.user.name}</p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <p>My Profile</p>
                                <User className="ml-auto h-4 w-4"/>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <p>Settings</p>
                                <Settings className="ml-auto h-4 w-4"/>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <p>Report a Bug!</p>
                                <LifeBuoy className="ml-auto h-4 w-4" />
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-700" onClick={() => signOut()}>
                            <p>Log out</p>
                            <LogOut className="ml-auto h-4 w-4"/>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }

    return (
        <div>
            <Button variant="ghost" onClick={() => signIn()}>
                Login / Register
            </Button>
        </div>
    )
}

export default UserButton