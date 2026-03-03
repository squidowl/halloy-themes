import { getContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

const THEME_SEARCH_INPUT_CONTEXT = Symbol('theme-search-input');

export function setThemeSearchInputContext(store: Writable<string>): void {
  setContext(THEME_SEARCH_INPUT_CONTEXT, store);
}

export function getThemeSearchInputContext(): Writable<string> {
  const context = getContext<Writable<string> | undefined>(THEME_SEARCH_INPUT_CONTEXT);

  if (!context) {
    throw new Error('Theme search context is not available');
  }

  return context;
}
