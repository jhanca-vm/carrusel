<script>
  import Title from '../Title.svelte'
</script>

<Title label="Slots"></Title>

The `<Carrusel>` component provides the following slots:

- `button-prev`
- `button-next`

### Example

```svelte
<script>
  import { Carrusel, CarruselSlide } from 'carrusel'

  let carrusel
</script>

<Carrusel bind:this={carrusel}>
  <CarruselSlide>Slide 1</CarruselSlide>
  <CarruselSlide>Slide 2</CarruselSlide>
  <CarruselSlide>Slide 3</CarruselSlide>
  <CarruselSlide>Slide 4</CarruselSlide>
  <CarruselSlide>Slide 5</CarruselSlide>
  <button class="prev" slot="button-prev" on:click={carrusel.previousSlide}>
    <
  </button>
  <button class="next" slot="button-next" on:click={carrusel.nextSlide}>
    >
  </button>
</Carrusel>

<style>
  button {
    inset-block: auto;
    position: absolute;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
</style>
```
