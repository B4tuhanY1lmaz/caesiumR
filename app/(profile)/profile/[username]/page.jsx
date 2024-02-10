
import { getPlayerProfile } from "@/lib/getPlayerProfile"
import { notFound } from "next/navigation"

import ProfileHeroSection from "@/components/profile/hero-section"

async function UserProfilePage(props) {
    const username = props.params.username
    const user = await getPlayerProfile(username)

    if(user.length === 0) {
        return notFound()
    }

    console.log(user)

    return (
        <div className="py-5">
            <ProfileHeroSection
                username={username}
            />
        </div>
    )
}

export default UserProfilePage