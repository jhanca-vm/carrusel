<script>
  import { onDestroy, onMount } from 'svelte'
  import actions from './actions/index.js'
  import navigate from './utils/navigate.js'
  import createPagination from './utils/createPagination.js'

  /** @type {string} */
  export let ariaLabel
  /** @type {number|boolean} */
  export let autoplay = false
  export let rewind = false
  export let draggable = false
  export let pagination = false
  export let pages = 0
  export let currentPage = 0

  /** @type {string} */
  let className = undefined
  /** @type {HTMLUListElement} */
  let wrapper
  /** @type {import('svelte/store').Unsubscriber} */
  let unsubscribe

  onMount(() => {
    if (pagination) {
      unsubscribe = createPagination(wrapper).subscribe(pagination => {
        pages = pagination.pages
        currentPage = pagination.currentPage
      })
    }
  })

  onDestroy(() => {
    if (unsubscribe) unsubscribe()
  })

  export { className as class }

  export const nextSlide = () => navigate(wrapper, 'nextSlide', rewind)
  export const previousSlide = () => navigate(wrapper, 'previousSlide', rewind)

  export const nextPage = () => navigate(wrapper, 'nextPage', rewind)
  export const previousPage = () => navigate(wrapper, 'previousPage', rewind)

  /** @param {number} page */
  export const goToPage = page => {
    wrapper.scrollTo({
      left: wrapper.offsetWidth * (page - 1),
      behavior: 'smooth'
    })
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
  <slot name="nav" />
  <slot name="btn-prev" />
  <slot name="btn-next" />
</div>

<style>
  div {
    position: relative;
  }

  ul {
    gap: var(--gap, 0);
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
  }

  ul::-webkit-scrollbar {
    display: none;
  }
</style>
