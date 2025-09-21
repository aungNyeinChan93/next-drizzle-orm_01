import { articelTable } from "@/db/schema"
import db from "@/index"


export type ArticleType = typeof articelTable.$inferSelect

export async function getAllArticles() {
    const articles = await db.query.articelTable.findMany({
        with: {
            articleCategory: {
                with: { category: true }
            },
            comments: true,
            user: true,

        }
    });
    return articles
}