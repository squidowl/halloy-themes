import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { encode } from 'theme';
import { db } from '$lib';
import { themes } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {
  const {
    name,
    theme: data,
    user: submittedBy
  }: { name: string; theme: object; user: string } = await request.json();

  const encoded = encode(data);

  await db.insert(themes).values({ name, data, encoded, submittedBy });

  return json({ success: true });
};
