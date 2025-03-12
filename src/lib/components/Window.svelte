<script lang="ts">
  export let title: string = 'Window';
</script>

<div class="w-[400px] overflow-hidden rounded-xl border border-gray-300 bg-gray-100 shadow-lg">
  <div class="flex items-center justify-between bg-gray-200 px-3 py-2">
    <div class="flex space-x-2">
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
      <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
      <div class="h-3 w-3 rounded-full bg-green-500"></div>
    </div>
    <span class="text-sm font-medium text-gray-700">{title}</span>
    <div class="w-6"></div>
  </div>
  <div class="bg-white p-4">
    <slot></slot>
  </div>
</div>
