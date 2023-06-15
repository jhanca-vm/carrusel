/**
 * Enables drag scrolling functionality for Carrusel component.
 * @param {HTMLUListElement} node - Slides container element.
 * @returns A function that removes the event listener for the 'mousedown' event.
 */
export default function dragScroll(node) {
  /** @type {number} */
  let startPosition
  /** @type {number} */
  let initialScroll

  const handleMouseUp = () => {
    const { offsetLeft, scrollLeft } = node
    /** @type {HTMLLIElement[]} */
    const slides = Array.from(node.children)
    const positions = slides.map(({ offsetLeft }) => offsetLeft)
    const closest = positions.reduce((previous, current) => {
      return Math.abs(previous - scrollLeft) < Math.abs(current - scrollLeft)
        ? previous
        : current
    })

    node.style.pointerEvents = ''

    node.scrollTo({ left: closest - offsetLeft, behavior: 'smooth' })

    node.onscroll = () => {
      if (node.scrollLeft === closest - offsetLeft) {
        node.removeAttribute('style')
        node.onscroll = null
      }
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

    node.style.setProperty('--snap-align', 'none')
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  node.addEventListener('mousedown', handleMouseDown)

  return () => node.removeEventListener('mousedown', handleMouseDown)
}