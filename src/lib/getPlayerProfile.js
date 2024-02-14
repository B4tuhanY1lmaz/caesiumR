import {db} from "./db"

export async function getPlayerProfile(username) {
    try {
        const PlayerProfile = await db.user.findMany({
            where: {
                name: username
            },

            include: {
                comments: true,
                posts: true
            }
        })

        return PlayerProfile


    } catch (err) {
        console.log("[PROFILE_PAGE]", err)
    }
}