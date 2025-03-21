import { json, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const themes = pgTable('theme', {
  id: serial('theme_id').primaryKey(),
  name: text().notNull().unique(),
  colors: json().notNull(),
  encoded: text().notNull(),
  createdOn: timestamp().notNull().defaultNow()
});

export const submissions = pgTable('submission', {
  id: serial('submission_id').primaryKey(),
  name: text().notNull(),
  colors: json().notNull(),
  encoded: text().notNull(),
  createdOn: timestamp().notNull().defaultNow()
});
