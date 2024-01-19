"use client"

import { Card, CardContent, CardDescription,
    CardFooter, CardTitle } from "@/components/ui/card"

function PostPageComments({ author, content, date }) {
    return (
        <Card className="rounded-2xl bg-[#1B4049] hover:bg-[#22505C] border-none
            h-auto w-[350px] md:w-[600px] xl:w-[750px] justify-center mx-auto mb-5">
            <CardContent>
                <div className="flex flex-col md:flex-row max-h-full pt-5">
                    <div className="mt-5 md:mt-0 mx-auto md:mx-0 h-full">
                        <CardTitle>
                            <div className="flex w-full items-center">
                                <p className="text-white text-md mr-2 md:mr-0">{author}</p>
                                <p className="text-xs font-light ml-2">{new Date().toDateString()}</p>
                            </div>
                        </CardTitle>
                        <p className="text-md mt-2">{content}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PostPageComments