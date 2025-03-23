import { env } from '$env/dynamic/private';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url, cookies }) => {
  if (!locals.isAdmin) {
    error(401, 'unauthorized');
  }

  if (url.searchParams.has('logout')) {
    cookies.delete('admin-token', { path: '/' });
    redirect(303, '/');
  }
};

export const actions: Actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const password = form.get('password')?.toString() ?? '';

    if (password == env.ADMIN_PASSWORD) {
      cookies.set('admin-token', env.ADMIN_TOKEN!, { path: '/' });
      redirect(303, '/admin/submissions');
    }

    return fail(401);
  },
};
