import db from "@/index"

export async function getALlCategoryWithArticles() {
    const categories = await db.query.categoryTable.findMany({
        with: {
            articleCategory: {
                with: {
                    article: true
                }
            },
        }
    })
    return categories
}