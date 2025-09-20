'use server'

import { usersTable } from "@/db/schema"
import db from "@/index"


export async function registerAction(init: any, formData: FormData) {
    const data = Object.fromEntries(formData.entries())

    if (data) {
        try {
            await db.insert(usersTable).values({ name: data?.name as string, email: data?.email as string, id: Math.random().toString() })
        } catch (error) {
            console.log(error);
            return false
        }
    }

    return true
}