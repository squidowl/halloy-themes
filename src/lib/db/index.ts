import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = 'postgres://postgres:postgres@db.localtest.me:5432/main';

neonConfig.fetchEndpoint = (host) => {
  const [protocol, port] = host === 'db.localtest.me' ? ['http', 4444] : ['https', 443];
  return `${protocol}://${host}:${port}/sql`;
};

export const db = drizzle({ client: neon(connectionString) });

export { themes } from '$lib/db/schema'
