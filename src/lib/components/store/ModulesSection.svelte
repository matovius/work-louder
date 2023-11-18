<script lang="ts">
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import type { Product } from '../product-card/ProductData';
	import ProductCard from '../product-card/ProductCard.svelte';

	import xlBase from '$lib/images/xl-base.png';
	import loopPad from '$lib/images/loop-pad.png';
	import nanoPad from '$lib/images/nano-pad.png';
	import numPad from '$lib/images/num-pad.png';
	import microPCB from '$lib/images/micro-pcb.png';
	import microBase from '$lib/images/micro-base.png';

	const category = 'module';

	let ModuleProducts: Product[] = [
		{
			size: 'large',
			name: 'XL base',
			category: category,
			price: '79',
			imgSrc: xlBase,
			imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
		},
		{
			size: 'medium',
			name: 'loop pad',
			category: category,
			price: '99',
			imgSrc: loopPad,
			imgAlt: 'the loop pad has three dials and nine buttons'
		},
		{
			size: 'medium',
			name: 'nano pad',
			category: category,
			price: '49.99',
			imgSrc: nanoPad,
			imgAlt: 'the nano pad has one dials and two programmable buttons'
		},
		{
			size: 'small',
			name: 'num pad',
			category: category,
			price: '89',
			imgSrc: numPad,
			imgAlt:
				'the num pad has buttons for all the ten numbers, and extras for mathematical operations on the right and bottom',
			blueFlairs: ['pre-order only']
		},
		{
			size: 'small',
			name: 'micro pcb',
			category: category,
			price: '59',
			imgSrc: microPCB,
			imgAlt:
				"the micro pcb has twelve programmable buttons and two dials, one on it's side and the other standing up",
			orangeFlairs: ['out of stock']
		},
		{
			size: 'small',
			name: 'micro base',
			category: category,
			price: '59',
			imgSrc: microBase,
			imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base'
		}
	];
</script>

<section id="modules" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>modules</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		{#each ModuleProducts as Product}
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
