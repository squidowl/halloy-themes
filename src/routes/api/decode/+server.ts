import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { decode } from 'theme';

export const GET: RequestHandler = async ({ url }) => {
  const theme = url.searchParams.get('theme');

  if (theme === null) {
    error(400, 'theme param required');
  }

  const decoded = decode(theme);

  return json(decoded);
};
