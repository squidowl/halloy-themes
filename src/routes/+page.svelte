<script lang="ts">
  import '@fontsource/inter';
  import '@fontsource/iosevka';
  import '@fontsource/iosevka/700.css';

  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';

  const { data }: PageProps = $props();
</script>

<div class="text-white" style="font-family: Inter, sans-serif;">
  <div
    class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-gray-500/40 bg-black/50 px-6 py-4 backdrop-blur-md"
  >
    <div class="text-xl font-bold">
      <a class="text-[#fecdb2]" href="https://halloy.squidowl.org/" target="_blank">Halloy</a> Themes
    </div>
    <nav>
      <ul class="flex space-x-6">
        <li>
          <a
            href="https://github.com/squidowl/halloy"
            class="transition-colors duration-200 hover:text-[#fecdb2]">GitHub</a
          >
        </li>
        <li>
          <a
            href="https://github.com/squidowl/halloy"
            class="transition-colors duration-200 hover:text-[#fecdb2]">Submit</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <div class="w-full pt-16">
    <div class="flex flex-wrap justify-center gap-4 p-2">
      {#each data.themes as item}
        <div class="p-4">
          <Window {item} />
          <div class="flex flex-col justify-start">
            <div class="text-md mt-2">
              {item.name}
            </div>
            <div class="text-xs">
              by
              <a class="transition-colors duration-200 hover:text-[#fecdb2]" href="https://github.com/{item.submittedBy}" target="_blank">{item.submittedBy}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
