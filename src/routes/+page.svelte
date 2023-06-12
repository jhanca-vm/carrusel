<script>
  import Hero from './Hero.svelte'
  import Features from './Features.svelte'
</script>

<svelte:head>
  <title>Carrusel</title>
  <meta
    name="description"
    content={'A simple and dependency-free carousel for Svelte that is ' +
      'SSR-compatible.'}
  />
</svelte:head>

<main>
  <Hero />
  <Features />
</main>
