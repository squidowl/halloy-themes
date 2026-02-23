import { error, fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { decode } from 'theme';
import * as TOML from '@iarna/toml';

import * as theme from '$lib/theme';

export const actions: Actions = {
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
  },
  delete: async ({ request, locals }) => {
    if (!locals.isAdmin) {
      error(401, 'unauthorized');
    }

    const formData = await request.formData();
    const id = Number.parseInt(formData.get('id')?.toString() ?? '', 10);

    if (Number.isNaN(id)) {
      return fail(400);
    }

    await theme.remove(id);

    return {
      deleted: true
    };
  },
  rename: async ({ request, locals }) => {
    if (!locals.isAdmin) {
      error(401, 'unauthorized');
    }

    const formData = await request.formData();
    const id = Number.parseInt(formData.get('id')?.toString() ?? '', 10);
    const name = formData.get('name')?.toString().trim() ?? '';

    if (Number.isNaN(id) || !name) {
      return fail(400);
    }

    if (await theme.nameExists(name, id)) {
      return fail(409, {
        error: 'Theme name already exists'
      });
    }

    await theme.rename(id, name);

    return {
      renamed: true
    };
  }
};

export const load: PageServerLoad = async ({}) => {
  return {
    themes: await theme.load()
  };
};
