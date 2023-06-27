<li>
  <slot />
</li>

<style>
  li {
    flex-basis: calc(
      (100% - (var(--per-view, 1) - 1) * var(--gap, 0px)) / var(--per-view, 1)
    );
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  li :global(img) {
    max-width: 100%;
  }
</style>
