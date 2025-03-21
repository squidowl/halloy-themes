<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import { enhance } from '$app/forms';

  import toast, { Toaster } from 'svelte-french-toast';

  export let form: any;
  export let onFileSelected: (event: { files: FileList }) => void;

  let files: FileList | null = null;
  let isDragging = false;
  let fileInput: HTMLInputElement;

  function handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      files = input.files;
      onFileSelected?.({ files });
    }
  }

  function handleDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    isDragging = true;
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    isDragging = true;
  }

  function handleDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    isDragging = false;
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    isDragging = false;

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      files = event.dataTransfer.files;
      fileInput.files = event.dataTransfer.files;
      onFileSelected?.({ files });
    }
  }

  function triggerFileInput() {
    fileInput.click();
  }

  function resetForm() {
    files = null;
  }

  $: if (form) {
    if (form.success) {
      toast.success(form.message || 'File uploaded successfully!', {
        className: 'mt-4'
      });
      resetForm();
    } else if (form.error) {
      toast.error(form.error, {
        className: 'mt-4'
      });
    }
  }
</script>

<Toaster />

<div class="text-white" style="font-family: Inter, sans-serif;">
  <Navigation />
  <div class="flex w-full justify-center px-6 pt-16">
    <div class="w-full max-w-xl pt-16">
      <form
        method="POST"
        enctype="multipart/form-data"
        class="space-y-6"
      >
        <input
          bind:this={fileInput}
          type="file"
          id="fileInput"
          name="file"
          on:change={handleFileSelect}
          class="hidden"
        />

        <div>
          <p>Share your favorite theme with our community!</p>
          <p class="text-white/40">
            Once submitted, your theme will be reviewed and approved by a maintainer before being
            listed on the site.
          </p>
        </div>
        <div
          on:click={triggerFileInput}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? triggerFileInput() : null)}
          on:dragenter={handleDragEnter}
          on:dragover={handleDragOver}
          on:dragleave={handleDragLeave}
          on:drop={handleDrop}
          tabindex="0"
          role="button"
          class="cursor-pointer rounded-lg border-2 border-dashed border-gray-500/40 p-8 text-center transition-colors duration-200 hover:border-gray-500 hover:bg-gray-500/20 {isDragging
            ? 'bg-gray-500/40'
            : ''}"
        >
          <div class="flex flex-col items-center justify-center">
            <div class="text-lg">
              {#if files && files.length > 0}
                {files[0].name}
              {:else}
                Drag and drop your theme here or click to browse
              {/if}
            </div>
            <div class="text-sm text-gray-500/60">
              {#if files && files.length > 0}
                <p>Size: {(files[0].size / 1024).toFixed(2)} KB</p>
              {:else}
                <p>Please select the toml theme file</p>
              {/if}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!files || files.length === 0}
          class="flex w-full cursor-pointer justify-center rounded-md bg-blue-600 px-4 py-2 text-black shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:text-black/40"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
