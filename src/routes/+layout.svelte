<script>
  import '@fontsource-variable/dosis'
  import '../app.css'
</script>

<slot />
<footer>
  <p>Released under the MIT license.</p>
  <p>© 2023 Jhan Viloria</p>
</footer>

<style>
  footer {
    background: linear-gradient(hwb(var(--color-300)), hwb(var(--color-200)));
    color: hwb(var(--color-400));
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.75;
    padding-block: 4rem 2rem;
    text-align: center;
  }

  p {
    margin: 0;
  }
</style>
