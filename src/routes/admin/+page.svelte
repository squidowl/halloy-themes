<script lang="ts">
  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';

  const { data }: PageProps = $props();
</script>

<div class="flex flex-wrap justify-center gap-4 p-2">
  {#each data.submissions as theme}
    <div class="p-4">
      <Window {theme} />
      <div class="flex flex-col justify-start">
        <div class="text-md mt-2">
          {theme.name}
        </div>
      </div>
    </div>
  {/each}
</div>
