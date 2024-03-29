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
import {ArrowUpDown, ChevronDown} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

import { useModal } from "@/components/modals/hooks/use-modal-store"
import axios from "axios"

// TODO: Finish this shit

const updateRole = async (id, role) => {
    const data = {
        userId: id,
        role: role
    }
    const values = JSON.stringify(data)
    await axios.post("/dash/users/api", values)
}

const terminateSessions = async (id) => {
    await axios.delete(`/dash/users/api/${id}/session`)
}

const deleteUser = (user) => {
    const { onOpen } = useModal()
    return onOpen("deleteUser", user)
}

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
        id: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
                    >
                    <p>Username</p>
                </Button>
            )
        },
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
            const handleUpdate = async (id, role) => {
                await updateRole(id, role)

            }

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
                            onClick={() => (handleUpdate(user.id, "ADMIN"))}
                        >
                            ADMIN
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => (handleUpdate(user.id, "MODERATOR"))}
                        >
                            MODERATOR
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => (handleUpdate(user.id, "USER"))}
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
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
                            Copy userId
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => (navigator.clipboard.writeText(user.email))}>
                            Copy Email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Edit Member
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Ban Member
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-rose-300" onClick={() => terminateSessions(user.id)}>
                            Terminate all sessions
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]