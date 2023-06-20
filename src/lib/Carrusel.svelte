<script>
  import navigate from './utils/navigate'
  import actions from './actions'

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
    style={centered ? '--snap-align: center' : undefined}
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
</style>
