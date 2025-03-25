import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import * as submission from '$lib/submission';

export const load: PageServerLoad = async ({}) => {
  return {
    submissions: await submission.load()
  };
};

export const actions: Actions = {
  approve: async ({ request }) => {
    const form = await request.formData();
    const id = form.get('id')?.toString();

    if (!id) {
      return fail(400);
    }

    await submission.approve(parseInt(id));

    return {
      approved: true
    };
  },
  reject: async ({ request }) => {
    const form = await request.formData();
    const id = form.get('id')?.toString();

    if (!id) {
      return fail(400);
    }

    await submission.reject(parseInt(id));

    return {
      rejected: true
    };
  }
};
