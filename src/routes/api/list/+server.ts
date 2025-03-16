import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { encode } from 'theme';
import { ferra, midnight, sunset, forest } from '$lib/types/theme';

export const GET: RequestHandler = async ({ }) => {
  const themes = [
    { name: 'ferra', theme: ferra },
    { name: 'midnight', theme: midnight },
    { name: 'sunset', theme: sunset },
    { name: 'forest', theme: forest }
  ];

  const items = themes.map(({ name, theme }) => {
    return {
      name,
      theme,
      encoded: encode(theme),
    };
  });

  return json({
    items
  });
};
