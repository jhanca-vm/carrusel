<script>
  import Title from '../Title.svelte'
</script>

<Title label="Styling"></Title>

To customize the carousel, you need to wrap it within a container and use the
following CSS variables:

- `--per-view`: Determines the number of slides to be displayed per view.
- `--gap`: Sets the spacing between the slides.

### Example

```svelte
<section>
  <h2>Title</h2>
  <Carrusel class="carousel">
    <CarruselSlide>Slide 1</CarruselSlide>
    <CarruselSlide>Slide 2</CarruselSlide>
    <CarruselSlide>Slide 3</CarruselSlide>
    <CarruselSlide>Slide 4</CarruselSlide>
    <CarruselSlide>Slide 5</CarruselSlide>
  </Carrusel>
</section>
```

- Using a container:

  ```svelte
  <style>
    section {
      --gap: 24px;
    }

    @media (min-width: 768px) {
      section {
        --gap: 32px;
        --per-view: 2;
      }
    }
  </style>
  ```

- Using a class:

  ```svelte
  <style>
    section :global(.carousel) {
      --gap: 24px;
    }

    @media (min-width: 768px) {
      section :global(.carousel) {
        --gap: 32px;
        --per-view: 2;
      }
    }
  </style>
  ```

## With CSS Modules

```css
/* Carousel.module.css */
.carousel {
  --gap: 24px;
}

@media (min-width: 768px) {
  .carousel {
    --gap: 32px;
    --per-view: 2;
  }
}
```

```svelte
<!-- Carusel.svelte -->
<script>
  import styles from './carousel.module.css'
</script>

<section>
  <h2>Title</h2>
  <Carrusel class={styles.carousel}>
    <CarruselSlide>Slide 1</CarruselSlide>
    <CarruselSlide>Slide 2</CarruselSlide>
    <CarruselSlide>Slide 3</CarruselSlide>
    <CarruselSlide>Slide 4</CarruselSlide>
    <CarruselSlide>Slide 5</CarruselSlide>
  </Carrusel>
</section>
```
