"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button"

import Link from "next/link"

function DiscordCard({Header, InviteUrl}) {

    return (
        <div className="rounded-2xl">
            <Card className="border-none bg-indigo-800 rounded-xl">
                <CardHeader>
                    <CardTitle>{Header}</CardTitle>
                </CardHeader>
                <CardContent className="flex-col gap-4 items-center">
                    <p className="font-light -mt-2">Our community also on Discord!</p>
                    <Button asChild className="bg-indigo-600 hover:bg-indigo-400 w-full rounded-2xl mt-2 font-bold text-lg text-white">
                        <Link href={`https://discord.gg/${InviteUrl}`}>Join Discord server!</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default DiscordCard
