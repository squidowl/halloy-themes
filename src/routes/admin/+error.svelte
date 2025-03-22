<script lang="ts">
  import { page } from '$app/state';

  const showLogin = $derived(page.status == 401);
</script>

<div class="flex justify-center px-6">
  <div class="w-full max-w-xl space-y-6 pt-16">
    {#if showLogin}
      <form action="?/login" method="POST" class="space-y-6">
        <div>
          <input
            class="mb-2 h-10 w-full rounded-lg border border-gray-500/40 px-2 placeholder-white/25 focus:outline-none"
            placeholder="Password"
            type="password"
            name="password"
          />
        </div>

        <button
          type="submit"
          class="flex w-full cursor-pointer justify-center rounded-md bg-blue-600 px-4 py-2 text-black shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:text-black/40"
        >
          Login
        </button>
      </form>
    {/if}
  </div>
</div>
