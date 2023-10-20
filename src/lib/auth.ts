import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"
import { AuthOptions } from "next-auth";
import { primasClient } from "./prisma";

export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(primasClient),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ]
  }