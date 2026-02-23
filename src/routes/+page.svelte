<script lang="ts">
  import '@fontsource/inter';
  import '@fontsource/iosevka';
  import '@fontsource/iosevka/700.css';
  import FileIcon from '~icons/carbon/document-download';
  import DeleteIcon from '~icons/carbon/close-outline';
  import EditIcon from '~icons/carbon/edit';
  import PreviewIcon from '~icons/icon-park-outline/preview-open';
  import { Tooltip } from '@svelte-plugins/tooltips';

  import { enhance } from '$app/forms';
  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';
  import type { ActionResult } from '@sveltejs/kit';

  const { data }: PageProps = $props();

  const createdOnFormatter = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  function formatCreatedOn(value: string | Date): string {
    const date = value instanceof Date ? value : new Date(value);

    if (Number.isNaN(date.getTime())) {
      return 'Unknown date';
    }

    return createdOnFormatter.format(date);
  }

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

<div class="flex flex-wrap justify-center gap-0 p-2 pt-0 sm:gap-8 sm:pt-8">
  {#each data.themes as theme}
    <div class="pt-8 sm:pt-0">
      <Window {theme} />
      <div
        class="mt-2 flex flex-row items-center justify-between gap-4 rounded-lg border border-gray-500/35 bg-black/30 px-3 py-2"
      >
        <div>
          <p class="text-md font-semibold text-white">{theme.name}</p>
          <p class="text-xs text-gray-300">Added {formatCreatedOn(theme.createdOn)}</p>
        </div>
        <div class="flex flex-row gap-2">
          <Tooltip content="Preview in Halloy">
            <a
              href="halloy:///theme?e={theme.encoded}"
              class="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-500/45 bg-black/40 text-white transition-colors hover:border-[#fecdb2]/60 hover:text-[#fecdb2]"
              aria-label={`Preview ${theme.name} in Halloy`}><PreviewIcon /></a
            >
          </Tooltip>
          <Tooltip content="Download TOML file">
            <form use:enhance method="POST" use:enhance={handleSubmit}>
              <input type="hidden" name="encoded" value={theme.encoded} />
              <input type="hidden" name="name" value={theme.name} />

              <button
                formaction="?/toToml"
                class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-gray-500/45 bg-black/40 text-white transition-colors hover:border-[#fecdb2]/60 hover:text-[#fecdb2]"
                aria-label={`Download ${theme.name} as TOML`}><FileIcon /></button
              >
            </form>
          </Tooltip>
          {#if data.isAdmin}
            <Tooltip content="Rename theme">
              <form method="POST">
                <input type="hidden" name="id" value={theme.id} />
                <input type="hidden" name="name" value={theme.name} />
                <button
                  type="submit"
                  formaction="?/rename"
                  class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-gray-500/45 bg-black/40 text-[#f2c94c] transition-colors hover:border-[#ffd86b]/60 hover:text-[#ffd86b]"
                  aria-label={`Rename ${theme.name}`}
                  onclick={(event) => {
                    const nextName = prompt('Rename theme', theme.name)?.trim();

                    if (!nextName || nextName === theme.name) {
                      event.preventDefault();
                      return;
                    }

                    const button = event.currentTarget as HTMLButtonElement;
                    const input = button.form?.elements.namedItem('name');

                    if (input instanceof HTMLInputElement) {
                      input.value = nextName;
                    }
                  }}><EditIcon /></button
                >
              </form>
            </Tooltip>
            <Tooltip content="Delete theme">
              <form method="POST">
                <input type="hidden" name="id" value={theme.id} />
                <button
                  type="submit"
                  formaction="?/delete"
                  class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-gray-500/45 bg-black/40 text-[#e74c3c] transition-colors hover:border-[#ff6b5b]/60 hover:text-[#ff6b5b]"
                  aria-label={`Delete ${theme.name}`}
                  onclick={(event) => {
                    if (!confirm(`Delete theme "${theme.name}"?`)) {
                      event.preventDefault();
                    }
                  }}><DeleteIcon /></button
                >
              </form>
            </Tooltip>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>
