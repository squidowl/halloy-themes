import { env } from '$env/dynamic/private';

import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.isAdmin = false;

  if (event.url.pathname.startsWith('/admin')) {
    const token = event.cookies.get('admin-token');

    if (token === env.ADMIN_TOKEN) {
      event.locals.isAdmin = true;
    }
  }

  return resolve(event);
};
