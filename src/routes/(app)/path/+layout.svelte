<script lang="ts">
  const { children, data } = $props();
  const { root, child } = $derived(data)

  // BUG: removing these variable trackings gets rid of the error
  $effect(() => {
    console.log(root, child);
  });
</script>


{@render children()}
