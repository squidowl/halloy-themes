<script lang="ts">
  import { enhance } from '$app/forms';
  import Navigation from '$lib/components/Navigation.svelte';
  import toast, { Toaster } from 'svelte-french-toast';
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

<Toaster />

<div class="text-white" style="font-family: Inter, sans-serif;">
  <Navigation />
  <div class="flex w-full justify-center px-6 pt-16">
    <div class="w-full max-w-xl pt-16">
      <form use:enhance method="POST" class="space-y-6">
        <div>
          <p>Share your favorite theme with our community!</p>
          <p class="text-white/40">
            Once submitted, your theme will be reviewed and approved by a maintainer before being
            listed on the site.
          </p>
        </div>

        <div>
          <input
            class="mb-2 h-10 w-full rounded-lg border border-gray-500/40 px-2 placeholder-white/25 focus:outline-none"
            placeholder="Theme name"
            name="themeName"
            bind:value={themeName}
          />
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
          class="flex w-full cursor-pointer justify-center rounded-md bg-blue-600 px-4 py-2 text-black shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:text-black/40"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
