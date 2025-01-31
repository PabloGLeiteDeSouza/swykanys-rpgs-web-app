// middleware.ts
import { NextRequest, NextResponse } from "next/server"
import NextAuth from "next-auth"
import authConfig from "./auth.config"

const { auth } = NextAuth(authConfig)

export default auth(async function middleware(req: NextRequest) {
  // Se a rota já estiver excluída pelo matcher, essa função nem é chamada.
  // Então, se cair aqui, é pq é rota protegida.

  // Verifica se o usuário tem sessionToken (ajuste o nome de acordo com seu setup real).
  // Em produção, dependendo da configuração, pode ser "__Secure-authjs.session-token"
  const sessionToken = req.cookies.get("authjs.session-token")

  // Se não tiver token, redireciona para sign-in
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url))
  }

  // Caso contrário, segue para a rota solicitada
  return NextResponse.next()
})

// Configuração do matcher para:
// - Ignorar /api/auth (rotas de autenticação do NextAuth/Auth.js)
// - Ignorar /auth (onde fica sua página de login/registro/etc.)
// - Ignorar _next (arquivos internos do Next.js)
// - Ignorar arquivos estáticos (.*)
export const config = {
  matcher: [
    "/((?!api/auth|auth|_next|.*\\..*).*)",
  ],
}
