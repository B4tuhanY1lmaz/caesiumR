import HeroImage from "@/components/body/hero-image"
import HomepageCards from "@/components/body/homepage-cards"
import HomepageContainer from "@/components/containers/homepage-container";

export const metadata = {
    title: "CaesiumR"
}

export default function Home() {

  return (
    <main>
        <div className="px-10">
            <HeroImage
                header={"The Batuhan's Network SMP"}
                description="A cracked SMP server with tweaks over Vanilla Minecraft"
                image="/hero/4.png"
            />
        </div>
      <div>
            <div className="justify-center">
                <HomepageContainer />
            </div>
      </div>
    </main>
  )
}
