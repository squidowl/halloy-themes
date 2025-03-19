import type { Item } from '$lib/types';
import type { PageLoad } from './$types';


export const load: PageLoad = async ({ fetch }) => {
  const resp = await fetch('/api/list');
  const { items }: { items: Item[] } = await resp.json();

return { themes: items };
};
