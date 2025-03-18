import type { Theme } from '$lib/types/theme';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const resp = await fetch('/api/list');
  const {
    items
  }: {
    items: {
      name: string;
      theme: Theme;
      encoded: string;
    }[];
  } = await resp.json();

  return { themes: items };
};
