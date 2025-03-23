import type { PageServerLoad } from './$types';
import { decode } from 'theme';
import * as TOML from '@iarna/toml';

import * as theme from '$lib/theme';

export const actions = {
  toToml: async ({ request }) => {
    const formData = await request.formData();

    const encoded = formData.get('encoded')?.toString();
    const name = formData.get('name')?.toString();

    if (!encoded || !name) {
      return { success: false };
    }

    try {
      const json = decode(encoded);
      const toml = TOML.stringify(json);

      return {
        success: true,
        toml,
        filename: `${name}.toml`
      };

    } catch (error) {
      return {
        success: false,
        error: 'Failed to convert to TOML'
      };
    }
  }
};


export const load: PageServerLoad = async ({ }) => {
  return {
    themes: await theme.load(),
  };
};
