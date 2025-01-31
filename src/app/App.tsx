"use client"
import { SessionProvider } from "next-auth/react"

const AppRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AppRoot;