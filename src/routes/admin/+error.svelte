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
            class="h-10 w-full rounded-lg border border-gray-500/40 px-2 placeholder-white/25 focus:outline-none"
            placeholder="Password"
            type="password"
            name="password"
          />
        </div>

        <button
          type="submit"
          class="flex w-full text-white font-bold cursor-pointer justify-center rounded-md px-4 py-2 shadow-sm transition-colors disabled:cursor-not-allowed bg-[#50a9d9] hover:bg-[#3b92c2] disabled:bg-[#a1cde4] disabled:text-black/40"
          >
          Login
        </button>
      </form>
    {/if}
  </div>
</div>
