import { db } from '$lib';
import { decode } from 'theme';
import { fail } from '@sveltejs/kit';
import { themes } from '$lib/db';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const themeName = formData.get('themeName')?.toString();
    const halloyUrl = formData.get('halloyUrl')?.toString();

    if (!themeName) {
      return fail(400, { error: "Missing theme name" });
    }
    if (!halloyUrl) {
      return fail(400, { error: "Missing halloy url" });
    }

    let encodedTheme;
    let theme;
    try {
      encodedTheme = new URL(halloyUrl).searchParams.get('e');

      if (!encodedTheme) {
        return fail(400, { invalid: true });
      }

      theme = decode(encodedTheme);
    } catch (e) {
      return fail(400, { invalid: true });
    }

    try {
      await db.insert(themes).values({ name: themeName, data: theme, encoded: encodedTheme, submittedBy: '' });
    } catch (e: any) {
      if (e instanceof Error) {
        if (e.message.startsWith("duplicate key")) {
          return fail(500, { error: "Theme name already exists, choose a new name" });
        }
      }
      return fail(500, { error: e.message });
    }

    return {
      success: true,
      message: `Theme has been submitted successfully!`,
    };
  }
};
