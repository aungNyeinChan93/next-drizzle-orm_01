import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/db/schema';
import { bookTable } from '@/db/schema'

// Load env
import 'dotenv/config';

const pg = neon(process.env.DATABASE_URL!);

const db = drizzle(pg, { schema });

async function main() {

    await db.delete(bookTable);

    const book_id = await db.insert(bookTable)
        .values([{ name: 'test book one', }, { name: 'test book one' }])
        .returning({
            id: bookTable.id
        })

    console.log(book_id);

};

main();