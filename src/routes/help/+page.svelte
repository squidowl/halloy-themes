<div class="mx-auto max-w-3xl px-4 py-10 sm:px-6">
  <h1 class="text-3xl font-bold text-[#fecdb2] sm:text-4xl">How To Install a Halloy Theme</h1>
  <p class="mt-4 text-base text-gray-200">
    New to Halloy themes? Follow these quick steps to install a downloaded <code>.toml</code> theme file.
  </p>

  <section class="mt-8 rounded-lg border border-gray-500/40 bg-black/30 p-5">
    <h2 class="text-xl font-semibold">Steps</h2>
    <ol class="mt-4 list-decimal space-y-3 pl-5 text-gray-100">
      <li>Download a theme <code>.toml</code> file from Halloy Themes.</li>
      <li>Move the file into Halloy&apos;s <code>themes</code> directory.</li>
      <li>
        In your <code>config.toml</code>, set the root key
        <code>theme = "your-theme-name"</code>.
      </li>
      <li>Restart Halloy to apply the theme.</li>
    </ol>
  </section>

  <section class="mt-6 rounded-lg border border-gray-500/40 bg-black/30 p-5">
    <h2 class="text-xl font-semibold">Theme directory paths</h2>
    <div class="mt-4 space-y-3 text-sm sm:text-base">
      <div>
        <p class="mb-1 text-gray-300">Linux</p>
        <code class="block overflow-x-auto rounded bg-black/50 px-3 py-2 text-[#fecdb2]"
          >~/.config/halloy/themes/</code
        >
      </div>
      <div>
        <p class="mb-1 text-gray-300">macOS</p>
        <code class="block overflow-x-auto rounded bg-black/50 px-3 py-2 text-[#fecdb2]"
          >~/Library/Application Support/halloy/themes/</code
        >
      </div>
      <div>
        <p class="mb-1 text-gray-300">Windows</p>
        <code class="block overflow-x-auto rounded bg-black/50 px-3 py-2 text-[#fecdb2]"
          >%APPDATA%\halloy\themes\</code
        >
      </div>
    </div>
  </section>

  <section class="mt-6 rounded-lg border border-gray-500/40 bg-black/30 p-5">
    <h2 class="text-xl font-semibold">Minimal config example</h2>
    <pre class="mt-4 overflow-x-auto rounded bg-black/50 px-3 py-2 text-sm text-[#fecdb2]"><code
        >theme = "foobar"</code
      ></pre>
  </section>

  <p class="mt-6 text-sm text-gray-300">
    Need more details? See the official Halloy themes docs:
    <a
      href="https://halloy.chat/configuration/themes/index.html"
      class="text-[#fecdb2] underline underline-offset-2 hover:text-[#ffd9c6]"
      >halloy.chat/configuration/themes</a
    >
  </p>
</div>
