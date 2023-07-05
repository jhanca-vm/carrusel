import { writable } from 'svelte/store'

/**
 * @param {HTMLUListElement} wrapper - Slides container element.
 * @returns Read-only store.
 */
export default function createPagination(wrapper) {
  const getPages = () => Math.round(wrapper.scrollWidth / wrapper.offsetWidth)

  const getCurrentPage = () => {
    return (
      Math.floor(
        (wrapper.scrollLeft - wrapper.firstChild.offsetWidth) /
          wrapper.offsetWidth
      ) + 2
    )
  }

  const { subscribe, set, update } = writable(
    { pages: getPages(), currentPage: getCurrentPage() },
    () => {
      const observer = new ResizeObserver(() => {
        set({ pages: getPages(), currentPage: getCurrentPage() })
      })

      const setCurrentPage = () => {
        update(pagination => {
          pagination.currentPage = getCurrentPage()

          return pagination
        })
      }

      observer.observe(wrapper)
      wrapper.addEventListener('scroll', setCurrentPage)

      return () => {
        observer.disconnect()
        wrapper.removeEventListener('scroll', setCurrentPage)
      }
    }
  )

  return { subscribe }
}
