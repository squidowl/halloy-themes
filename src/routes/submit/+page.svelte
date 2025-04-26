<script lang="ts">
  import { enhance } from '$app/forms';
  import toast from 'svelte-french-toast';
  import type { PageProps } from './$types';

  let { form, data }: PageProps = $props();
  let themeName: string = $state('');
  let themeUrl: string = $state(data.themeUrl ?? '');
  let loading: boolean = $state(false);

  $effect(() => {
    if (form?.success) {
      toast.success(form.message, {
        className: 'mt-4'
      });
    } else if (form?.invalid) {
      themeUrl = '';
      toast.error('Failed to decode theme. Ensure it is valid and try again.', {
        className: 'mt-4'
      });
    } else if (form?.error) {
      toast.error(form?.error, {
        className: 'mt-4'
      });
    }
    loading = false;
  });
</script>

<div class="flex justify-center px-6">
  <div class="w-full max-w-xl pt-16">
    <form
      use:enhance={() => {
        loading = true;
      }}
      method="POST"
      class="space-y-6"
    >
      <div>
        <p>Share your favorite theme with our community!</p>
        <p class="text-white/40">
          Copy the encoded theme URL from Halloy's Theme Editor or provide the URL to a TOML file.
          Once submitted, your theme will be reviewed and approved by a maintainer before being
          listed on the site.
        </p>
      </div>

      <div>
        <div class="mb-1 flex flex-row items-center justify-between">
          <p>Title</p>
        </div>
        <input
          class="mb-2 h-10 w-full rounded-lg border border-gray-500/40 px-2 placeholder-white/25 focus:outline-none"
          placeholder="Theme name"
          name="themeName"
          bind:value={themeName}
        />
        <div class="mb-1 flex flex-row items-center justify-between">
          <p>URL</p>
        </div>
        <input
          class="mb-2 h-10 w-full rounded-lg border border-gray-500/40 px-2 placeholder-white/25 focus:outline-none"
          placeholder="halloy:///theme?e=ACspLf8BT0dN_wIyMDT_A_-gev8E_s2y..."
          name="themeUrl"
          bind:value={themeUrl}
        />
      </div>

      <button
        type="submit"
        disabled={!themeUrl || !themeName || loading}
        class="flex w-full cursor-pointer justify-center rounded-md bg-[#50a9d9] px-4 py-2 font-bold text-white shadow-sm transition-colors hover:bg-[#3b92c2] disabled:cursor-not-allowed disabled:bg-[#a1cde4] disabled:text-black/40"
      >
        {#if loading}
          <span>Submitting...</span>
        {:else}
          Submit
        {/if}
      </button>
    </form>
  </div>
</div>

<style>
  :global(.tooltip.default) {
    --tooltip-background-color: rgba(107, 114, 128, 0.15);
    --tooltip-z-index: 9999;
  }
</style>
