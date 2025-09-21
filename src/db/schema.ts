import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, uuid, integer, uniqueIndex, index, pgEnum } from "drizzle-orm/pg-core";


// user
export const user = pgTable("users", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
});

export const userRelations = relations(user, ({ many }) => (
    {
        articles: many(articelTable),
        comments: many(commentTable)
    }
))

export const session = pgTable("session", {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
});

export const verification = pgTable("verification", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
});


// customers
export const customerType = pgEnum('customerType', ['silver', 'gold', 'platinum', 'diamond', 'ruby'])
export const customers = pgTable('customers', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    type: customerType('type').default('silver').notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull()
}, table => {
    return {
        customerNameIndex: index('customerNameIndex').on(table.name)
    }
});

// article
export const articelTable = pgTable('articles', {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    body: text('body'),
    user_id: text('user_id').references(() => user.id).notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull(),
}, tabel => {
    return {
        titleIndex: index('titleIndex').on(tabel.title),
    }
});

export const articleRelations = relations(articelTable, ({ one, many }) => ({
    user: one(user, {
        fields: [articelTable.user_id],
        references: [user.id]
    }),
    comments: many(commentTable),
    articleCategory: many(articleCategoryTable)

}))

// comment 
export const commentTable = pgTable('comments', {
    id: text('id').primaryKey(),
    body: text('body').notNull(),
    user_id: text('user_id').references(() => user.id, { onDelete: 'cascade' }),
    article_id: text('article_id').references(() => articelTable.id, { onDelete: 'cascade' })
});

export const commentRelations = relations(commentTable, ({ many, one }) => ({
    user: one(user, {
        fields: [commentTable.user_id],
        references: [user.id]
    }),
    article: one(articelTable, {
        fields: [commentTable.article_id],
        references: [articelTable.id]
    }),
}))

// category
export const categoryTable = pgTable('categories', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().$onUpdate(() => new Date()).notNull(),
}, table => {
    return {
        categoryNameIndex: index('categoryNameIndex').on(table.name)
    }
});

export const categoryRelations = relations(categoryTable, ({ many, one }) => (
    {
        articleCategory: many(articleCategoryTable)
    }
));

// articleCategoryTable
export const articleCategoryTable = pgTable('articleCategory', {
    article_id: text('article_id').notNull().references(() => articelTable.id, { onDelete: 'cascade' }),
    category_id: text('category_id').notNull().references(() => categoryTable.id, { onDelete: 'cascade' })
})

export const articleCategoryRelation = relations(articleCategoryTable, ({ one }) => ({
    article: one(articelTable, {
        fields: [articleCategoryTable.article_id],
        references: [articelTable.id]
    }),
    category: one(categoryTable, {
        fields: [articleCategoryTable.category_id],
        references: [categoryTable.id]
    })
}))