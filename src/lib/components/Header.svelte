<script lang="ts">
	import Favicon from "$lib/components/Favicon.svelte";

</script>

<header>
  <div class="container">
    <div class="side start">
      <a href="/" class="home-link" aria-label="Go to homepage">
        <div class="icon" aria-hidden="true">
          <Favicon />
        </div>
      </a>
    </div>
    <div class="side end">
      <button class="btn btn-ghost cart">
        <span>cart</span>
      </button>
      <button class="btn btn-ghost menu">
        <span>menu</span>
      </button>
    </div>
  </div>
</header>


<style>
  header {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .75rem; /* 12px */
    background: linear-gradient(180deg, var(--clr-black) 30%, transparent 60%);
    position: fixed;
    inset-block-start: 0;
    inset-inline: 0;
    pointer-events: none;
    z-index: 100;

    & > .container {
      width: 100%;
      max-width: 75rem; /* 1200px */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: .75rem; /* 12px */
    }
    & .side {
      display: flex;
      flex-direction: row;
      align-items: center;
      pointer-events: all;

      &.start {
        justify-content: flex-start;
      }
      &.end {
        justify-content: flex-end;
        gap: .25rem; /* 4px */
        padding: .25rem; /* 4px */
        background: var(--clr-white);
        border-radius: 9999rem;
        box-shadow: 0 4px 4px 0 color-mix(in oklab, var(--clr-black), transparent 80%);
      }
    }

  }
  a.home-link {
    text-decoration: none;
    padding: .75rem; /* 12px */
    background: var(--clr-white);
    border-radius: 9999rem;
    box-shadow: 0 4px 4px 0 color-mix(in oklab, var(--clr-black), transparent 80%);
    user-select: none;
    outline: 2px solid transparent;
    outline-offset: 2px;

    & > .icon {
      width: auto;
      height: 1.5rem; /* 24px */
      aspect-ratio: 1;
      
      &.placeholder {
        font-family: var(--font-tiny);
        font-size: 20px;
        line-height: 1;
        color: var(--clr-white);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: var(--clr-black);
        overflow: hidden;
      }
    }

    &:is(:hover, :focus) {
      & > .icon {
        transform: rotate(30deg) scale(1.2);
      }
    }
    &:focus-visible {
      outline-color: var(--clr-white);
    }
  }
  button.btn.cart, button.btn.menu {
    --btn-padding: .75rem 1.25rem; /* 12px 20px */
  }
</style>

