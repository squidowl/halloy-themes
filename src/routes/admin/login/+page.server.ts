import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const password = form.get('password')?.toString() ?? '';

    if (password == env.ADMIN_PASSWORD) {
      cookies.set('admin-token', env.ADMIN_TOKEN!, { path: '/' });
      redirect(303, '/admin/submissions');
    }

    return fail(401);
  }
};
