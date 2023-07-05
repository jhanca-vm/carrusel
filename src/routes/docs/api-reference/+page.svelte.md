<script>
  import Title from '../Title.svelte'
  import ExternalLink from '../ExternalLink.svelte'
</script>

<Title label="API Reference"></Title>

## `<Carrusel>`

> ### Props

> - `class`: string
> - `ariaLabel`: string
> - `rewind`: boolean
> - `draggable`: boolean
> - `autoplay`: boolean | number (milliseconds)
> - `pagination`: boolean

> ### Directives

> - `bind:this`
> - `bind:pages`
> - `bind:currentPage`

> ### Methods

> The component exposes the following methods through the <ExternalLink href="https://svelte.dev/docs#template-syntax-component-directives-bind-this" label="bind:this" /> directive:

> - `nextSlide`**:** _`() => void`_
> - `previousSlide`**:** _`() => void`_
> - `nextPage`**:** _`() => void`_
> - `previousPage`**:** _`() => void`_
> - `goToPage`**:** _`(page: number) => void`_

> ### Slots

> - `nav`
> - `btn-prev`
> - `btn-next`
