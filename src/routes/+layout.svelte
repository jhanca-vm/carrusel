<script>
  import '@fontsource-variable/dosis'
  import '../app.css'
</script>

<svelte:head>
  <meta
    name="description"
    content={'A simple and dependency-free carousel for Svelte that is ' +
      'SSR-compatible.'}
  />
</svelte:head>

<slot />
<footer>
  <p>Released under the MIT license.</p>
  <p>© 2023 Jhan Viloria</p>
</footer>

<style>
  footer {
    background-color: hwb(var(--color-200) / 0.75);
    color: hwb(var(--color-400));
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.75;
    padding-block: 1.5rem;
    text-align: center;
  }

  p {
    margin: 0;
  }
</style>
