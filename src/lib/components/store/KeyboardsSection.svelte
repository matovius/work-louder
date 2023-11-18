<script lang="ts">
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import type { Product } from '../product-card/ProductData';
	import ProductCard from '../product-card/ProductCard.svelte';

	import nomadProductImage from '$lib/images/nomad-product-image.png';
	import creatorBoard from '$lib/images/creator-board.png';
	import creatorBoardXL from '$lib/images/creator-board-XL.png';
	import creatorMicro from '$lib/images/creator-micro.png';

	const category = 'keyboard';

	let KeyboardProducts: Product[] = [
		{
			size: 'large',
			name: 'nomad [e]',
			category: category,
			price: '349',
			imgSrc: nomadProductImage,
			imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it',
			blueFlairs: ['pre-order only']
		},
		{
			size: 'medium',
			name: 'creator board',
			category: category,
			price: '409',
			imgSrc: creatorBoard,
			imgAlt: 'the loop pad has three dials and nine buttons'
		},
		{
			size: 'medium',
			name: 'creator micro',
			category: category,
			price: '129',
			imgSrc: creatorMicro,
			imgAlt: 'the nano pad has one dials and two programmable buttons'
		},
		{
			size: 'large',
			name: 'creator board XL',
			category: category,
			price: '559',
			imgSrc: creatorBoardXL,
			imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base',
			blueFlairs: ['pre-order only']
		}
	];
</script>

<section id="keyboards" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>keyboards</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		{#each KeyboardProducts as Product}
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
