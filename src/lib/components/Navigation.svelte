<script lang="ts">
  import { onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { getThemeSearchInputContext } from '$lib/theme-search-context';
  import CloseIcon from '~icons/carbon/close-outline';
  import GithubIcon from '~icons/grommet-icons/github';

  const { isAdmin } = $props();
  const themeSearchInput = getThemeSearchInputContext();
  let syncTimeout: ReturnType<typeof setTimeout> | undefined;
  let searchInput: HTMLInputElement | undefined;

  function syncQuery(next: string) {
    const url = new URL(page.url);
    const trimmed = next.trim();

    if (trimmed.length > 0) {
      url.searchParams.set('q', next);
    } else {
      url.searchParams.delete('q');
    }

    // eslint-disable-next-line svelte/no-navigation-without-resolve
    void goto(url, {
      replaceState: true,
      noScroll: true,
      keepFocus: true,
      invalidateAll: false
    });
  }

  function updateQuery(next: string) {
    themeSearchInput.set(next);

    if (syncTimeout) {
      clearTimeout(syncTimeout);
    }

    syncTimeout = setTimeout(() => {
      syncQuery(next);
    }, 120);
  }

  function resetQuery() {
    themeSearchInput.set('');

    if (syncTimeout) {
      clearTimeout(syncTimeout);
      syncTimeout = undefined;
    }

    syncQuery('');
    searchInput?.focus();
  }

  onDestroy(() => {
    if (syncTimeout) {
      clearTimeout(syncTimeout);
    }
  });
</script>

<div
  class="fixed top-0 right-0 left-0 z-50 border-b border-gray-500/40 bg-black/50 px-3 py-3 backdrop-blur-md sm:px-6 sm:py-4"
>
  <div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-6">
    <div class="text-lg font-bold sm:text-xl">
      <a href="/" class="flex items-center space-x-1">
        <span class="text-[#fecdb2]">Halloy</span>
        <span>Themes</span>
      </a>
    </div>

    <div class="mx-auto flex w-full max-w-[20rem] items-center gap-2 sm:max-w-[30rem]">
      <input
        bind:this={searchInput}
        type="search"
        aria-label="Search themes"
        placeholder="Search themes..."
        value={$themeSearchInput}
        oninput={(event) => updateQuery((event.currentTarget as HTMLInputElement).value)}
        class="h-8 w-full rounded-md border border-gray-500/45 bg-black/40 px-3 text-sm text-white transition-colors duration-200 outline-none placeholder:text-gray-300 focus:border-[#fecdb2]"
      />
      {#if $themeSearchInput.trim().length > 0}
        <button
          type="button"
          onclick={resetQuery}
          class="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-500/45 bg-black/40 text-gray-200 transition-colors duration-200 hover:border-[#fecdb2]/70 hover:text-[#fecdb2]"
          aria-label="Reset search"><CloseIcon class="text-sm" /></button
        >
      {/if}
    </div>

    <nav>
      <ul class="flex items-center space-x-2 text-sm sm:space-x-4 sm:text-base">
        <li>
          <a href="/submit" class="transition-colors duration-200 hover:text-[#fecdb2]">Submit</a>
        </li>
        <li>
          <a href="/help" class="transition-colors duration-200 hover:text-[#fecdb2]">Guide</a>
        </li>
        {#if isAdmin}
          <li>
            <a href="/admin/submissions" class="transition-colors duration-200 hover:text-[#fecdb2]"
              >Submissions</a
            >
          </li>
          <li>
            <a
              data-sveltekit-reload
              href="/admin?logout"
              class="transition-colors duration-200 hover:text-[#fecdb2]">Logout</a
            >
          </li>
        {/if}
        <li>
          <a
            href="https://github.com/squidowl/halloy"
            class="transition-colors duration-200 hover:text-[#fecdb2]"><GithubIcon /></a
          >
        </li>
      </ul>
    </nav>
  </div>
</div>
