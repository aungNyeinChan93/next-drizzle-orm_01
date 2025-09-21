import { user } from "@/db/schema"
import db from "@/index"


export type UserType = typeof user.$inferSelect

export async function getAllUsers() {
    const users = (await db.select().from(user));
    return users
};



export const getUsers = async () => {
    const result = await db.query.user.findMany({
        with: {
            comments: true,
            articles: true
        },
    });
    return result
}