import { customers } from "@/db/schema"
import db from "@/index"


export type CustomerType = typeof customers.$inferSelect
export async function getAllCustomers() {
    const data: CustomerType[] = await db.select().from(customers)
    return data
}