<script>
  import Title from '../Title.svelte'
</script>

<Title label="Getting Started"></Title>

Carrusel is designed to be mounted in the DOM without depending on JavaScript,
ensuring fast and efficient loading of your carousels, significantly enhancing
the user experience. Additionally, by not relying on JavaScript, search engines
can easily index the content of your carousels, improving the visibility of your
application in search results and aiding in SEO.

## Installation

with npm:

```bash
npm install carrusel
```

or with yarn:

```bash
yarn add carrusel
```

or with pnpm:

```bash
pnpm add carrusel
```

## Usage

```svelte
<script>
  import { Carrusel, CarruselSlide } from 'carrusel'
</script>

<Carrusel>
  <CarruselSlide>Slide 1</CarruselSlide>
  <CarruselSlide>Slide 2</CarruselSlide>
  <CarruselSlide>Slide 3</CarruselSlide>
  <CarruselSlide>Slide 4</CarruselSlide>
  <CarruselSlide>Slide 5</CarruselSlide>
</Carrusel>
```
