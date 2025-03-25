import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, cookies }) => {
  if (url.searchParams.has('logout')) {
    cookies.delete('admin-token', { path: '/' });
    redirect(303, '/');
  }
};
