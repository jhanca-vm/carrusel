<script>
  import navigate from './utils/navigate'
  import actions from './actions'

  export let rewind = false
  export let draggable = false
  /** @type {number|boolean} */
  export let autoplay = false
  /** @type {string} */
  export let ariaLabel

  /** @type {string} */
  let className = undefined
  /** @type {HTMLUListElement} */
  let wrapper

  export { className as class }

  export const nextSlide = () => {
    navigate(wrapper, 'nextSlide', rewind)
  }

  export const previousSlide = () => {
    navigate(wrapper, 'previousSlide', rewind)
  }

  export const nextPage = () => {
    navigate(wrapper, 'nextPage', rewind)
  }

  export const previousPage = () => {
    navigate(wrapper, 'previousPage', rewind)
  }
</script>

<div class={className} role="region" aria-label={ariaLabel}>
  <ul
    bind:this={wrapper}
    aria-live="polite"
    use:actions={{ draggable, autoplay }}
  >
    <slot />
  </ul>
  <slot name="btn-prev" />
  <slot name="btn-next" />
</div>

<style>
  div {
    position: relative;
  }

  ul {
    column-gap: var(--gap, 0);
    display: grid;
    grid-auto-columns: calc(
      (100% - (var(--per-view, 1) - 1) * var(--gap, 0px)) / var(--per-view, 1)
    );
    grid-auto-flow: column;
    height: 100%;
    list-style: none;
    margin: 0;
    overflow-x: scroll;
    padding: 0;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
  }

  ul::-webkit-scrollbar {
    display: none;
  }
</style>
