'use server'

import { customers } from "@/db/schema"
import db from "@/index"
import { CustomerSchema } from "@/lib/zod-schema/zod-customer"


export type CustomerType = typeof customers.$inferInsert

export async function createCustomerAction(initialState: any, formData: FormData) {
    const data = Object.fromEntries(formData.entries())


    const { success, data: fields, error } = await CustomerSchema.safeParseAsync({ ...data })

    if (!success) {
        return {
            success, errors: {
                name: error?.format().name?._errors[0],
                email: error?.format().email?._errors[0]
            }
        }
    }
    console.log({ fields });


    try {
        await db.insert(customers).values({ ...fields as CustomerType, id: Math.random().toString() })
    } catch (error) {
        return {
            success, errors: { other: error instanceof Error ? error?.message : 'create fail' }
        }
    }
    return { success: true }
}