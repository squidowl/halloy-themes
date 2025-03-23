<script lang="ts">
  import '@fontsource/inter';
  import '@fontsource/iosevka';
  import '@fontsource/iosevka/700.css';
  import FileIcon from '~icons/carbon/document-download';
  import PreviewIcon from '~icons/icon-park-outline/preview-open';
  import { Tooltip } from '@svelte-plugins/tooltips';

  import { enhance } from '$app/forms';
  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';
  import type { ActionResult } from '@sveltejs/kit';

  const { data }: PageProps = $props();

  function handleSubmit() {
    return async ({ result }: { result: ActionResult }) => {
      if (result.type === 'success' && result.data) {
        const blob = new Blob([result.data.toml], { type: 'application/toml' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = result.data.filename;

        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);
      }
    };
  }
</script>

<div class="flex flex-wrap justify-center gap-4 p-2">
  {#each data.themes as theme}
    <div class="p-4">
      <Window {theme} />
      <div class="flex flex-row items-center justify-between">
        <p class="text-md mt-2">
          {theme.name}
        </p>
        <div class="flex flex-row gap-2">
          <Tooltip content="Preview in Halloy">
            <a href="halloy:///theme?e={theme.encoded}"><PreviewIcon /></a>
          </Tooltip>
          <Tooltip content="Download TOML file">
            <form use:enhance method="POST" use:enhance={handleSubmit}>
              <input type="hidden" name="encoded" value={theme.encoded} />
              <input type="hidden" name="name" value={theme.name} />

              <button formaction="?/toToml" class="flex cursor-pointer"><FileIcon /></button>
            </form>
          </Tooltip>
        </div>
      </div>
    </div>
  {/each}
</div>
