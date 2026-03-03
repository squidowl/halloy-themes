<script lang="ts">
  import '../app.css';

  import { page } from '$app/state';
  import { writable } from 'svelte/store';
  import { Toaster } from 'svelte-french-toast';
  import Navigation from '$lib/components/Navigation.svelte';
  import { setThemeSearchInputContext } from '$lib/theme-search-context';

  let { data, children } = $props();

  const isAdmin = $derived(data.isAdmin);
  const themeSearchInput = writable(page.url.searchParams.get('q') ?? '');

  setThemeSearchInputContext(themeSearchInput);

  $effect(() => {
    themeSearchInput.set(page.url.searchParams.get('q') ?? '');
  });
</script>

<div class="text-white" style="font-family: Inter, sans-serif;">
  <Navigation {isAdmin} />

  <Toaster />

  <div class="w-full pt-16">
    {@render children()}
  </div>
</div>

<style global>
  :global(html),
  :global(body) {
    background-color: black;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
</style>
