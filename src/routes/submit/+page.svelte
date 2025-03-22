<script lang="ts">
  import { enhance } from '$app/forms';
  import toast from 'svelte-french-toast';
  import InfoIcon from '~icons/fe/info'
  import { Tooltip } from "@svelte-plugins/tooltips";

  import type { PageProps } from './$types';

  let { form }: PageProps = $props();
  let themeName: string = $state('');
  let halloyUrl: string = $state('');

  $effect(() => {
    if (form?.success) {
      toast.success(form.message, {
        className: 'mt-4'
      });
    } else if (form?.invalid) {
      halloyUrl = '';
      toast.error('Failed to decode theme. Ensure it is valid and try again.', {
        className: 'mt-4'
      });
    } else if (form?.error) {
      toast.error(form?.error, {
        className: 'mt-4'
      });
    }
  });
</script>

<div class="flex justify-center px-6">
  <div class="w-full max-w-xl pt-16">
    <form use:enhance method="POST" class="space-y-6">
      <div>
        <p>Share your favorite theme with our community!</p>
        <p class="text-white/40">
          Copy the encoded theme URL string from Halloy's Theme Editor. Once submitted, your theme will be reviewed and approved by a maintainer before being
          listed on the site.
        </p>
      </div>

      <div>
        <div class="flex flex-row justify-between items-center mb-1">
          <p>Title</p>
        </div>
        <input
          class="mb-2 h-10 w-full rounded-lg border border-gray-500/40 px-2 placeholder-white/25 focus:outline-none"
          placeholder="Theme name"
          name="themeName"
          bind:value={themeName}
        />
        <div class="flex flex-row justify-between items-center mb-1">
          <p>Theme URL</p>
        </div>
        <input
          class="mb-2 h-10 w-full rounded-lg border border-gray-500/40 px-2 placeholder-white/25 focus:outline-none"
          placeholder="halloy:///theme?e=ACspLf8BT0dN_wIyMDT_A_-gev8E_s2y..."
          name="halloyUrl"
          bind:value={halloyUrl}
        />
      </div>

      <button
        type="submit"
        disabled={!halloyUrl || !themeName}
        class="flex w-full text-white font-bold cursor-pointer justify-center rounded-md px-4 py-2 shadow-sm transition-colors disabled:cursor-not-allowed bg-[#50a9d9] hover:bg-[#3b92c2] disabled:bg-[#a1cde4] disabled:text-black/40"
        >
        Submit
      </button>
    </form>
  </div>
</div>

<style>
  :global(.tooltip.default) {
    --tooltip-background-color:  rgba(107, 114, 128, 0.15);
    --tooltip-z-index: 9999;
  }
</style>