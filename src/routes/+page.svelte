<script lang="ts">
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
    <div class="container main">
      <div class="bg"></div>
      <div class="content">
        <h1>focus.<br>work.<br>rest.</h1>
        <p>Our tools help you focus in ways you've only dreamed of.</p>
        <button class="btn btn-primary" aria-label="Discover the nomad">
          <span aria-hidden="true">discover the nomad</span>
        </button>
      </div>
    </div>

    <div class="container extra">
      <div class="bg">
        <div class="desktop-image"></div>
      </div>
      <div class="content">
        <h4>Introducing Input</h4>
        <div class="cta">
          <button class="btn btn-default" aria-label="download now">
            <span aria-hidden="true">download now</span>
          </button>
          <button class="btn btn-ghost" aria-label="read more">
            <span aria-hidden="true">read more</span>
          </button>
        </div>
      </div>
    </div>
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
    <div class="container wrk-shop">
      <div class="bg"></div>
      <div class="content">
        <h2>visit the wrk.shop</h2>
        <p>It's the place where your renders become reality.</p>
        <button class="btn btn-default" aria-label="visit">
          <span aria-hidden="true">visit</span>
        </button>
      </div>
    </div>

    <div class="container newsletter">
      <div class="bg">
      </div>
      <div class="content">
        <h4>join the newsletter</h4>
        <p>Get product updates and offers straight to your inbox.<br>No spam, we promise.</p>
      </div>

      <div class="form">
        <form>
          <label for="email">
            <p>Email address</p>
            <input type="email" name="email" id="email" class="input" placeholder="e.g. person@example.com" />
          </label>
          <div class="cta">
            <button class="btn btn-default" aria-label="join now">
              <span aria-hidden="true">join now</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  main {
    margin-block-start: 72px;
    min-height: 200vh;
  }
  
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: .75rem; /* 12px */

    & > .container {
      width: 100%;
      max-width: 75rem; /* 1200px */
    }
  }

  section.hero-section {
    flex-direction: column;
    gap: .75rem; /* 12px */

    & > .container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem 1.5rem; /* 48px 24px */
      border-radius: 24px;
      isolation: isolate;
      position: relative;
      overflow: hidden;
      
      & > .bg {
        background: var(--clr-neutral-800);
        position: absolute;
        inset: 0;
        z-index: -1;
      }
    }
  }
  section.hero-section > .container.main {
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
  section.hero-section > .container.extra {
    --_height: 12.5rem; /* 200px */
    height: var(--_height);
    justify-content: flex-start;
    align-items: flex-start;
    padding-block: 1.5rem; /* 24px */

    & > .bg {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background: var(--clr-white);
      background-image: radial-gradient(circle at 50% 0%, var(--clr-primary-500), transparent 60%);
      padding-inline: 12px;

      & > .desktop-image {
        width: 100%;
        max-width: 37.5rem; /* 600px */
        height: auto;
        aspect-ratio: 16 / 9;
        border: 2px solid var(--clr-neutral-100);
        background: var(--clr-white);
        border-radius: .75rem .75rem 0 0; /* 12px */
        transform: translateY(calc(var(--_height) / 2));
      }
    }
    
    & > .content {
      color: var(--clr-black);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem; /* 24px */
    }

    & h4::selection {
      color: var(--clr-white);
      background: var(--clr-black);
    }

    & .cta {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: .75rem; /* 12px */

      & > button.btn {
        --btn-padding: .75rem 1.5rem; /* 12px 24px */
  
        &.btn-default:is(:hover, :focus) {
          transform: scale(1.2);
          box-shadow: 0 4px 12px 4px color-mix(in oklab, var(--clr-black), transparent 60%);
        }
  
        &.btn-default:active {
          transform: scale(1);
          box-shadow: 0 4px 12px 4px color-mix(in oklab, var(--clr-black), transparent 100%);
        }
      }
    }

  }

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

  section.extras-section {
    flex-direction: column;
    gap: .75rem; /* 12px */
    padding-block-end: 3rem; /* 48px */

    & > .container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem 1.5rem; /* 48px 24px */
      border-radius: 24px;
      isolation: isolate;
      position: relative;
      overflow: hidden;
      
      & > .bg {
        background: var(--clr-neutral-800);
        position: absolute;
        inset: 0;
        z-index: -1;
      }
    }
  }
  section.extras-section > .container.wrk-shop {

    & > .content {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem; /* 24px */
    }
    & button.btn.btn-default {
      --btn-padding: .75rem 3rem; /* 12px 48px */
    }
  }
  section.extras-section > .container.newsletter {
    height: var(--_height);
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem; /* 24px */
    padding-block: 1.5rem; /* 24px */

    @media screen and (min-width: 37.5rem) /* 600px */ {
      flex-direction: row;
    }

    & *::selection {
      color: var(--clr-white);
      background: var(--clr-black);
    }

    & > .bg {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background: var(--clr-white);
      background-image: radial-gradient(circle at 0% 50%, var(--clr-primary-500), transparent 60%);
      padding-inline: 12px;
    }
    
    & > .content {
      color: var(--clr-black);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: .75rem; /* 12px */
    }

    & > .form {
      width: 100%;
      max-width: 22.5rem; /* 360px */
      color: var(--clr-black);
    }

    & .cta {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: .75rem; /* 12px */
      padding-block-start: .25rem; /* 4px */

      & > button.btn {
        --btn-padding: .75rem 1.5rem; /* 12px 24px */
      }
    }

  }

  span.marquee-text {
    & > s {
      color: var(--clr-primary-500);
    }
  }
</style>
