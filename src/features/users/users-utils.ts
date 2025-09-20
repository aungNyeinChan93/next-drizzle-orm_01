import { user } from "@/db/schema"
import db from "@/index"


export type UserType = typeof user.$inferSelect

export async function getAllUsers() {
    const users = db.select().from(user);
    return users
}