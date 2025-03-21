import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { decode } from 'theme';

function extractTheme(theme: string) {
  const prefix = "halloy:///theme?e=";
  return theme.startsWith(prefix) ? theme.slice(prefix.length) : theme;
}

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const encodedTheme = formData.get('encodedTheme');
      const themeName = formData.get('themeName');

      if (encodedTheme) {
        const theme = extractTheme(encodedTheme as string);
        const decoded = decode(theme);

        // TODO: Submit the theme.
        console.log(decoded);
      }

      return {
        success: true,
        message: `Theme has been submitted successfully!`,
      };
    } catch (error) {
      return fail(500, { error: 'Failed to decode theme. Ensure it is valid and try again.' });
    }
  }
};