<script lang="ts">
  import '../app.css';

  import { Toaster } from 'svelte-french-toast';
  import Navigation from '$lib/components/Navigation.svelte';

  let { data, children } = $props();

  const isAdmin = $derived(data.isAdmin);
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
