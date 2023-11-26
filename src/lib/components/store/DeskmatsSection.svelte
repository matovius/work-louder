<script lang="ts">
	import Marquee from '$lib/components/Marquee.svelte';

	import ProductCard from '../product-card/ProductCard.svelte';
	import { Products } from '../product-card/ProductData';
</script>

<section id="deskmats" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<Marquee background="transparent">
		<span>deskmats</span>
	</Marquee>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		{#each Products as Product}
			{#if Product.category === 'deskmat'}
				<ProductCard
					productID={Product.productID}
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
			{/if}
		{/each}
	</div>
</section>
