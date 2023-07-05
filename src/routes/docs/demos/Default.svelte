<script>
  import { page } from '$app/stores'
  import { Carrusel, CarruselSlide } from '$lib/index.js'
  import SectionTitle from './SectionTitle.svelte'

  /** @type {string} */
  export let title

  /** @type {Carrusel} */
  let carrusel
</script>

<section>
  <SectionTitle label={title} />
  <Carrusel
    bind:this={carrusel}
    class="carousel"
    ariaLabel="carousel"
    rewind={title === 'Rewind'}
    draggable={title === 'Draggable'}
    autoplay={title === 'Autoplay'}
  >
    {#each $page.data.images as { id, author }}
      {@const src = `https://picsum.photos/id/${id}/400/200`}
      <CarruselSlide>
        <figure>
          <img {src} alt={author} width="400" height="200" />
          <figcaption>{author}</figcaption>
        </figure>
      </CarruselSlide>
    {/each}
    <button slot="btn-prev" on:click={carrusel.previousSlide}>
      <img src="/icons/chevron-left.svg" alt="Prev" width="32" height="32" />
    </button>
    <button slot="btn-next" on:click={carrusel.nextSlide}>
      <img src="/icons/chevron-right.svg" alt="Next" width="32" height="32" />
    </button>
  </Carrusel>
</section>

<style>
  section {
    --gap: 2.5rem;
  }

  button {
    height: fit-content;
    inset-block: 0;
    margin-block: auto;
    position: absolute;
  }

  button:first-of-type {
    left: 0;
  }

  button:last-of-type {
    right: 0;
  }

  section :global(.carousel) {
    padding-inline: 40px;
  }

  figure {
    margin: 0;
    text-align: center;
  }

  img {
    width: 100%;
  }

  @media (min-width: 640px) and (max-width: 767px), (min-width: 1024px) {
    section {
      --per-view: 3;
    }
  }
</style>
