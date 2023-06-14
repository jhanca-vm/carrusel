<li>
  <slot />
</li>

<style>
  li {
    scroll-snap-align: start;
  }

  li :global(img) {
    max-width: 100%;
  }
</style>
