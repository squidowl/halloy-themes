import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const encodedTheme = formData.get('encodedTheme');

      console.log(encodedTheme);
      // TODO: Validate the theme.
      // TODO: Submit the theme.

      return { 
        success: true, 
        message: `Theme has been submitted successfully!`,
      };
    } catch (error) {
      console.error('Upload error:', error);
      return fail(500, { 
        error: 'File upload failed', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  }
};