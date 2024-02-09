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
        <div className="rounded-2xl">
            <Card className="border-none bg-[#1B4049] rounded-2xl min-h-full">
                <CardContent className="flex flex-wrap sm:flex-nowrap w-full gap-6 py-6">
                    <div className="w-1/2 flex-col text-center mx-auto justify-center">
                        <CardTitle className={"pb-4"}>{Header}</CardTitle>
                        <p className="my-2 font-bold">1.20.1 + Voice Chat + Terralith</p>
                        <p>Currently 12/60 Players online!</p>
                    </div>
                    <div className={"w-1/2 mx-auto justify-center"}>
                        <Button className={"bg-lime-800 rounded-2xl w-full mb-3"} asChild>
                            <p className="font-bold text-lg text-white">Server Rules</p>
                        </Button>
                        <pre className="flex items-center justify-between bg-stone-800/75 p-2 rounded-2xl overflow-hidden">
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