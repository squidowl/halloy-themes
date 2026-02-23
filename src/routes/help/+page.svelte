<div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
  <p
    class="inline-flex rounded-full border border-[#fecdb2]/35 bg-[#fecdb2]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#fecdb2]"
  >
    Quick Guide
  </p>
  <h1 class="mt-4 text-3xl font-bold text-[#fecdb2] sm:text-4xl">How To Install a Halloy Theme</h1>
  <p class="mt-3 max-w-2xl text-base leading-7 text-gray-200">
    New to Halloy themes? Follow these quick steps to install a downloaded <code>.toml</code>
    theme file with confidence.
  </p>

  <section class="mt-8 rounded-xl border border-gray-500/40 bg-black/30 p-5 sm:p-6">
    <h2 class="text-lg font-semibold text-white sm:text-xl">Steps</h2>
    <ol class="mt-4 space-y-3 text-gray-100">
      <li class="flex gap-3">
        <span
          class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fecdb2]/15 text-xs font-bold text-[#fecdb2]"
          >1</span
        >
        <span>Download a theme <code>.toml</code> file from Halloy Themes.</span>
      </li>
      <li class="flex gap-3">
        <span
          class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fecdb2]/15 text-xs font-bold text-[#fecdb2]"
          >2</span
        >
        <span>Move the file into Halloy&apos;s <code>themes</code> directory.</span>
      </li>
      <li class="flex gap-3">
        <span
          class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fecdb2]/15 text-xs font-bold text-[#fecdb2]"
          >3</span
        >
        <span>
          In your <code>config.toml</code>, set the root key <code>theme = "your-theme-name"</code>.
        </span>
      </li>
      <li class="flex gap-3">
        <span
          class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fecdb2]/15 text-xs font-bold text-[#fecdb2]"
          >4</span
        >
        <span>Restart Halloy to apply the theme.</span>
      </li>
    </ol>
  </section>

  <section class="mt-6 rounded-xl border border-gray-500/40 bg-black/30 p-5 sm:p-6">
    <h2 class="text-lg font-semibold text-white sm:text-xl">Theme directory paths</h2>
    <div class="mt-4 space-y-3 text-sm sm:text-base">
      <div>
        <p class="mb-1 text-sm font-medium text-gray-300">Linux</p>
        <code class="block overflow-x-auto rounded bg-black/50 px-3 py-2 text-[#fecdb2]"
          >~/.config/halloy/themes/</code
        >
      </div>
      <div>
        <p class="mb-1 text-sm font-medium text-gray-300">macOS</p>
        <code class="block overflow-x-auto rounded bg-black/50 px-3 py-2 text-[#fecdb2]"
          >~/Library/Application Support/halloy/themes/</code
        >
      </div>
      <div>
        <p class="mb-1 text-sm font-medium text-gray-300">Windows</p>
        <code class="block overflow-x-auto rounded bg-black/50 px-3 py-2 text-[#fecdb2]"
          >%APPDATA%\halloy\themes\</code
        >
      </div>
    </div>
  </section>

  <section class="mt-6 rounded-xl border border-gray-500/40 bg-black/30 p-5 sm:p-6">
    <h2 class="text-lg font-semibold text-white sm:text-xl">Minimal config example</h2>
    <pre class="mt-4 overflow-x-auto rounded bg-black/50 px-3 py-2 text-sm text-[#fecdb2]"><code
        >theme = "foobar"</code
      ></pre>
    <p class="mt-3 text-sm text-gray-300">
      The <code>theme</code> key must be at the root of your config.
    </p>
  </section>

  <p class="mt-6 text-sm leading-6 text-gray-300">
    Need more details? See the official Halloy themes docs:
    <a
      href="https://halloy.chat/configuration/themes/index.html"
      class="text-[#fecdb2] underline underline-offset-2 hover:text-[#ffd9c6]"
      >halloy.chat/configuration/themes</a
    >
  </p>
</div>
