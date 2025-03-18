<script lang="ts">
  import '@fontsource/inter';
  import '@fontsource/iosevka';
  import '@fontsource/iosevka/700.css';

  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';

  const { data }: PageProps = $props();
</script>

<div class="text-white" style="font-family: Inter, sans-serif;">
  <div class="flex w-full justify-center pt-12 pb-4">
    <div class="flex flex-col gap-3" style="max-width: 400px;">
      <div class="text-center text-3xl font-bold" style="line-height: 140%;">
        Explore and Discover Your Ideal <a
          class="relative px-1 rounded-md bg-[#fecdb2] text-black"
          href="https://halloy.squidowl.org/"
          target="_blank">Halloy</a
        > Theme
      </div>
      <div class="text-gray text-center text-lg" style="line-height: 140%;">Or submit your own</div>
    </div>
  </div>
  <div class="w-full">
    <div class="flex flex-wrap justify-center gap-4 p-2">
      {#each data.themes as item}
        <div class="p-4">
          <Window theme={item.theme} href="halloy:///theme?e={item.encoded}" />
          <div class="flex flex-row items-center gap-2">
            <div class="text-md mt-2">
              {item.name} by
              <a href="https://github.com/{item.submittedBy}" target="_blank">{item.submittedBy}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
