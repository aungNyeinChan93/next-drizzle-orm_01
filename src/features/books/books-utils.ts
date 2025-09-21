
'use server'

import { bookTable } from "@/db/schema"
import db from "@/index"

export async function createBook(name: string) {
    const book_id = await db.insert(bookTable)
        .values({
            name: name as string
        })
        .returning({
            id: bookTable.id
        })

    return book_id
};



export async function getAllBooks() {
    const books = await db.query.bookTable.findMany()
    return books
}