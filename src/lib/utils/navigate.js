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
  /** @type {ScrollToOptions} */
  const options = { left: scrollLeft, behavior: 'smooth' }

  switch (to) {
    case 'nextSlide':
    case 'nextPage': {
      const hasReachedEnd = scrollLeft === scrollWidth - clientWidth

      if (!hasReachedEnd) {
        options.left += to === 'nextSlide' ? offsetWidth : clientWidth
      }

      if (hasRewind && hasReachedEnd) options.left = 0

      break
    }
    case 'previousSlide':
    case 'previousPage': {
      const hasReachedStart = scrollLeft === 0

      if (!hasReachedStart) {
        options.left -= to === 'previousSlide' ? offsetWidth : clientWidth
      }

      if (hasRewind && hasReachedStart) options.left = scrollWidth
    }
  }

  wrapper.scrollTo(options)
}
