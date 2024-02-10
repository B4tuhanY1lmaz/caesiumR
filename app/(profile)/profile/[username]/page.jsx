
import { getPlayerProfile } from "@/lib/getPlayerProfile"
import { notFound } from "next/navigation"

import ProfileHeroSection from "@/components/profile/hero-section"

async function UserProfilePage(props) {
    const username = props.params.username
    const users = await getPlayerProfile(username)
    const user = users[0]

    if(!user) {
        return notFound()
    }

    return (
        <div className="py-5 h-screen">
            <ProfileHeroSection
                username={user.name}
                user_avatar={user.image}
                role={user.role}
            />
        </div>
    )
}

export default UserProfilePage