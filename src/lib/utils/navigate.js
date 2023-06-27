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
  const isCentered = wrapper.classList.contains('centered')
  /** @type {ScrollToOptions} */
  const options = { left: scrollLeft, behavior: 'smooth' }

  switch (to) {
    case 'nextSlide':
    case 'nextPage': {
      const hasReachedEnd = isCentered
        ? scrollLeft > scrollWidth - clientWidth * 1.5 - offsetWidth
        : scrollLeft === scrollWidth - clientWidth

      if (!hasReachedEnd) {
        options.left += to === 'nextSlide' ? offsetWidth : clientWidth
      }

      if (hasRewind && hasReachedEnd) options.left = 0

      break
    }
    case 'previousSlide':
    case 'previousPage': {
      const hasReachedStart = isCentered
        ? scrollLeft <= clientWidth / 2 + offsetWidth / 2
        : scrollLeft === 0

      if (!hasReachedStart) {
        options.left -= to === 'previousSlide' ? offsetWidth : clientWidth
      }

      if (hasRewind && hasReachedStart) options.left = scrollWidth
    }
  }

  wrapper.scrollTo(options)
}
