<script lang="ts">
  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';
  import { enhance } from '$app/forms';
  import toast from 'svelte-french-toast';
  import JSONIcon from '~icons/qlementine-icons/preview-16';
  import PreviewIcon from '~icons/icon-park-outline/preview-open';
  import { Tooltip } from '@svelte-plugins/tooltips';

  const { data, form }: PageProps = $props();

  $effect(() => {
    if (form?.approved) {
      toast.success('Approved', {
        className: 'mt-4'
      });
    } else if (form?.rejected) {
      toast.success('Rejected', {
        className: 'mt-4'
      });
    }
  });
</script>

<div class="flex flex-wrap justify-center gap-4 p-2">
  {#each data.submissions as submission}
    <div class="p-4">
      <Window theme={submission} />
      <div class="mt-2 flex flex-row items-center justify-between">
        <div class="text-md">
          {submission.name}
        </div>
        <form use:enhance method="POST">
          <input hidden={true} name="id" value={submission.id} />
          <div class="flex items-center space-x-4">
            <Tooltip content="Preview in Halloy">
              <a href="halloy:///theme?e={submission.encoded}"><PreviewIcon /></a>
            </Tooltip>
            <Tooltip content="View JSON">
              <a href={`/admin/json/${submission.encoded}`}>
                <JSONIcon />
              </a>
            </Tooltip>

            <div>
              <button
                class="flex h-8 cursor-pointer items-center justify-center rounded-md bg-[#4caf50] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[#3d8b40] disabled:cursor-not-allowed disabled:bg-[#a9d6aa] disabled:text-black/40"
                formaction="?/approve">Approve</button
              >
            </div>
            <div>
              <button
                class="flex h-8 cursor-pointer items-center justify-center rounded-md bg-[#e74c3c] px-4 py-2 text-white shadow-sm transition-colors hover:bg-[#c0392b] disabled:cursor-not-allowed disabled:bg-[#f0b5af] disabled:text-black/40"
                formaction="?/reject">Reject</button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  {/each}
</div>

<style>
  :global(.tooltip.default) {
    --tooltip-background-color: rgba(70, 70, 70, 0.932);
  }
</style>
