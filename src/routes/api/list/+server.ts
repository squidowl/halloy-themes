import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { db } from '$lib'
import { themes } from '$lib/db';

export const GET: RequestHandler = async ({ }) => {
  const items = await db.select({
    name: themes.name,
    theme: themes.data,
    encoded: themes.encoded,
    submittedBy: themes.submittedBy,
  }).from(themes);

  return json({
    items
  });
};
