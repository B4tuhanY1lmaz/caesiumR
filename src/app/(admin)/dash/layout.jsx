"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

import AdminHeader from "@/components/admin/header"

function DashboardLayout({ children }) {
    const { data: session, status } = useSession()

    if(!session) {
        return redirect("/")
    }

    if (session.user.role === "MEMBER") {
        return redirect("/")
    }

    return (
        <section>
            <div>
                <AdminHeader />
                {children}
            </div>
        </section>
    )
}

export default DashboardLayout