import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '$env/dynamic/private';
import { themes, submissions } from '$lib/db/schema';

const CONNECTION_URL = env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/main';

const pool = drizzle({ client: postgres(CONNECTION_URL), casing: 'snake_case' });

export default {
  submissions,
  pool,
  themes
};
