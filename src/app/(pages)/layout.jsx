import Header from "@/components/body/header"
import Footer from "@/components/body/footer"

import readConfig from "/config/siteconfig.json"

const websiteUrl = process.env.NODE_ENV === 'production'
    ? `https://${readConfig.siteUrl}`
    : `http://localhost:3000`

export const metadata = {
    metadataBase: new URL(websiteUrl),
    title: readConfig.siteName,
    description: readConfig.siteDescription,
    openGraph: {
        url: websiteUrl,
        siteName: readConfig.siteName,
        type: 'website',
        images: [
            {
                url: `${websiteUrl}/${readConfig.ogpImage}`,
                width: 1200,
                height: 900,
                alt: `Preview Image for ${readConfig.siteName}.`
            }
        ]
    }
}

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={`main-layout min-h-screen`}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout