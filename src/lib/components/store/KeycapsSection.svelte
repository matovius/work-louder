<script lang="ts">
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import type { Product } from '../product-card/ProductData';
	import ProductCard from '../product-card/ProductCard.svelte';

	import wrkBlind from '$lib/images/wrk-blind.png';
	import wrkCartridge from '$lib/images/wrk-cartridge.png';
	import wrkDaily from '$lib/images/wrk-daily.png';
	import wrkDial from '$lib/images/wrk-dial.png';
	import wrkIcon from '$lib/images/wrk-icon.png';
	import wrkLegend from '$lib/images/wrk-legend.png';
	import wrkPure from '$lib/images/wrk-pure.png';

	const category = 'keycaps';

	let KeycapsProducts: Product[] = [
		{
			size: 'large',
			name: 'wrk. cartridge',
			category: category,
			price: '99',
			imgSrc: wrkCartridge,
			imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
		},
		{
			size: 'medium',
			name: 'wrk. icon',
			category: category,
			price: '54',
			imgSrc: wrkIcon,
			imgAlt: 'the loop pad has three dials and nine buttons'
		},
		{
			size: 'medium',
			name: 'wrk. pure',
			category: category,
			price: '54',
			imgSrc: wrkPure,
			imgAlt: 'the nano pad has one dials and two programmable buttons'
		},
		{
			size: 'small',
			name: 'wrk. blind',
			category: category,
			price: '44',
			imgSrc: wrkBlind,
			imgAlt:
				'the num pad has buttons for all the ten numbers, and extras for mathematical operations on the right and bottom'
		},
		{
			size: 'small',
			name: 'wrk. legend',
			category: category,
			price: '54',
			imgSrc: wrkLegend,
			imgAlt:
				"the micro pcb has twelve programmable buttons and two dials, one on it's side and the other standing up"
		},
		{
			size: 'small',
			name: 'wrk. daily',
			category: category,
			price: '54',
			imgSrc: wrkDaily,
			imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base'
		},
		{
			size: 'small',
			name: 'wrk. dial',
			category: category,
			price: '4.99',
			imgSrc: wrkDial,
			imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base'
		}
	];
</script>

<section id="keycaps" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>keycaps</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		{#each KeycapsProducts as Product}
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
