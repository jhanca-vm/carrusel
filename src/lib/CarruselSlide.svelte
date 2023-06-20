<li>
  <slot />
</li>

<style>
  li {
    flex-basis: calc(
      (100% - (var(--per-view, 1) - 1) * var(--gap, 0px)) / var(--per-view, 1)
    );
    flex-shrink: 0;
    scroll-snap-align: var(--snap-align, start);
  }

  li:first-child {
    margin-left: 100%;
  }

  li:last-child {
    margin-right: 100%;
    scroll-snap-align: var(--snap-align, end);
  }

  li :global(img) {
    max-width: 100%;
  }
</style>
