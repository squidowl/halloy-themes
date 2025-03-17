<script lang="ts">
  import '@fontsource/iosevka';
  import '@fontsource/iosevka/700.css';

  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';

  const { data }: PageProps = $props();
</script>

<div style="font-family: 'Iosevka', monospace;">
  <div class="px-10 pt-12 pb-4">
    <div class="text-4xl font-bold">Halloy themes</div>
  </div>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 gap-4 p-2 md:grid-cols-2">
      {#each data.themes as item}
        <div class="p-4">
          <Window theme={item.theme} />
          <div class="flex flex-row items-center justify-between px-2">
            <div class="text-lg font-bold">{item.name}</div>
            <div class="flex flex-row items-center gap-2">
              <a href="halloy://theme?e={item.encoded}" class="text-sm">Open in Halloy</a>
              <div class="h-4 w-px bg-gray-400"></div>
              <div class="text-sm">Download</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
