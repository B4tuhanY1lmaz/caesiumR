"use client"
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

function JoinServerCard({ Header, Description, ServerIP }) {
    const [Badge, setBadge] = useState(false)
    const OnButtonClick = () => {
        navigator.clipboard.writeText(ServerIP)
        setBadge(true)
    }

    return (
        <div className="w-[300px] rounded-2xl">
            <Card className="border-none bg-[#1B4049] rounded-xl">
                <CardHeader>
                    <CardTitle>{Header}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div>
                        <p>{Description}</p>
                    </div>
                    <div >
                        <pre className="flex w-[250px] items-center justify-between bg-stone-800/75 p-2 rounded-2xl">
                            <code className="font-mono select-all">{ServerIP}</code>
                            <Button
                                className="bg-lime-800 rounded-2xl"
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

export default JoinServerCard