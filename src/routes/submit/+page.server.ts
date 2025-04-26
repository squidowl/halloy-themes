import * as TOML from '@iarna/toml';

import type { Actions } from './$types';

import { decode } from 'theme';
import { fail } from '@sveltejs/kit';

import * as theme from '$lib/theme';
import { notify } from '$lib/notification';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = (event) => {
  const param = event.url.searchParams.get("e");

  if (param) {
    return {
      themeUrl: `halloy:///theme?e=${param}`,
    }
  }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const themeName = formData.get('themeName')?.toString();
    const themeUrl = formData.get('themeUrl')?.toString();

    if (!themeName) {
      return fail(400, { error: 'Missing theme name' });
    }
    if (!themeUrl) {
      return fail(400, { error: 'Missing theme url' });
    }

    let encoded;
    let colors;
    try {
      if (themeUrl.startsWith('halloy:///theme')) { // Halloy URL with encoded colors
        encoded = new URL(themeUrl).searchParams.get('e');

        if (!encoded) {
          return fail(400, { invalid: true });
        }

        colors = decode(encoded);
      } else if (themeUrl.endsWith('.toml')) { // External URL with TOML file
        const response = await fetch(themeUrl);

        if (!response.ok) {
          return fail(400, { error: 'Failed to fetch theme from URL' });
        }

        const tomlString = await response.text();
        colors = TOML.parse(tomlString);
      } else {
        return fail(400, { invalid: true });
      }
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

    await notify('Theme submitted', `${themeName}\n\nhttps://themes.halloy.chat/admin/submissions`);

    return {
      success: true,
      message: `Theme has been submitted successfully!`
    };
  }
};
