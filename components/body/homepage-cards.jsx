
import JoinServerCard from "@/components/cards/join-server"
import RulesCard from "@/components/cards/rules"
import GalleryMapCard from "@/components/cards/gallery-map"
import DiscordCard from "@/components/cards/discord-invite"

function HomepageCards() {
    return (
        <div className="flex flex-wrap gap-4 justify-center w-auto">
            <JoinServerCard
                Header="Join Server"
                Description="To - Do. Implement a Server API to get the information"
                ServerIP="play.tbnmc.xyz"
            />
            <RulesCard
                Header="Server Rules"
                Description="Server rules etc etc etc ... It'll use Markdown"
            />
            <GalleryMapCard
                type="map"
                Header="Server Map"
                Description="See what's going on at server without needing to log in!"
            />
            <GalleryMapCard
                type="gallery"
                Header="Photo Gallery"
                Description="Beautiful moments of our server captured by our players!"
            />
            <GalleryMapCard
                type="blog"
                Header="Server Updates"
                Description="Updates of the server."
            />
            <DiscordCard
                Header="Join our Community!"
                Description="Our community is more active over at Discord.
                             Come and join us!"
                InviteUrl="some-invite-url"
            />
        </div>
    )
}

export default HomepageCards