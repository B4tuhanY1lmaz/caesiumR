"use client"

import React, { lazy, Suspense } from "react"
import dynamic from 'next/dynamic'
import dynamicIconImports from "lucide-react/dynamicIconImports"

import items from "config/homepage/infoSection.json"

const Icon = ({ name, ...props }) => {
    const LucideIcon = lazy(dynamicIconImports[name])
    const fallback = <div style={{ background: '#ddd', width: 60, height: 60 }}/>

    return (
        <Suspense fallback={fallback} >
            <LucideIcon {...props} />
        </Suspense>
    )
}

function InfoItem({ text, alt, icon, color }) {
    // To-do: Implement a color fallback

    return (
        <div className="p-5">
            <div className="flex flex-col gap-2">
                <div className="justify-center mx-auto text-center">
                    <Icon name={icon} size={48} color={color}/>
                </div>
                <div className="text-xl text-center font-bold">
                    {text}
                </div>
                <p className="text-sm text-center">{alt}</p>
            </div>
        </div>
    )
}

function InfoSection() {
    return (
        <div className="w-full bg-[#1B4049] rounded-2xl mb-5">
            <div className="p-5 justify-center">
                <div className="grid sm:grid-cols-2 justify-center">
                    {items.map((item) => (
                        <InfoItem
                            text={item.text}
                            icon={item.icon}
                            color={item.color}
                            alt={item.alt}
                            key={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfoSection