import type { Body } from './api/list/+server.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const resp = await fetch('/api/list');
  const { items }: Body = await resp.json();

return { themes: items };
};
