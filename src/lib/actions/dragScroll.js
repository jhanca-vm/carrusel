/**
 * Enables drag scrolling functionality for Carrusel component.
 * @param {HTMLUListElement} node - Slides container element.
 * @returns Function that removes the event listener for the 'mousedown' event.
 */
export default function dragScroll(node) {
  /** @type {number} */
  let startPosition
  /** @type {number} */
  let initialScroll

  const handleMouseUp = () => {
    const isCentered = node.classList.contains('centered')
    /** @type {HTMLLIElement[]} */
    const slides = Array.from(node.children)

    if (!isCentered) slides.pop()

    const closest = slides.reduce((previous, current) => {
      /** @param {number} offsetLeft */
      const getDistance = offsetLeft => Math.abs(offsetLeft - node.scrollLeft)

      return getDistance(previous.offsetLeft) < getDistance(current.offsetLeft)
        ? previous
        : current
    })
    const offsetLeft = closest.offsetLeft - node.offsetLeft
    const finalScroll = isCentered
      ? offsetLeft - (node.offsetWidth - closest.offsetWidth) / 2
      : offsetLeft

    node.style.pointerEvents = ''

    if (node.scrollLeft !== finalScroll) {
      node.scrollTo({ left: finalScroll, behavior: 'smooth' })

      node.onscroll = () => {
        if (node.scrollLeft === finalScroll) {
          node.style.scrollSnapType = ''
          node.onscroll = null
        }
      }
    } else {
      node.style.scrollSnapType = ''
    }

    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  /** @param {MouseEvent} event */
  const handleMouseMove = ({ clientX }) => {
    if (!node.style.pointerEvents) node.style.pointerEvents = 'none'

    node.scrollLeft = initialScroll + startPosition - clientX
  }

  /** @param {MouseEvent} event */
  const handleMouseDown = event => {
    event.preventDefault()

    startPosition = event.clientX
    initialScroll = node.scrollLeft

    node.style.scrollSnapType = 'none'
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  node.addEventListener('mousedown', handleMouseDown)

  return () => node.removeEventListener('mousedown', handleMouseDown)
}
