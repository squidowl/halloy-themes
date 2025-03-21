<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

{@render children()}

<style global>
  :global(html),
  :global(body) {
    background-color: black;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
</style>
