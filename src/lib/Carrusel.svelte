<script>
  import actions from './actions/index.js'
  import navigate from './utils/navigate.js'

  /** @type {string} */
  export let ariaLabel
  /** @type {number|boolean} */
  export let autoplay = false
  export let rewind = false
  export let draggable = false
  export let centered = false

  /** @type {string} */
  let className = undefined
  /** @type {HTMLUListElement} */
  let wrapper

  export { className as class }

  export const nextSlide = () => navigate(wrapper, 'nextSlide', rewind)

  export const previousSlide = () => navigate(wrapper, 'previousSlide', rewind)

  export const nextPage = () => {
    navigate(wrapper, centered ? 'nextSlide' : 'nextPage', rewind)
  }

  export const previousPage = () => {
    navigate(wrapper, centered ? 'previousSlide' : 'previousPage', rewind)
  }
</script>

<div class={className} role="region" aria-label={ariaLabel}>
  <ul
    bind:this={wrapper}
    class:centered
    aria-live="polite"
    use:actions={{ draggable, autoplay, isCentered: centered }}
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
    display: flex;
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

  .centered :global(li) {
    scroll-snap-align: center;
  }

  .centered :global(li:first-child) {
    margin-left: 100%;
  }

  .centered :global(li:last-child) {
    margin-right: 100%;
  }
</style>
