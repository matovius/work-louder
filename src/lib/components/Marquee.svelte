<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * The animation speed of the marquee, denoted by either 'slow' or 'fast'
   */
  type MarqueeSpeed = 'slow' | 'fast';

  interface Props {
    bgColor?: string;
    speed?: MarqueeSpeed;
    children?: any;
  }

  let { bgColor='var(--clr-black)', speed='fast', children='Hello World!' }: Props = $props();

  let marquee: HTMLDivElement;
  let scroller: HTMLUListElement;
  let scrollerContent: Element[];
  let isAnimated: boolean = $state(false);

  function duplicateContent() {
    let copy = scroller.cloneNode(true);
    marquee.appendChild(copy);
  }

  onMount(() => {
    scrollerContent = Array.from(scroller.children);

    if (!window.matchMedia('(prefers-reduced-motion: reduce').matches) {
      setTimeout(() => {
        duplicateContent();
        isAnimated = true;
      }, 2000);
    }

    setTimeout(() => {
      marquee.style.visibility = 'visible';
      marquee.style.opacity = '1';
    }, 2000);
  })
</script>

<div
  class="marquee" style="opacity: 0; visibility: hidden; --_bg: {bgColor}"
  data-is-animated={isAnimated}
  data-speed={speed}
  bind:this={marquee}
>
  <ul
    class="scroller h-full flex justify-center items-center gap-[4em] px-0 py-12"
    bind:this={scroller}
  >
    <li aria-hidden="true">
      {@render children()}
    </li>
    <li aria-hidden="true">
      {@render children()}
    </li>
    <li aria-hidden="true">
      {@render children()}
    </li>
    <li aria-hidden="true">
      {@render children()}
    </li>
    <li aria-hidden="true">
      {@render children()}
    </li>
    <li aria-hidden="true">
      {@render children()}
    </li>
  </ul>
</div>

<style>
  .marquee {
    font-family: var(--font-tiny);
    font-size: var(--fs-xxxl);
    line-height: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-block: 1.5rem; /* 24px */
    user-select: none;
    position: relative;
    isolation: isolate;
    overflow: hidden;

    &::before, &::after {
      content: "";
      width: 6rem; /* 96px */
      height: 100%;
      position: absolute;
      z-index: 2;
    }
    &::before {
      background: linear-gradient(90deg, var(--_bg), transparent);
      inset-block: 0;
      inset-inline-start: 0;
    }
    &::after {
      background: linear-gradient(270deg, var(--_bg), transparent);
      inset-block: 0;
      inset-inline-end: 0;
    }
  }
  .marquee[data-is-animated=true] > .scroller {
    will-change: transform;
    width: max-content;
    animation: marquee var(--_animation-duration, 40s)
    linear infinite var(--_animation-direction, forwards);
  }

  ul.scroller {
    white-space: nowrap;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & > li {
      margin-inline: 2em;
    }
  }

  .marquee[data-speed=slow] {
    --_animation-duration: 80s;
  }
  .marquee[data-speed=fast] {
    --_animation-duration: 40s;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
</style>