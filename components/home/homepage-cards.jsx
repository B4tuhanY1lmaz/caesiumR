
import JoinServerCard from "@/components/cards/join-server"
import GalleryMapCard from "@/components/cards/gallery-map"
import DiscordCard from "@/components/cards/discord-invite"

function HomepageCards() {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center w-auto">
            <div className="sm:col-span-2">
                <JoinServerCard
                    Header="Join Server"
                    Description="To - Do. Implement a Server API to get the information"
                    ServerIP="play.tbnmc.xyz"
                />
            </div>
            <DiscordCard
                Header="Join our Community!"
                Description="Our community is more active over at Discord.
                             Come and join us!"
                InviteUrl="some-invite-url"
            />
            <GalleryMapCard
                Header="Server Map"
                Description="See what's going on at server without needing to log in!"
                Link="https://map.tbnmc.xyz"
            />
            <GalleryMapCard
                Header="Photo Gallery"
                Description="Beautiful moments of our server captured by our players!"
            />
            <GalleryMapCard
                Header="Server Updates"
                Description="Updates of the server."
                Link="/blog"
            />
        </div>
    )
}

export default HomepageCards