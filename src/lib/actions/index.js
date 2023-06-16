/**
 * @typedef {Object} Parameters
 * @property {boolean} draggable
 * @property {number|boolean} autoplay
 */

import dragScroll from './dragScroll.js'
import autoPlay from './autoPlay.js'

/**
 * Performs actions on the node based on the given parameters.
 * @param {HTMLUListElement} node - Slides container element.
 * @param {Parameters} parameters - An object containing parameters for the actions.
 */
export default function actions(node, { draggable, autoplay }) {
  /** @type {Set<() => void>} */
  const callbacks = new Set()

  if (draggable) callbacks.add(dragScroll(node))
  if (autoplay) callbacks.add(autoPlay(node, autoplay))

  return {
    destroy() {
      for (const callback of callbacks) {
        callback()
      }
    }
  }
}
