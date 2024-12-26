<script lang="ts">
  import NewsletterCTACard from '$lib/components/NewsletterCTACard.svelte';
  import WrkShopCTACard from '$lib/components/WrkShopCTACard.svelte';
  import InputCTACard from '$lib/components/InputCTACard.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';

  type Product = {
    imgSrc?: string;
    imgAlt?: string;
    name: string;
    price: string;
    url: string;
  }

  const products: Product[] = [
    {
      name: "nomad [e]",
      price: "$349",
      url: "/#"
    },
    {
      name: "k.no.b.1",
      price: "$439",
      url: "/#"
    },
    {
      name: "Figma creator micro",
      price: "$159",
      url: "/#"
    },
    {
      name: "creator micro",
      price: "$129",
      url: "/#"
    },
    {
      name: "creator board",
      price: "$249",
      url: "/#"
    },
    {
      name: "creator board XL",
      price: "$559",
      url: "/#"
    }
  ];
</script>

<svelte:head>
  <title>work_louder - making keyboards for your most productive work</title>
</svelte:head>

<Header />

<main>
  <section id="hero" class="hero-section">
    <div class="container card nomad">
      <div class="bg"></div>
      <div class="content">
        <h1>focus.<br>work.<br>rest.</h1>
        <p>Our tools help you focus in ways you've only dreamed of.</p>
        <button class="btn btn-primary" aria-label="Discover the nomad">
          <span aria-hidden="true">discover the nomad</span>
        </button>
      </div>
    </div>

    <InputCTACard />
   </section>

  <Marquee textColor="var(--clr-neutral-400)">
    <span class="marquee-text">know productivity, efficiency, passion, and creativity with no limits.</span>
  </Marquee>

  <section id="products" class="products-section">
    <div class="container">
      <h2>do more with our amazing keyboards</h2>
      <ul class="featured-products-list">
        {#each products as product}
          <li>
            <ProductCard name={product.name} price={product.price} url={product.url} />
          </li>
        {/each}
      </ul>
      <div class="cta">
        <button class="btn btn-inverse" aria-label="explore more products">
          <span aria-hidden="true">explore more products</span>
        </button>
      </div>
    </div>
  </section>

  <Marquee textColor="var(--clr-neutral-400)">
    <span class="marquee-text">all work and <s>no</s> play - work_louder inc.</span>
  </Marquee>

  <section id="extras" class="extras-section">
    <WrkShopCTACard />
    <NewsletterCTACard />
  </section>
</main>

<Footer />

<style>
  main {
    margin-block-start: 72px;
    min-height: 200vh;
  }

  /* HERO SECTION */
  section.hero-section {
    flex-direction: column;
    gap: .75rem; /* 12px */

    & > .container {
      display: flex;
      justify-content: center;
      align-items: center;
      
      & > .bg {
        background: var(--clr-neutral-800);
        position: absolute;
        inset: 0;
        z-index: -1;
      }
    }
  }
  section.hero-section > .container.nomad {
    --card-border-color: var(--clr-neutral-800);
    min-height: 70vh;

    & > .content {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem; /* 24px */
    }
    & button.btn.btn-primary {
      --btn-padding: .75rem 3rem; /* 12px 48px */
    }
  }

  /* PRODUCTS SECTION */
  section.products-section {

    & h2 {
      text-align: center;
      padding-block: 3rem 1.5rem; /* 48px 24px */
    }

    & > .container {
      width: 100%;
      max-width: 75rem; /* 1200px */
    }

    & ul.featured-products-list {
      list-style: none;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)); /* 320px */
      gap: 1.5rem; /* 24px */
    }

    & .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-block-start: 1.5rem; /* 24px */

      & > button.btn {
        --btn-padding: 12px 24px;
      }
    }
  }

  /* EXTRAS SECTION */
  section.extras-section {
    flex-direction: column;
    gap: .75rem; /* 12px */
    padding-block-end: 3rem; /* 48px */
  }

  /* MARQUEE TEXT */
  span.marquee-text {
    & > s {
      color: var(--clr-primary-500);
    }
  }
</style>
