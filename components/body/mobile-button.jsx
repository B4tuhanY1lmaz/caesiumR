"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function MobileButton() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="items-center">
                    Button
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}