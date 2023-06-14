<script>
  import Title from '../Title.svelte'
</script>

<Title label="Getting Started"></Title>

This library is currently in the beta phase, which means it is actively under
development and some features may change in future versions before the stable
release. It is recommended to use it with caution and be prepared for potential
changes and improvements in its functionality. We appreciate any feedback or
issue reports that can help us refine the library before its final release.

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
