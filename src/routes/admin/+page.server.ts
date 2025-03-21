import { env } from '$env/dynamic/private'
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import * as theme from '$lib/theme';

export const load: PageServerLoad = async ({ url, cookies }) => {
  if (url.searchParams.has('logout')) {
    cookies.delete('admin-token', { path: '/' });
    redirect(303, '/');
  }

  return {
    submissions: await theme.submissions()
  };
};

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const password = form.get('password')?.toString() ?? '';

    if (password == env.ADMIN_PASSWORD) {
      cookies.set("admin-token", env.ADMIN_TOKEN!, { path: '/' });

      redirect(303, '/admin');
    }

    return fail(401);
  }
}
