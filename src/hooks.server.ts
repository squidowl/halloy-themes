import { env } from '$env/dynamic/private';

import { error, redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.isAdmin = false;

  if (event.cookies.get('admin-token') === env.ADMIN_TOKEN) {
    event.locals.isAdmin = true;
  } else if (event.url.pathname.startsWith('/admin') && event.route.id !== '/admin/login') {
    if (event.request.method == 'GET') {
      redirect(303, '/admin/login');
    } else {
      error(401, 'unauthorized');
    }
  }

  return resolve(event);
};
