import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SUBMIT_TOKEN } from '$env/static/private';

import { encode } from 'theme';
import { db } from '$lib';
import { themes } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {
  const {
    name,
    theme: data,
    user: submittedBy,
    token
  }: { name: string; theme: object; user: string; token: string } = await request.json();

  if (token !== SUBMIT_TOKEN) {
    error(403, "unauthorized");
  }

  const encoded = encode(data);

  await db.insert(themes).values({ name, data, encoded, submittedBy });

  return json({ success: true });
};
