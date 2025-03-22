<script lang="ts">
  import type { PageProps } from './$types';
  import Window from '$lib/components/Window.svelte';
  import { enhance } from '$app/forms';
  import toast from 'svelte-french-toast';

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
      <div class="flex flex-col justify-start space-y-2">
        <div class="text-md mt-2">
          {submission.name}
        </div>
        <form use:enhance method="POST">
          <input hidden={true} name="id" value={submission.id} />
          <div class="flex space-x-4">
            <div>
              <button
                class="cursor-pointer justify-center rounded-md bg-blue-600 px-4 py-2 text-black shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:text-black/40"
                formaction="?/approve">Approve</button
              >
            </div>
            <div>
              <button
                class="cursor-pointer justify-center rounded-md bg-blue-600 px-4 py-2 text-black shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:text-black/40"
                formaction="?/reject">Reject</button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  {/each}
</div>
