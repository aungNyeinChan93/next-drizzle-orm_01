
'use server'

import { categoryTable } from "@/db/schema"
import db from "@/index"
import { redirect } from "next/navigation"

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
};


export type CategoryType = typeof categoryTable.$inferInsert
export async function createCategory(name: string) {
    const category_id = await db.insert(categoryTable)
        .values({
            id: Math.random().toString(),
            name: name as string
        })
        .returning({
            id: categoryTable.id
        })

    if (category_id) {
        return redirect('/categories')
    }
    return category_id;
}