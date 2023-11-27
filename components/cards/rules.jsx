"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function RulesCard({ Header, Description }) {

    return (
        <div className="w-[300px] rounded-2xl">
            <Card className="border-none bg-stone-700 rounded-xl">
                <CardHeader>
                    <CardTitle>{Header}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div>
                        <p>{Description}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className=" ml-auto bg-lime-800 rounded-2xl">
                        Read More ...
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RulesCard