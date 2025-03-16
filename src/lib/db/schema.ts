import { json, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const themes = pgTable('theme', {
  id: serial('theme_id').primaryKey(),
  name: text().notNull().unique(),
  data: json().notNull(),
  encoded: text().notNull(),
  submittedBy: text().notNull(),
  createdOn: timestamp().notNull().defaultNow(),
});
