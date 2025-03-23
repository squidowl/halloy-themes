<script lang="ts">
  import type { PageProps } from './$types';
  import { JsonView } from '@zerodevx/svelte-json-view';

  const { data }: PageProps = $props();
</script>

<div class="text-sm p-4" style="font-family: 'Iosevka', monospace;">
  <JsonView json={data.json} />
</div>
