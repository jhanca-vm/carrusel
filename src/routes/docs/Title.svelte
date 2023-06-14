<script>
  /** @type {string} */
  export let label
</script>

<svelte:head>
  <title>{label} - Carrusel</title>
</svelte:head>

<h1>{label}</h1>

<style>
  h1 {
    border-bottom: 1px ridge hwb(var(--color-200) / 0.75);
    font-size: 3rem;
    padding-bottom: 0.5em;
  }
</style>
