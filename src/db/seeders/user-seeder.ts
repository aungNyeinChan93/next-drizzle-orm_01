import { drizzle } from "drizzle-orm/neon-http";
import { neon } from '@neondatabase/serverless'
import * as schema from '@/db/schema'

import 'dotenv/config';
import { asc, eq, sql } from "drizzle-orm";

const db = drizzle(neon(process.env.DATABASE_URL!), { schema: { ...schema } });



export async function main() {
    const emails = await db.query.user.findMany({
        columns: {
            name: true
        },
        extras: {
            lowercaseName: sql<string>`lower(${schema.user.email})`.as('lowercaseName')
        },
        with: {
            articles: {
                columns: { title: true }
            },
            comments: true
        },

        orderBy: asc(schema.user.createdAt),
        // where: (table, funs) => funs.eq(table.name, 'susu'),
        // where: eq(schema.user.name, 'susu')
        // offset: 2,

    });


    console.log({ emails });

    // await db
    //     .update(schema.user)
    //     .set({
    //         name: 'hoho'
    //     })
    //     .where(eq(schema.user.email, 'hoho@gmail.com'));

};


main()