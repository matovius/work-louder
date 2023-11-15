<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import stickers from '$lib/images/stickers.png';
</script>

<section id="merchandise" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>merchandise</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		<div
			id="product-card__large"
			class="w-full min-w-full flex flex-col justify-center items-center gap-24 outline outline-2 outline-transparent outline-offset-4 focus-visible:outline-current rounded"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${stickers});
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					`}
			>
				<div id="flair-wrapper" class="absolute top-0 left-0 p-24 hidden">
					<div id="flair-chip" class="flair-chip blue-chip">
						<span>pre-order only</span>
					</div>
				</div>
				<div id="cart-cta-wrapper" class="absolute bottom-0 right-0 p-24">
					<Button as="button" variant="solid-primary">
						<span>add to cart</span>
					</Button>
				</div>
			</div>
			<div class="w-full flex flex-row justify-between items-center">
				<div class="w-full flex flex-col gap-12">
					<h3 class="h3">stickers</h3>
					<span class="h5 text-white/60">merchandise</span>
				</div>
				<span class="h3 text-white/60">$9.99</span>
			</div>
		</div>
	</div>
</section>
