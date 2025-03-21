import type { PageServerLoad } from './$types';

import * as theme from '$lib/theme';

export const load: PageServerLoad = async ({}) => {
  return {
    themes: await theme.load()
  };
};
