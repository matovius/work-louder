<script lang="ts">
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import type { Product } from '../product-card/ProductData';
	import ProductCard from '../product-card/ProductCard.svelte';

	import stickers from '$lib/images/stickers.png';

	const category = 'merchandise';

	let MerchandiseProducts: Product[] = [
		{
			size: 'large',
			name: 'stickers',
			category: category,
			price: '9.99',
			imgSrc: stickers,
			imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
		}
	];
</script>

<section id="merchandise" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>merchandise</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		{#each MerchandiseProducts as Product}
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
