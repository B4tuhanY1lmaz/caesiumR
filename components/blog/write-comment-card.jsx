"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { useSession, signIn } from "next-auth/react"

function WriteCommentCard() {
    const { status } = useSession()
    const [LoggedIn, setLoggedIn] = useState(false)

    // Change the LoggedIn state before going any further.
    useEffect(() => {
        if (status === "authenticated") {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [status]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        reset
    } = useForm()

    function CardsContent() {
        const params = useParams()
        const slug = params.slug
        const onSubmit = async (data) => {
            const response = await fetch(`/api/comments`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
            })

            console.log(response)

            if (!response.ok) {
                alert("There was an error.")
            }

            await new Promise((resolve) => setTimeout(resolve, 1000));

            reset()
        }

        return (
            <>
                <CardContent>
                    <div className="flex flex-col max-h-full pt-5">
                        <div className="mt-5 md:mt-0 mx-auto md:mx-0 h-full">
                            <CardTitle>
                                <div className="flex w-full items-center">
                                    <p className="text-white text-md mr-2 md:mr-0">To - Do:</p>
                                </div>
                            </CardTitle>
                            <p className="text-md mt-2">Build a form with private api for Prisma</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Textarea {...register("comment", { required: true, maxLength: 600 })}
                                          placeholder="Type here" className="bg-[#153137] border-none mt-2"
                                />
                                {errors.comment && (
                                    <p className="text-red-600 text-sm">{errors.comment.message}</p>
                                )}
                                <Button className="mt-2" type="submit" disabled={isSubmitting}>Submit</Button>
                            </form>
                        </div>
                    </div>
                </CardContent>
            </>
        )
    }

    function CardLogin() {
        return (
            <CardContent>
                <Button className="items-center w-full mt-6" onClick={() => {signIn()}}>
                    Login to write comment.
                </Button>
            </CardContent>
        )
    }

    return (
        <Card className="rounded-2xl bg-[#1B4049] hover:bg-[#22505C] border-none
            h-auto w-[350px] md:w-[600px] xl:w-[750px] justify-center mx-auto mb-5">
            {LoggedIn ? (
                <CardsContent/>
            ) : (
                <CardLogin/>
            )}
        </Card>
    )
}

export default WriteCommentCard