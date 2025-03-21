<script lang="ts">
  import '@fontsource/inter';
  import '@fontsource/iosevka';
  import '@fontsource/iosevka/700.css';

  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';
  import Navigation from "$lib/components/Navigation.svelte";

  const { data }: PageProps = $props();
</script>

<div class="text-white" style="font-family: Inter, sans-serif;">
  <Navigation />
  <div class="w-full pt-16">
    <div class="flex flex-wrap justify-center gap-4 p-2">
      {#each data.themes as item}
        <div class="p-4">
          <Window {item} />
          <div class="flex flex-col justify-start">
            <div class="text-md mt-2">
              {item.name}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
