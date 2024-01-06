"use client"

import Header from "@/components/body/header";
import Footer from "@/components/body/footer";

import { Inter } from 'next/font/google'
import '@/styles/global.css'

import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#132C33] text-[#D1D0CB]`}>
        <SessionProvider>
            <div className="h-full">
                <Header />
                <div className={`main-layout`}>
                    {children}
                </div>
                <Footer />
            </div>
        </SessionProvider>
      </body>
    </html>
  )
}
