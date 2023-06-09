# Carrusel

A simple and dependency-free carousel for Svelte that is SSR-compatible.

## Installation

```bash
npm install carrusel
```

## Usage

```svelte
<script>
  import { Carrusel, CarruselSlide } from 'carrusel'

  let carrusel
</script>

<section>
  <Carrusel bind:this={carrusel} class="carrusel" rewind>
    <CarruselSlide>Slide 1</CarruselSlide>
    <CarruselSlide>Slide 2</CarruselSlide>
    <CarruselSlide>Slide 3</CarruselSlide>
    <CarruselSlide>Slide 4</CarruselSlide>
    <CarruselSlide>Slide 5</CarruselSlide>
    <button slot="button-prev" on:click={carrusel.previousSlide}>Prev</button>
    <button slot="button-next" on:click={carrusel.nextSlide}>Next</button>
  </Carrusel>
</section>

<style>
  section :global(.carrusel) {
    --gap: 20px;
  }

  @media (min-width: 768px) {
    section :global(.carrusel) {
      --per-view: 2;
    }
  }
</style>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
