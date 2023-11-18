<script lang="ts">
	import Flair from '../Flair.svelte';
	import ProductImage from './ProductImage.svelte';
	import ProductDetails from './ProductDetails.svelte';

	export let size: 'large' | 'medium' | 'small';
	export let name: string;
	export let category: 'keyboard' | 'keypad' | 'module' | 'keycaps' | 'merchandise' | 'deskmat';
	export let price: string;
	export let imgSrc: string;
	export let imgAlt: string;
	export let url: string = '#';
	export let greenFlairs: string[] | undefined = undefined;
	export let orangeFlairs: string[] | undefined = undefined;
	export let grayFlairs: string[] | undefined = undefined;
	export let blueFlairs: string[] | undefined = undefined;
	export let pinkFlairs: string[] | undefined = undefined;
</script>

{#if size === 'large'}
	<a
		href={url}
		id="product-card__large"
		class="isolate w-full min-w-full flex flex-col justify-center items-center gap-24 p-12 pb-24 hover:bg-white/5 rounded-t-[32px] rounded-b relative outline outline-2 outline-transparent outline-offset-4 focus-visible:outline-current"
	>
		<div
			id="flairs"
			class="absolute top-0 right-0 z-10 w-full p-36 flex justify-start items-start gap-4"
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

		<ProductImage {imgSrc} {imgAlt} />

		<ProductDetails {name} {category} {price} />
	</a>
{:else if size === 'medium'}
	<a
		href={url}
		id="medium"
		class="isolate w-full tablet-lg:max-w-[calc(50%-12px)] flex flex-col justify-center items-center gap-24 p-12 pb-24 hover:bg-white/5 rounded-t-[32px] rounded-b relative outline outline-2 outline-transparent outline-offset-4 focus-visible:outline-current"
	>
		<div
			id="flairs"
			class="absolute top-0 right-0 z-10 w-full p-36 flex justify-start items-start gap-4"
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

		<ProductImage {imgSrc} {imgAlt} />

		<ProductDetails {name} {category} {price} />
	</a>
{:else if size === 'small'}
	<a
		href={url}
		id="small"
		class="isolate w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-18px)] flex flex-col justify-center items-center gap-24 p-12 pb-24 hover:bg-white/5 rounded-t-[32px] rounded-b relative outline outline-2 outline-transparent outline-offset-4 focus-visible:outline-current"
	>
		<div
			id="flairs"
			class="absolute top-0 right-0 z-10 w-full p-36 flex justify-start items-start gap-4"
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

		<ProductImage {imgSrc} {imgAlt} />

		<ProductDetails {name} {category} {price} />
	</a>
{/if}
