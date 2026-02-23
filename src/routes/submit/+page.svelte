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

<div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
  <p
    class="inline-flex rounded-full border border-[#50a9d9]/35 bg-[#50a9d9]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#50a9d9]"
  >
    Submit Theme
  </p>
  <h1 class="mt-4 text-3xl font-bold text-[#fecdb2] sm:text-4xl">Share a Theme</h1>
  <p class="mt-3 max-w-2xl text-base leading-7 text-gray-200">
    Share your favorite theme with the community. Approved submissions are listed on the site after
    maintainer review.
  </p>

  <form
    use:enhance={() => {
      loading = true;
    }}
    method="POST"
    class="mt-8 space-y-6 rounded-xl border border-gray-500/40 bg-black/30 p-5 sm:p-6"
  >
    <div>
      <div class="mb-1 flex flex-row items-center justify-between">
        <label for="themeName" class="text-sm font-semibold text-white">Title</label>
      </div>
      <input
        id="themeName"
        class="h-11 w-full rounded-lg border border-gray-500/40 bg-black/40 px-3 placeholder-white/25 transition-colors focus:border-[#fecdb2]/70 focus:outline-none"
        placeholder="Theme name"
        name="themeName"
        bind:value={themeName}
      />
      <p class="mt-2 text-sm leading-6 text-gray-300">
        Use a short, recognizable name for your theme.
      </p>
    </div>

    <div>
      <div class="mb-1 flex flex-row items-center justify-between">
        <label for="themeUrl" class="text-sm font-semibold text-white">URL</label>
      </div>
      <input
        id="themeUrl"
        class="h-11 w-full rounded-lg border border-gray-500/40 bg-black/40 px-3 placeholder-white/25 transition-colors focus:border-[#fecdb2]/70 focus:outline-none"
        placeholder="halloy:///theme?e=ACspLf8BT0dN_wIyMDT_A_-gev8E_s2y..."
        name="themeUrl"
        bind:value={themeUrl}
      />
      <p class="mt-2 text-sm leading-6 text-gray-300">
        Paste an encoded Halloy theme URL or a direct URL to a <code>.toml</code> file.
      </p>
    </div>

    <button
      type="submit"
      disabled={!themeUrl || !themeName || loading}
      class="flex h-11 w-full cursor-pointer items-center justify-center rounded-md bg-[#50a9d9] px-4 font-bold text-white shadow-sm transition-colors hover:bg-[#3b92c2] disabled:cursor-not-allowed disabled:bg-[#a1cde4] disabled:text-black/40"
    >
      {#if loading}
        <span>Submitting...</span>
      {:else}
        Submit
      {/if}
    </button>
  </form>
</div>

<style>
  :global(.tooltip.default) {
    --tooltip-background-color: rgba(107, 114, 128, 0.15);
    --tooltip-z-index: 9999;
  }
</style>
