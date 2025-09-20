import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/index"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";
import * as schema from '@/db/schema'


export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: { ...schema }
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    plugins: [nextCookies()],

});