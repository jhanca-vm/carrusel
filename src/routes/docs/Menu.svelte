<script>
  import { page } from '$app/stores'

  const links = [
    'Getting Started',
    'Props and Methods',
    'Slots',
    'Styling',
    'Demos',
    'Contributing'
  ]

  let isVisible = false
</script>

<nav>
  <a href="/">
    <img src="/logo.svg" alt="" width="22" height="22" />
    Carrusel
  </a>
  <ul class:hidden={!isVisible}>
    {#each links as link}
      {@const slug = link.toLowerCase().replaceAll(' ', '-')}
      <li>
        <a class:active={$page.route.id.endsWith(slug)} href={`/docs/${slug}`}>
          {link}
        </a>
      </li>
    {/each}
  </ul>
  <button on:click={() => (isVisible = !isVisible)}>
    <svg width="24" height="24">
      <path d={isVisible ? 'M18 6 6 18M6 6l12 12' : 'M4 8h16M4 16h16'} />
    </svg>
  </button>
</nav>

<style>
  nav {
    align-items: center;
    background-color: hwb(var(--color-100));
    display: flex;
    font-size: 2rem;
    justify-content: space-between;
    padding: 2.5rem;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  nav > a {
    align-items: center;
    column-gap: 0.5rem;
    display: flex;
    font-weight: 600;
  }

  svg {
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linecap: round;
  }

  ul {
    background-color: hwb(var(--color-100));
    display: grid;
    font-weight: 500;
    grid-auto-rows: max-content;
    height: calc(100vh - 8rem);
    list-style: none;
    margin: 0;
    padding: 2.5rem;
    position: absolute;
    right: 0;
    row-gap: 0.5em;
    text-align: center;
    top: 100%;
    width: 100%;
  }

  li a {
    transition: opacity 150ms ease-out;
  }

  li a:not(:hover, .active) {
    opacity: 0.8;
  }

  .active {
    color: hwb(var(--color-300));
  }

  @media (prefers-color-scheme: dark) {
    nav,
    ul {
      background-color: hwb(var(--color-400));
    }
  }

  @media (min-width: 768px) {
    nav {
      flex-direction: column;
      height: 80vh;
      justify-content: flex-start;
      padding-inline: 4rem;
      top: 3rem;
    }

    button {
      display: none;
    }

    ul {
      height: auto;
      position: static;
      padding-inline: 0;
    }
  }

  @media (max-width: 767px) {
    .hidden {
      display: none;
    }
  }
</style>
