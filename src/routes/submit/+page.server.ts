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
      if (await theme.nameExists(themeName)) {
        return fail(400, { error: 'Theme name already exists, choose a new name' });
      }

      await theme.submit(themeName, colors);
    } catch (e: any) {
      return fail(500, { error: 'Failed to submit theme' });
    }

    return {
      success: true,
      message: `Theme has been submitted successfully!`
    };
  }
};
