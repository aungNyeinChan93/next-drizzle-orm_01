CREATE TABLE "articleCategory" (
	"article_id" text,
	"category_id" text
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP INDEX "nameIndex";--> statement-breakpoint
ALTER TABLE "articleCategory" ADD CONSTRAINT "articleCategory_article_id_articles_id_fk" FOREIGN KEY ("article_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articleCategory" ADD CONSTRAINT "articleCategory_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "categoryNameIndex" ON "categories" USING btree ("name");--> statement-breakpoint
CREATE INDEX "customerNameIndex" ON "customers" USING btree ("name");