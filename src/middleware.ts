import { NextRequest, NextResponse } from "next/server"
import authConfig from "./auth.config"
import NextAuth from "next-auth"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
    if (!req.url.includes('/auth')) {
        const session = req.cookies.get('authjs.session-token');
        if (!session) {
            return NextResponse.redirect(new URL('/auth/sign-in', req.url))
        }
    }
})

export const config = {
    
}