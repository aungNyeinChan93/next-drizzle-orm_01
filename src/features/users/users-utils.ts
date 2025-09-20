import { usersTable } from "@/db/schema"
import db from "@/index"


export type UserType = typeof usersTable.$inferSelect

export async function getAllUsers() {
    const users = db.select().from(usersTable);
    return users
}