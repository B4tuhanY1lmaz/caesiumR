"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

import axios from "axios"
import qs from "query-string"
import { useParams, useRouter } from "next/navigation"
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
        const router = useRouter()
        const slug = params.slug
        const onSubmit = async (data) => {
            const url = qs.stringifyUrl({
                url: `/api/comments`,
                query: {
                    postId: params?.slug
                }
            })
            const values = JSON.stringify(data)
            await axios.post(url, values)
            reset()
            router.refresh()
        }

        return (
            <>
                <CardContent>
                    <div className="flex flex-col max-h-full pt-3">
                        <div className="mt-5 md:mt-0 mx-auto md:mx-0 h-full">
                            <CardTitle>
                                <div className="flex w-full items-center">
                                    <p className="text-white text-md mr-2 md:mr-0">Write a comment</p>
                                </div>
                            </CardTitle>
                            <p className="text-md mt-2">Don't forget to be nice!</p>
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
            h-auto w-[350px] md:w-[600px] justify-center mx-auto mb-5">
            {LoggedIn ? (
                <CardsContent/>
            ) : (
                <CardLogin/>
            )}
        </Card>
    )
}

export default WriteCommentCard