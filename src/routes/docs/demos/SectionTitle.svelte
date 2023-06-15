<script>
  /** @type {string} */
  export let label

  const src = 'https://github.com/jhanca-vm/carrusel/blob/main/src/routes/docs'
</script>

<h2>
  {label}
  {#if label === 'Default'}
    <small>
      <a href={`${src}/demos/${label}.svelte`} target="_blank" rel="noreferrer">
        (Code)
      </a>
    </small>
  {/if}
</h2>

<style>
  small {
    font-size: 1.5rem;
  }
</style>
