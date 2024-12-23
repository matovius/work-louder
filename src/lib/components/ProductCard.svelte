<script lang="ts">
  interface Props {
    imgSrc?: string;
    imgAlt?: string;
    name?: string;
    price?: string;
    url?: string;
  }
  let {
    imgSrc,
    imgAlt="",
    name="Hello World!",
    price="$99.99",
    url="/#"
  }: Props = $props();
</script>

<div class="card-wrapper">
  <a href={url} class="product-card">
    <div class="product-image">
      {#if imgSrc}
        <img src={imgSrc} alt={imgAlt} />
      {/if}
    </div>
    <div class="product-info">
      <h5 class="product-name">{name}</h5>
      <p class="product-price">{price}</p>
    </div>
  </a>

  <div class="cta">
    <button class="btn btn-default" aria-label="add this product to your cart">
      <span aria-hidden="true">add to cart</span>
    </button>
  </div>
</div>

<style>
  div.card-wrapper {
    width: 100%;
    position: relative;
  }

  a.product-card {
    color: unset;
    text-decoration: none;
    width: 100%;
    display: block;
    border-radius: 1.5rem; /* 24px */
    border: 1px solid var(--clr-neutral-800);
    overflow: hidden;
    outline: 2px solid transparent;
    outline-offset: .25rem; /* 4px */

    &:is(:hover, :focus) {
      color: var(--clr-black);
      
      & > .product-info {
        background: var(--clr-white);
      }

      & + .cta {
        opacity: 1;
      }
    }

    &:focus-visible {
      outline-color: var(--clr-white);
    }
  }

  .product-image {
    width: 100%;
    height: 15rem; /* 240px */
    background: var(--clr-neutral-800);

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem; /* 24px */

    & > .product-price {
      color: var(--clr-neutral-500);
    }
  }

  .cta {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    padding: .75rem .75rem 0 0; /* 12px */
    pointer-events: none;
    opacity: 0;

    & > button {
      pointer-events: all;
    }

    &:has(button:is(:hover, :focus)) {
      opacity: 1;
    }
  }
</style>