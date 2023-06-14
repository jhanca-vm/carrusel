<section>
  <img src="/logo.svg" alt="" width="22" height="22" />
  <h1>Carrusel</h1>
  <p>
    A simple and dependency&#8209;free carousel for Svelte that is
    SSR&#8209;compatible.
  </p>
  <div>
    <a href="/docs/getting-started">Get Started</a>
    <a
      href="https://github.com/jhanca-vm/carrusel"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </div>
  <svg viewBox="0 0 1440 320">
    <path
      d="m0 32 80 16c80 16 240 48 400 42.7C640 85 800 43 960 32s320 11 400 21.3l80 10.7V0H0Z"
    />
  </svg>
</section>

<style>
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;
    padding: 4rem 2rem;
    position: relative;
    text-align: center;
  }

  img {
    animation: rotate 20s linear infinite;
    width: 15rem;
  }

  h1 {
    font-size: 4rem;
    margin-block: 2rem 0.5rem;
  }

  p {
    font-size: 2rem;
    margin: 0 auto;
    max-width: 44rem;
    opacity: 0.85;
  }

  div {
    column-gap: 2rem;
    display: flex;
    font-weight: 600;
    margin-top: 2.5rem;
  }

  a {
    border-radius: 2.5rem;
    color: hwb(var(--color-100));
    padding: 0.5rem 2rem;
    transition: box-shadow 150ms ease-out;
  }

  a:hover {
    box-shadow: -1px 2px hwb(var(--color-400));
  }

  a:first-child {
    background-color: hwb(var(--color-300));
  }

  a:last-child {
    background-color: hwb(var(--color-200));
    color: hwb(var(--color-400));
  }

  svg {
    fill: hwb(var(--color-100));
    position: absolute;
    top: 100%;
  }

  @media (prefers-color-scheme: dark) {
    a:hover {
      box-shadow: -1px 2px hwb(var(--color-100));
    }

    svg {
      fill: hwb(var(--color-400));
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 2.1rem;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
