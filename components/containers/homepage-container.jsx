
import InfoSection from "@/components/home/info-section"
import HomepageCards from "@/components/home/homepage-cards"
import HeroImage from "@/components/body/hero-image"

function HomepageContainer() {
    return (
        <div className="container mx-auto pb-5">
            <HeroImage
                header={"The Batuhan's Network SMP"}
                description="A cracked SMP server with tweaks over Vanilla Minecraft"
                image="/hero/4.png"
            />
            <InfoSection />
            <HomepageCards />
        </div>
    )
}

export default HomepageContainer