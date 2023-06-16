<script>
  import Title from '../Title.svelte'
</script>

<Title label="Slots"></Title>

The `<Carrusel>` component provides the following slots:

- `btn-prev`
- `btn-next`

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
  <button class="prev" slot="btn-prev" on:click={carrusel.previousSlide}>
    <
  </button>
  <button class="next" slot="btn-next" on:click={carrusel.nextSlide}>
    >
  </button>
</Carrusel>

<style>
  button {
    height: fit-content;
    inset-block: 0;
    margin-block: auto;
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
