/**
 * @typedef {Object} Image
 * @property {string} id
 * @property {string} author
 */

export async function load({ fetch }) {
  const response = await fetch('https://picsum.photos/v2/list?page=3&limit=9')
  /** @type {Image[]} */
  const images = await response.json()

  return { images }
}
