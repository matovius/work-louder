<script lang="ts">
	import Favicon from "$lib/components/Favicon.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import { quadOut } from "svelte/easing";
	import { scale } from "svelte/transition";

  type DialogTab = "cart" | "menu";

  let isDialogOpen: boolean = $state(false);
  let currentDialogTab: DialogTab = $state("menu");

  function openDialog(newValue: DialogTab) {
    currentDialogTab = newValue;

    isDialogOpen = true;
  }
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
      <button class="btn btn-ghost cart" onclick={() => { openDialog("cart"); }}>
        <span>cart</span>
      </button>
      <button class="btn btn-ghost menu" onclick={() => { openDialog("menu"); }}>
        <span>menu</span>
      </button>
    </div>
  </div>
</header>

<Modal bind:isOpen={isDialogOpen}>
  {#if isDialogOpen}
    <div class="modal-container" transition:scale={{ duration: 200, easing: quadOut, start: 0.95, opacity: 0 }}>
      <div class="surface">
        <div class="container">
          <div class="header">
            <div class="tab-title">
              <h5>{currentDialogTab === "cart" ? "cart" : "menu"}</h5>
            </div>

            <button class="btn btn-outlined close" aria-label="Close" onclick={() => { isDialogOpen = false;}}>
              <span aria-hidden="true">Close</span>
            </button>
          </div>

          <div class="main">
            {#if currentDialogTab === "cart"}
              <div class="tab cart">
                <div class="h4">This is your cart</div>
              </div>
            {:else if currentDialogTab === "menu"}
              <div class="tab menu">
                <div class="h4">This is the menu</div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
</Modal>


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
  button.btn.cart, button.btn.menu, button.btn.close {
    --btn-padding: .75rem 1.25rem; /* 12px 24px */
  }

  .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    padding: .75rem; /* 12px */

    & > .surface {
      width: 100%;
      max-width: 75rem; /* 1200px */
      height: 100%;
      border: 2px solid var(--clr-neutral-800);
      border-radius: 24px;
      background: var(--clr-black);
      overflow: hidden;

      & > .container {
        width: 100%;
        overflow: auto;
      }
    }

    & .header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem; /* 24px */
      padding: .75rem; /* 12px */
      border-block-end: 2px solid var(--clr-neutral-800);
      background: var(--clr-black);
      position: sticky;
      top: 0;

      & > .tab-title {
        color: var(--clr-white);
      }
    }

    & .main {
      width: 100%;

      & > .tab {
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 24px;
        background: var(--clr-neutral-800);
      }
    }
  }
</style>

