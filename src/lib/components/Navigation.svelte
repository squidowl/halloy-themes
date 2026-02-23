<script lang="ts">
  const { isAdmin } = $props();
  import GithubIcon from '~icons/grommet-icons/github';
</script>

<div
  class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-gray-500/40 bg-black/50 px-6 py-4 backdrop-blur-md"
>
  <div class="text-xl font-bold">
    <a href="/" class="flex items-center space-x-1">
      <span class="text-[#fecdb2]">Halloy</span>
      <span>Themes</span>
    </a>
  </div>
  <nav>
    <ul class="flex items-center space-x-4">
      <li>
        <a href="/submit" class="transition-colors duration-200 hover:text-[#fecdb2]">Submit</a>
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
