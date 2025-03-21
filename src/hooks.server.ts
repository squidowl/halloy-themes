import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // TODO: middleware

  if (event.url.pathname.startsWith('/admin')) {
    console.log("admin");
  }

  return resolve(event);
};
