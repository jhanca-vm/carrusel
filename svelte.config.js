import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md'],
  preprocess: mdsvex({ extension: '.svelte.md' }),
  kit: {
    adapter: adapter()
  }
}

export default config
