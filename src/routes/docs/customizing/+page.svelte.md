<script>
  import Title from '../Title.svelte'
</script>

<Title label="Customizing"></Title>

## Adding navigation buttons

```svelte
<script>
  import { Carrusel, CarruselSlide } from 'carrusel'

  let carousel
</script>

<Carrusel bind:this={carousel}>
  <CarruselSlide>Slide 1</CarruselSlide>
  <CarruselSlide>Slide 2</CarruselSlide>
  <CarruselSlide>Slide 3</CarruselSlide>
  <CarruselSlide>Slide 4</CarruselSlide>
  <CarruselSlide>Slide 5</CarruselSlide>
  <button slot="btn-prev" on:click={carousel.previousSlide}>...</button>
  <button slot="btn-next" on:click={carousel.nextSlide}>...</button>
</Carrusel>
```

## Adding pagination

```svelte
<script>
  import { Carrusel, CarruselSlide } from 'carrusel'

  let carousel
  let pages
  let currentPage
</script>

<Carrusel bind:this={carousel} bind:pages bind:currentPage pagination={true}>
  <CarruselSlide>Slide 1</CarruselSlide>
  <CarruselSlide>Slide 2</CarruselSlide>
  <CarruselSlide>Slide 3</CarruselSlide>
  <CarruselSlide>Slide 4</CarruselSlide>
  <CarruselSlide>Slide 5</CarruselSlide>
  <button slot="btn-prev" on:click={carousel.previousPage}>...</button>
  <button slot="btn-next" on:click={carousel.nextPage}>...</button>
  <ol slot="nav">
    {#each Array.from({ length: pages }) as _, index}
      {@const page = index + 1}
      <li>
        <button
          class:active={page === currentPage}
          on:click={() => carousel.goToPage(page)}
        >
          {page}
        </button>
      </li>
    {/each}
  </ol>
</Carrusel>
```

Pagination is loaded from the client because it depends on specific client-side
information, such as window width and slides per view configuration. These
values can vary depending on the device and user preferences. Therefore,
if you want to add a loader while the pagination is being loaded, you can do so
using the `:else` clause:

```svelte
<ol slot="nav">
  {#each Array.from({ length: pages }) as _, index}
    {@const page = index + 1}
    <li>
      <button
        class:active={page === currentPage}
        on:click={() => carousel.goToPage(page)}
      >
        {page}
      </button>
    </li>
  {:else}
    <li>Loading...</li>
  {/each}
</ol>
```
