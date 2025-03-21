<script lang="ts">
  import '../app.css';

  import Navigation from '$lib/components/Navigation.svelte';

  let { data, children } = $props();
</script>

<div class="text-white" style="font-family: Inter, sans-serif;">
  <Navigation isAdmin={data.isAdmin} />

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
