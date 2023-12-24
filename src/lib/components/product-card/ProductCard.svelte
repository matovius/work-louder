<script lang="ts">
	import Flair from '$lib/components/Flair.svelte';
	import { CartItemsStore, CartPrice } from '$lib/stores/Store';
	import { onDestroy } from 'svelte';

	export let productID: string;
	export let size: 'large' | 'small';
	export let name: string;
	export let category: 'keyboard' | 'keypad' | 'module' | 'keycaps' | 'merchandise' | 'deskmat';
	export let price: number;
	export let imgSrc: string;
	export let imgAlt: string;
	export let url: string = '#';
	export let greenFlairs: string[] | undefined = undefined;
	export let orangeFlairs: string[] | undefined = undefined;
	export let grayFlairs: string[] | undefined = undefined;
	export let blueFlairs: string[] | undefined = undefined;
	export let pinkFlairs: string[] | undefined = undefined;

	let cartItems: string[];

	const unsubscribeItems = CartItemsStore.subscribe((data) => {
		cartItems = data;
	});

	function addItemToCart() {
		if (cartItems[0] === 'empty') {
			CartItemsStore.set([productID]);
			CartPrice.set(price);
			return;
		} else if (cartItems.includes(productID)) {
			console.log('item is in cart already');
			return;
		}

		CartItemsStore.update((currentData) => {
			return [productID, ...currentData];
		});

		CartPrice.update((currentPrice) => {
			return currentPrice + price;
		});

		//console.log(cartItems);
		//console.log($CartItemsStore);
	}

	onDestroy(unsubscribeItems);
</script>

{#if size === 'large'}
	<div
		id="product-card__large"
		class=" isolate w-full min-w-full h-fit min-1080:h-360 flex flex-col min-1080:flex-row justify-center items-center gap-24 relative"
	>
		<div
			class="isolate w-full h-240 tablet-sm:h-360 laptop:h-full flex justify-center items-center rounded border border-white/20 overflow-hidden relative"
		>
			<img src={imgSrc} alt={imgAlt} class="w-full h-full object-cover" />

			<div id="flairs" class="w-full justify-start items-start gap-4 absolute top-0 left-0 p-24">
				{#if greenFlairs !== undefined}
					{#each greenFlairs as flair}
						<Flair variant="green-chip" label={flair} />
					{/each}
				{/if}

				{#if orangeFlairs !== undefined}
					{#each orangeFlairs as flair}
						<Flair variant="orange-chip" label={flair} />
					{/each}
				{/if}

				{#if grayFlairs !== undefined}
					{#each grayFlairs as flair}
						<Flair variant="gray-chip" label={flair} />
					{/each}
				{/if}
				{#if blueFlairs !== undefined}
					{#each blueFlairs as flair}
						<Flair variant="blue-chip" label={flair} />
					{/each}
				{/if}

				{#if pinkFlairs !== undefined}
					{#each pinkFlairs as flair}
						<Flair variant="pink-chip" label={flair} />
					{/each}
				{/if}
				<div />
			</div>

			<div
				class="w-fit flex flex-row flex-wrap justify-start items-start gap-4 p-24 absolute bottom-0 left-0"
			>
				<button
					class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800 focus-visible:outline-neutral-950"
					on:click={addItemToCart}
				>
					<span>add to cart</span>
				</button>
				<a
					href={url}
					class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800 focus-visible:outline-neutral-950"
				>
					<span>see details</span>
				</a>
			</div>
		</div>

		<div
			id="product-details-wrapper"
			class="isolate w-full laptop:max-w-[15rem] h-full flex flex-col justify-start items-start gap-24 overflow-hidden"
		>
			<div class="w-full max-w-[22.5rem] h-full flex flex-col justify-start items-start gap-24">
				<div class="flex flex-col gap-12">
					<h4 class="h4">{name}</h4>

					<h5 class="h5 opacity-60">{category}</h5>
				</div>

				<span class="h1 opacity-80">${price}</span>
			</div>
		</div>
	</div>
{:else if size === 'small'}
	<div
		id="product-card__small"
		class="isolate w-full laptop:max-w-[calc(50%-12px)] h-fit tablet-sm:h-240 flex flex-col tablet-sm:flex-row justify-center items-center gap-24 relative"
	>
		<div
			class="isolate w-full h-full max-h-240 flex justify-center items-center rounded border border-white/20 overflow-hidden relative"
		>
			<img src={imgSrc} alt={imgAlt} class="w-full h-full object-cover" />

			<div
				id="flairs"
				class="w-fit max-w-[15rem] justify-start items-start gap-4 absolute top-0 left-0 p-24"
			>
				{#if greenFlairs !== undefined}
					{#each greenFlairs as flair}
						<Flair variant="green-chip" label={flair} />
					{/each}
				{/if}

				{#if orangeFlairs !== undefined}
					{#each orangeFlairs as flair}
						<Flair variant="orange-chip" label={flair} />
					{/each}
				{/if}

				{#if grayFlairs !== undefined}
					{#each grayFlairs as flair}
						<Flair variant="gray-chip" label={flair} />
					{/each}
				{/if}
				{#if blueFlairs !== undefined}
					{#each blueFlairs as flair}
						<Flair variant="blue-chip" label={flair} />
					{/each}
				{/if}

				{#if pinkFlairs !== undefined}
					{#each pinkFlairs as flair}
						<Flair variant="pink-chip" label={flair} />
					{/each}
				{/if}
				<div />
			</div>

			<div
				class="w-full flex flex-row flex-wrap justify-start items-start gap-4 p-24 absolute bottom-0 left-0"
			>
				<button
					class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800 focus-visible:outline-neutral-950"
					on:click={addItemToCart}
				>
					<span>add to cart</span>
				</button>
				<a
					href={url}
					class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800 focus-visible:outline-neutral-950"
				>
					<span>see details</span>
				</a>
			</div>
		</div>

		<div
			id="product-details-wrapper"
			class="isolate w-full tablet-sm:max-w-[15rem] h-full flex flex-col justify-start items-start gap-24 overflow-hidden"
		>
			<div class="w-full max-w-[22.5rem] h-full flex flex-col justify-start items-start gap-24">
				<div class="flex flex-col gap-12">
					<h4 class="h4">{name}</h4>

					<h5 class="h5 opacity-60">{category}</h5>
				</div>

				<span class="h1 opacity-80">${price}</span>
			</div>
		</div>
	</div>
{/if}
