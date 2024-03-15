import Header from "@/components/body/header"
import AdminHeader from "@/components/admin/header"

import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

async function MainLayout({ children }) {
    const session = await getServerSession(authOptions)

    // Redirect user back to home
    if (!session) {
        return redirect("/")
    }
    if (!session.user.role === "MEMBER") {
        return redirect("/")
    }

    return (
        <div className="min-h-screen">
            <Header />
            <div className={`main-layout`}>
                <AdminHeader />
                {children}
            </div>
        </div>
    )
}

export default MainLayout