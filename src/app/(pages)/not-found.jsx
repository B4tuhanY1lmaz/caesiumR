"use client"

import HeroSection from "@/components/body/hero-section"
import Link from "next/link"

function NotFound() {
    return (
        <div>
            <HeroSection
                header="404"
                description="The page you're looking for doesn't exist on this website."
            />
            <Link href="/public" className="hover:underline-offset-1 underline">Go back.</Link>
        </div>
    )
}

export default NotFound