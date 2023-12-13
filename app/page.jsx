

import HeroImage from "@/components/body/hero-image"
import HomepageCards from "@/components/body/homepage-cards"
export default function Home() {

  return (
    <main className="h-full">
        <div className="px-10">
            <HeroImage
                header={"The Batuhan's Network SMP"}
                description="A cracked SMP server with tweaks over Vanilla Minecraft"
                image="/hero/4.png"
            />
        </div>
      <div className="px-0 sm:px-5 md:px-[80px] my-5 max-w-4xl flex justify-center w-auto mx-auto">
            <div className="justify-center w-auto">
                <HomepageCards />
            </div>
      </div>
    </main>
  )
}
