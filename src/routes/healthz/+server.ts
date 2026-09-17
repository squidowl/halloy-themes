import { sql } from 'drizzle-orm';
import { error, text } from '@sveltejs/kit';

import db from '$lib/db';

export const GET = async () => {
  try {
    await db.pool.execute(sql`select 1`);
  } catch {
    error(503, 'database unavailable');
  }

  return text('ok');
};
