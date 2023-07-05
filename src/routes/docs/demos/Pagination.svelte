<script>
  import { page } from '$app/stores'
  import { Carrusel, CarruselSlide } from '$lib/index.js'
  import SectionTitle from './SectionTitle.svelte'

  /** @type {Carrusel} */
  let carrusel
  /** @type {number} */
  let pages
  /** @type {number} */
  let currentPage
</script>

<section>
  <SectionTitle label="Pagination" />
  <Carrusel
    bind:this={carrusel}
    bind:pages
    bind:currentPage
    class="carousel"
    ariaLabel="carousel"
    pagination
    draggable
  >
    {#each $page.data.images as { id, author }}
      {@const src = `https://picsum.photos/id/${id}/400/200`}
      <CarruselSlide>
        <img {src} alt={author} width="400" height="200" />
      </CarruselSlide>
    {/each}
    <ol slot="nav">
      {#each Array.from({ length: pages }) as _, index}
        {@const page = index + 1}
        <li>
          <button
            class:active={page === currentPage}
            on:click={() => carrusel.goToPage(page)}
          />
        </li>
      {/each}
    </ol>
  </Carrusel>
</section>

<style>
  section {
    --gap: 2rem;
  }

  img {
    width: 100%;
  }

  ol {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    list-style: none;
    margin-block: 0.8rem;
  }

  button {
    display: block;
    background-color: currentColor;
    border-radius: 50%;
    height: 0.8rem;
    width: 0.8rem;
  }

  button:not(:hover, .active) {
    opacity: 0.75;
  }

  button.active {
    background-color: hwb(var(--color-300));
    height: 1rem;
    width: 1rem;
  }

  @media (min-width: 640px) and (max-width: 767px), (min-width: 1024px) {
    section {
      --per-view: 3;
    }
  }
</style>
