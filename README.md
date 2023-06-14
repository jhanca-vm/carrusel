<div align="center">
  <a href="https://carruseljs.vercel.app">
    <img src="./static/logo.svg" width="70" height="70">
  </a>
  <h1>Carrusel</h1>
  <p>A simple and dependency-free carousel for Svelte <br> that is SSR-compatible.</p>
</div>

## Installation

```bash
npm install carrusel
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

For more details, please refer to the [documentation](https://carruseljs.vercel.app/docs).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
