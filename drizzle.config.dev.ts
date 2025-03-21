import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/lib/db/schema.ts',
  casing: 'snake_case',
  out: './migrations',
  dbCredentials: {
    url: 'postgres://postgres:postgres@localhost:5432/main'
  }
});
