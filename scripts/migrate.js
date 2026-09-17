// Applies pending database migrations, then exits.
// Runs as a separate step before a new version of the app is started.
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

const client = postgres(process.env.DATABASE_URL, { max: 1, onnotice: () => {} });

try {
  await migrate(drizzle(client), { migrationsFolder: './migrations' });
  console.log('Migrations are up to date');
} catch (e) {
  console.error('Migration failed:', e);
  process.exitCode = 1;
} finally {
  await client.end();
}
