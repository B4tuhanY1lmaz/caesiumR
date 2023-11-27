import Header from "@/components/body/header";
import Footer from "@/components/body/footer";

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#0E0C07] text-[#D1D0CB]`}>
        <div className="h-screen">
            <Header />
            <div className={`h-full`}>
                {children}
            </div>
            <Footer />
        </div>
      </body>
    </html>
  )
}
