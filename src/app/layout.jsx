"use client"

import Header from "@/components/body/header";
import Footer from "@/components/body/footer";

import '@/styles/global.css'

import { SessionProvider } from "next-auth/react"
import ModalProvider from "@/components/modals/hooks/modal-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-br from-[#132C33] to-indigo-950 bg-cover text-[#D1D0CB]`}>
        <SessionProvider>
            <div className="h-full">
                <Header />
                <div className={`main-layout min-h-screen`}>
                    <ModalProvider />
                    {children}
                    <Footer />
                </div>
            </div>
        </SessionProvider>
      </body>
    </html>
  )
}
