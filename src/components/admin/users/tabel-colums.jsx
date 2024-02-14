"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const columns = [
    {
        accessoryKey: "avatar",
        header: "Avatar",
        cell: ({ row }) => {
            const user = row.original
            const fallback = user.name.substring(0, 1)
            return (
                <Avatar className="h-8 w-8">
                    <AvatarImage src={user.img} />
                    <AvatarFallback>{fallback.toUpperCase()}</AvatarFallback>
                </Avatar>
            )
        }
    },
    {
        accessoryKey: "id",
        header: "User id",
        cell: ({ row }) => {
            const user = row.original

            return (
                <p className="text-white">{user.id}</p>
            )
        }
    },
    {
        accessoryKey: "name",
        header: "Username",
        cell: ({ row }) => {
            const user = row.original

            return (
                <p className="text-white">{user.name}</p>
            )
        }
    },
    {
        accessoryKey: "email",
        header: "Email",
        cell: ({ row }) => {
            const user = row.original

            return (
                <p className="text-white">{user.email}</p>
            )
        }
    },
    {
        accessoryKey: "role",
        header: "Role",
        cell: ({ row }) => {
            const user = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            <p>{user.role}</p>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Set user role</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => (console.log("click"))}
                        >
                            ADMIN
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => (console.log("click"))}
                        >
                            MODERATOR
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => (console.log("click"))}
                        >
                            MEMBER
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8">
                            <p><ChevronDown className="h-4 w-4" /></p>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
                            Copy User id
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]