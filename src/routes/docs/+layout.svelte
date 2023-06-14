<script>
  import Menu from './Menu.svelte'
  import styles from './layout.module.css'
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css"
  />
</svelte:head>

<div>
  <Menu />
  <main class={styles.main}>
    <slot />
  </main>
</div>

<style>
  @media (min-width: 768px) {
    div {
      display: grid;
      grid-template-columns: 30rem 1fr;
      padding-top: 3rem;
    }
  }
</style>
