// import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";


// export const customers = pgTable('customers', {
//     id: uuid('id').primaryKey(),
//     name: text('name').notNull(),
//     email: text('email').notNull().unique(),
//     phone: integer('phone'),
//     avator: text('avator'),

//     created_at: timestamp("created_at").defaultNow().notNull(),
//     updated_at: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull()
// });