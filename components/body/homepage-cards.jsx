import DiscordCard from "@/components/cards/discord-invite"

function HomepageCards() {
    return (
        <div className="">
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