"use client"

import { Button } from "@/components/ui/button"
import {Card, CardContent, CardTitle} from "@/components/ui/card"

import { useState, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"

function WriteCommentCard() {
    const { data: session, status } = useSession()
    const [LoggedIn, setLoggedIn] = useState(false)

    // Change the LoggedIn state before goin any further.
    useEffect(() => {
        if (status === "authenticated") {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [status]);

    function CardsContent() {
        return (
            <div className="flex flex-col max-h-full pt-5">
                <div className="mt-5 md:mt-0 mx-auto md:mx-0 h-full">
                    <CardTitle>
                        <div className="flex w-full items-center">
                            <p className="text-white text-md mr-2 md:mr-0">To - Do:</p>
                        </div>
                    </CardTitle>
                    <p className="text-md mt-2 hidden md:flex">Build a form with private api for Prisma</p>
                </div>
            </div>
        )
    }

    return (
        <Card className="rounded-2xl bg-[#1B4049] hover:bg-[#22505C] border-none
            h-auto w-[350px] md:w-[600px] xl:w-[750px] justify-center mx-auto mb-5">
            <CardContent>
                {LoggedIn ? (
                    <CardsContent />
                ) : (
                    <p>Log into Continue</p>
                )}
            </CardContent>
        </Card>
    )
}

export default WriteCommentCard