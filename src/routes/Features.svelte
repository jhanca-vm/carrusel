<script>
  const data = [
    {
      name: 'Lightweight',
      description:
        'Optimized in size and performance for fast loading and smooth user ' +
        'experience.'
    },
    {
      name: 'Instant loading',
      description:
        "It doesn't require JavaScript for initialization, eliminating " +
        'unnecessary loading times.'
    },
    {
      name: 'More CSS, Less JavaScript',
      description: 'Simplified configuration and easy customization.'
    },
    {
      name: 'No dependencies',
      description: "It doesn't require or utilize any external libraries."
    },
    {
      name: 'Accessible',
      description: 'Enables all users to interact effectively without barriers.'
    },
    {
      name: 'Mixed content',
      description:
        'Displays any type of content such as images, text, videos, links, etc.'
    }
  ]
</script>

<section>
  {#each data as { name, description }}
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  {/each}
</section>

<style>
  section {
    background-color: hwb(var(--color-300));
    display: grid;
    font-size: 1.8rem;
    gap: 3rem;
    padding: 10rem 2.5rem 9rem;
  }

  article {
    background-color: hwb(var(--color-100) / 0.8);
    border-radius: 1.5rem;
    padding: 2rem 2.5rem 2.5rem;
  }

  h3 {
    font-size: 2.3rem;
    margin-block: 0 1rem;
  }

  p {
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    article {
      background-color: hwb(var(--color-400) / 0.8);
    }
  }

  @media (min-width: 640px) {
    section {
      grid-template-columns: repeat(2, 1fr);
      padding-bottom: 6rem;
    }
  }

  @media (min-width: 768px) {
    section {
      font-size: 2rem;
      gap: 4rem;
      padding: 15rem 4rem 11rem;
    }
  }

  @media (min-width: 1024px) {
    section {
      grid-template-columns: repeat(3, 1fr);
      padding-block: 18rem 12rem;
    }
  }

  @media (min-width: 1280px) {
    section {
      padding: 20rem 8rem 12.5rem;
    }
  }
</style>
