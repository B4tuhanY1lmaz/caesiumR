"use client"

import '@/styles/global.css'

import { SessionProvider } from "next-auth/react"
import ModalProvider from "@/components/modals/hooks/modal-provider"

import { useModal } from "@/components/modals/hooks/use-modal-store"
import { useEffect } from "react"

export default function RootLayout({ children }) {
    const { onOpen } = useModal()

    // Open Cookies modal when page is loaded
    useEffect(() => {
        const cA = localStorage.getItem("cookiesAccepted")
        if (window.location.pathname === "/") {
            if (!cA) {
                return onOpen("cookies")
            }
        }
    }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gradient-to-br from-[#132C33] to-indigo-950 text-[#D1D0CB]`}>
        <SessionProvider>
            <div className="h-full">
                <ModalProvider/>
                {children}
            </div>
        </SessionProvider>
      </body>
    </html>
  )
}
