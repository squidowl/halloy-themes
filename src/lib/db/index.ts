import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { NEON_DATABASE_URL } from '$env/static/private';

neonConfig.fetchEndpoint = (host) => {
  const [protocol, port] = host === 'db.localtest.me' ? ['http', 4444] : ['https', 443];
  return `${protocol}://${host}:${port}/sql`;
};

export const db = drizzle({ client: neon(NEON_DATABASE_URL), casing: 'snake_case' });

export { themes } from '$lib/db/schema';
