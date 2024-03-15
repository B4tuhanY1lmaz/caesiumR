import InfoSection from "@/components/home/info-section"
import HomepageCards from "@/components/home/homepage-cards"
import HeroImage from "@/components/body/hero-image"

import readConfig from "/config/siteconfig.json"

function HomepageContainer() {
    return (
        <div className="container mx-auto pb-5">
            <HeroImage
                header={readConfig.server.name}
                description={readConfig.server.description}
                image={readConfig.ogpImage}
            />
            <InfoSection />
            <HomepageCards />
        </div>
    )
}

export default HomepageContainer