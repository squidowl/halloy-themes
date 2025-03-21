import type { Actions } from './$types';

import { decode } from 'theme';
import { fail } from '@sveltejs/kit';

import * as theme from '$lib/theme';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const themeName = formData.get('themeName')?.toString();
    const halloyUrl = formData.get('halloyUrl')?.toString();

    if (!themeName) {
      return fail(400, { error: 'Missing theme name' });
    }
    if (!halloyUrl) {
      return fail(400, { error: 'Missing halloy url' });
    }

    let encoded;
    let colors;
    try {
      encoded = new URL(halloyUrl).searchParams.get('e');

      if (!encoded) {
        return fail(400, { invalid: true });
      }

      colors = decode(encoded);
    } catch (e) {
      return fail(400, { invalid: true });
    }

    try {
      await theme.submit(themeName, colors);
    } catch (e: any) {
      if (e instanceof Error) {
        if (e.message.startsWith('duplicate key')) {
          return fail(500, { error: 'Theme name already exists, choose a new name' });
        }
      }
      return fail(500, { error: e.message });
    }

    return {
      success: true,
      message: `Theme has been submitted successfully!`
    };
  }
};
