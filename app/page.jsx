import HomepageContainer from "@/components/containers/homepage-container";

export const metadata = {
    title: "CaesiumR"
}

export default function Home() {

  return (
    <main>
      <div>
            <div className="justify-center">
                <HomepageContainer />
            </div>
      </div>
    </main>
  )
}
