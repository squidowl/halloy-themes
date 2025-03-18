import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { CONNECTION_STRING } from '$env/static/private';

neonConfig.fetchEndpoint = (host) => {
  const [protocol, port] = host === 'db.localtest.me' ? ['http', 4444] : ['https', 443];
  return `${protocol}://${host}:${port}/sql`;
};

export const db = drizzle({ client: neon(CONNECTION_STRING), casing: 'snake_case' });

export { themes } from '$lib/db/schema';
