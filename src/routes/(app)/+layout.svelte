<script lang="ts">
  const { children } = $props();
</script>

<div>
  <!--  BUG: removing async call gets rid of the error -->
  Resolving a promise here: {await Promise.resolve('ok')}
</div>

<svelte:boundary>
  <!--  BUG: removing this snippet gets rid of the error -->
  {#snippet pending()}
    loading...
  {/snippet}

  {@render children()}
</svelte:boundary>
