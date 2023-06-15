<li>
  <slot />
</li>

<style>
  li {
    scroll-snap-align: var(--snap-align, start);
  }

  li :global(img) {
    max-width: 100%;
  }
</style>
