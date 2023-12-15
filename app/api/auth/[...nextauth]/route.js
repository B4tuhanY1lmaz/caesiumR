import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import DiscordProvider from "next-auth/providers/discord"
import { db } from "@/lib/db"

const prisma = db

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.username,
                    email: profile.email,
                    image: profile.image_url,
                    role: profile.role ?? 'USER'
                }
            }
        }),
    ],
    callbacks: {
        session({ session, user }) {
            session.user.role = user.role
            return session
        }
    },
    pages: {
        // signIn: '/auth/signin'
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }