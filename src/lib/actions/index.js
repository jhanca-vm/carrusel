/**
 * @typedef {Object} Parameters
 * @property {boolean} draggable
 */

import dragScroll from './dragScroll.js'

/**
 * Performs actions on the node based on the given parameters.
 * @param {HTMLUListElement} node - Slides container element.
 * @param {Parameters} parameters - An object containing parameters for the actions.
 */
export default function actions(node, { draggable }) {
  /** @type {Set<() => void>} */
  const callbacks = new Set()

  if (draggable) callbacks.add(dragScroll(node))

  return {
    destroy() {
      for (const callback of callbacks) {
        callback()
      }
    }
  }
}
