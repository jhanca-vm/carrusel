/**
 * Scroll navigation function.
 * @param {HTMLUListElement} wrapper - Slides container element.
 * @param {'nextSlide'|'previousSlide'|'nextPage'|'previousPage'} to - Direction.
 * @param {boolean} hasRewind - Indicates whether rewind is allowed.
 */
export default function navigate(wrapper, to, hasRewind) {
  const { clientWidth, firstChild, scrollLeft, scrollWidth } = wrapper
  /** @type {HTMLLIElement} */
  const { offsetWidth } = firstChild
  const hasReachedEnd = scrollLeft + clientWidth * 2 >= scrollWidth
  /** @type {ScrollToOptions} */
  const options = { left: scrollLeft, behavior: 'smooth' }

  switch (to) {
    case 'nextSlide':
    case 'nextPage':
      if (!hasReachedEnd) {
        options.left += to === 'nextSlide' ? offsetWidth : clientWidth
      }
      if (hasRewind && hasReachedEnd) options.left = clientWidth
      break
    case 'previousSlide':
    case 'previousPage':
      if (scrollLeft !== clientWidth) {
        options.left -= to === 'previousSlide' ? offsetWidth : clientWidth
      }
      if (hasRewind && scrollLeft <= clientWidth) options.left = scrollWidth
  }

  wrapper.scrollTo(options)
}
