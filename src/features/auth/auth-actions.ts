'use server'

import { auth } from "@/lib/auth"
import { headers } from "next/headers"


export async function registerAction(init: any, formData: FormData) {
    const data = Object.fromEntries(formData.entries())
    if (data) {
        try {
            await auth.api.signUpEmail({
                body:
                {
                    name: data?.name as string,
                    email: data?.email as string,
                    password: data?.password as string,
                    callbackURL: '/',
                },
            })
            // await db.insert(usersTable).values({ name: data?.name as string, email: data?.email as string, id: Math.random().toString() })
        } catch (error) {
            console.log(error);
            return false
        }
    }
    return true
}


export type SessionType = typeof auth.$Infer.Session
export const getServerSession = async () => {
    const session: SessionType = await auth.api.getSession({ headers: await headers() })
    return session
}