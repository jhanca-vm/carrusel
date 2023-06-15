<script>
  import Title from '../Title.svelte'
  import ExternalLink from '../ExternalLink.svelte'
</script>

<Title label="Props and Methods"></Title>

## Props

The `<Carrusel>` component accepts the following props:

- `class`: string
- `rewind`: boolean
- `draggable`: boolean

## Methods

The `<Carrusel>` exposes the following methods through the <ExternalLink href="https://svelte.dev/docs#template-syntax-component-directives-bind-this" label="bind:this" /> directive:

- `nextSlide`
- `previousSlide`
- `nextPage`
- `previousPage`

For more details, please refer to the [Slots](/docs/slots) section.
