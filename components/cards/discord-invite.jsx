"use client"
import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

function DiscordCard({ Header, Description, InviteUrl }) {
    const [Badge, setBadge] = useState(false)
    const OnButtonClick = () => {
        navigator.clipboard.writeText(`https://discord.gg/${InviteUrl}`)
        setBadge(true)
    }

    return (
        <div className="w-[300px] rounded-2xl">
            <Card className="border-none bg-indigo-500/75 rounded-xl">
                <CardHeader>
                    <CardTitle>{Header}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div>
                        <p>{Description}</p>
                    </div>
                    <div >
                        <pre className="flex w-[250px] items-center justify-between bg-indigo-800/75 p-2 rounded-2xl">
                            <code className="font-mono select-all">{InviteUrl}</code>
                            <Button
                                className="bg-indigo-600 rounded-2xl"
                                onClick={OnButtonClick}
                            >
                                Copy!
                            </Button>
                        </pre>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default DiscordCard