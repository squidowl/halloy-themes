import tailwindcss from '@tailwindcss/vite';
import wasm from 'vite-plugin-wasm';

import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [wasm(), tailwindcss(), sveltekit()]
});
