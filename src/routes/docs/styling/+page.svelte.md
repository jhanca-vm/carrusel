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
  <Carrusel>
    <CarruselSlide>Slide 1</CarruselSlide>
    <CarruselSlide>Slide 2</CarruselSlide>
    <CarruselSlide>Slide 3</CarruselSlide>
    <CarruselSlide>Slide 4</CarruselSlide>
    <CarruselSlide>Slide 5</CarruselSlide>
  </Carrusel>
</section>

<style>
  section {
    --gap: 24px;
  }

  @media (min-width: 768px) {
    --per-view: 2;
  }
</style>
```
