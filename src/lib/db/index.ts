import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '$env/dynamic/private';
import { themes, submissions } from '$lib/db/schema';

const CONNECTION_URL = env.NEON_DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/main';

neonConfig.fetchEndpoint = (host) => {
  const [protocol, port] = host === 'db.localtest.me' ? ['http', 4444] : ['https', 443];
  return `${protocol}://${host}:${port}/sql`;
};

const pool = drizzle({ client: neon(CONNECTION_URL), casing: 'snake_case' });

export default {
  submissions,
  pool,
  themes,
};
