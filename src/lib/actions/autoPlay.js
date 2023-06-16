import navigate from '../utils/navigate.js'

/**
 * Starts automatic slideshow playback.
 * @param {HTMLUListElement} node - Slides container element.
 * @param {number|boolean} parameter - Time interval between slides.
 * If `true`, a default interval of 3000 (3 seconds) is set
 * @returns Function to stop automatic playback.
 */
export default function autoPlay(node, parameter) {
  /** @type {number} */
  const timeout = parameter === true ? 3000 : parameter
  const interval = [navigate, timeout, node, 'nextPage', true]

  let intervalID = setInterval(...interval)

  function play() {
    intervalID = setInterval(...interval)
  }

  function pause() {
    clearInterval(intervalID)

    node.onmouseleave = () => {
      play()
      node.onmouseleave = null
    }
  }

  node.addEventListener('mouseenter', pause)

  return () => {
    clearInterval(intervalID)
    node.removeEventListener('mouseenter', pause)
  }
}
