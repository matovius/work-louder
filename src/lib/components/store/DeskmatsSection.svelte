<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import type { Product } from '../product-card/ProductData';
	import ProductCard from '../product-card/ProductCard.svelte';

	import animoDeskpad from '$lib/images/animo-deskpad.png';
	import floppyChameleon from '$lib/images/floppy-chameleon.png';
	import muriicleCollab from '$lib/images/muriicle-collab.png';

	const category = 'deskmat';

	let DeskmatProducts: Product[] = [
		{
			size: 'large',
			name: 'A.N.I.M.O.',
			category: category,
			price: '40',
			imgSrc: animoDeskpad,
			imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
		},
		{
			size: 'medium',
			name: 'floppy chameleon',
			category: category,
			price: '69',
			imgSrc: floppyChameleon,
			imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
		},
		{
			size: 'medium',
			name: 'Muriicle',
			category: category,
			price: '49',
			imgSrc: muriicleCollab,
			imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
		}
	];
</script>

<section id="deskmats" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>deskmats</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		{#each DeskmatProducts as Product}
			<ProductCard
				size={Product.size}
				name={Product.name}
				category={Product.category}
				price={Product.price}
				imgSrc={Product.imgSrc}
				imgAlt={Product.imgAlt}
				greenFlairs={Product.greenFlairs}
				orangeFlairs={Product.orangeFlairs}
				grayFlairs={Product.grayFlairs}
				blueFlairs={Product.blueFlairs}
				pinkFlairs={Product.pinkFlairs}
			/>
		{/each}
	</div>
</section>
