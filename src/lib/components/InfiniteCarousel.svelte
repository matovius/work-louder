<script lang="ts">
	import { onMount } from 'svelte';

	export let animationDirection: 'forwards' | 'reverse' = 'forwards';
	export let animationDuration: 'very-slow' | 'slow' | 'fast' | 'very-fast' = 'very-fast';
	export let background: 'transparent' | 'solid-primary' = 'transparent';

	let Scroller: HTMLElement;
	let ScrollerInner: HTMLElement;
	let scrollerContent: Element[];
	let animationState: boolean = false;

	function addAnimation() {
		animationState = true;
	}

	function duplicateContent() {
		scrollerContent.forEach((item: Node) => {
			let duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute('aria-hidden', true);
			ScrollerInner.appendChild(duplicatedItem);
		});
	}

	onMount(() => {
		scrollerContent = Array.from(ScrollerInner.children);

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			addAnimation();
			duplicateContent();
		}
	});
</script>

<div
	class="scroller"
	data-animated={animationState}
	data-duration={animationDuration}
	data-direction={animationDirection}
	data-background={background}
	bind:this={Scroller}
>
	<ul class="tag-list scroller-inner" bind:this={ScrollerInner}>
		<li aria-hidden="true">
			<slot />
		</li>
		<li aria-hidden="true">
			<slot />
		</li>
		<li aria-hidden="true">
			<slot />
		</li>
		<li aria-hidden="true">
			<slot />
		</li>
		<li aria-hidden="true">
			<slot />
		</li>
	</ul>
</div>

<style lang="postcss">
	.scroller {
		@apply w-full max-w-7xl text-[3.75rem] leading-none font-handjet font-bold select-none overflow-hidden;
	}

	/*
  .tag-list {
    @apply flex gap-48;
  }
  */

	.scroller-inner {
		@apply flex gap-96 p-24;
	}

	.tag-list > li {
		@apply w-max text-center;
	}

	.scroller[data-background='transparent'] {
		@apply bg-transparent text-white;
	}
	.scroller[data-background='solid-primary'] {
		@apply bg-lemon-lime text-black;
	}

	.scroller[data-animated='true'] {
		-webkit-mask: linear-gradient(
			90deg,
			hsl(0, 0%, 100%, 0),
			hsl(0, 0%, 100%, 1) 15%,
			hsl(0, 0%, 100%, 1) 85%,
			hsl(0, 0%, 100%, 0)
		);
		mask: linear-gradient(
			90deg,
			hsl(0, 0%, 100%, 0),
			hsl(0, 0%, 100%, 1) 15%,
			hsl(0, 0%, 100%, 1) 85%,
			hsl(0, 0%, 100%, 0)
		);
	}

	.scroller[data-animated='true'] > .scroller-inner {
		@apply w-max;
		animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear
			infinite;
	}

	.scroller[data-direction='right'] {
		--animation-direction: reverse;
	}
	.scroller[data-direction='left'] {
		--animation-direction: forwards;
	}

	.scroller[data-duration='very-slow'] {
		--animation-duration: 120s;
	}
	.scroller[data-duration='slow'] {
		--animation-duration: 80s;
	}
	.scroller[data-duration='fast'] {
		--animation-duration: 40s;
	}
	.scroller[data-duration='very-fast'] {
		--animation-duration: 20s;
	}

	@keyframes scroll {
		to {
			transform: translateX(calc(-50% - 1.5rem));
		}
	}
</style>
