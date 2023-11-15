<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import nomadProductImage from '$lib/images/nomad-product-image.png';
	import creatorBoard from '$lib/images/creator-board.png';
	import creatorBoardXL from '$lib/images/creator-board-XL.png';
	import creatorMicro from '$lib/images/creator-micro.png';
</script>

<section id="keyboards" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>keyboards</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		<a
			href="/"
			id="product-card__wide"
			class="w-full min-w-full flex flex-col justify-center items-center gap-24 outline outline-2 outline-transparent outline-offset-4 focus-visible:outline-current rounded"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${nomadProductImage});
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					`}
			>
				<div id="flair-wrapper" class="absolute top-0 left-0 p-24">
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
					<h3 class="h3">nomad [e]</h3>
					<span class="h5 text-white/60">keyboard</span>
				</div>
				<span class="h3 text-white/60">$349</span>
			</div>
		</a>

		<div
			id="product-card__medium"
			class="w-full tablet-lg:max-w-[calc(50%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${creatorBoard});
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
					<h3 class="h3">creator board</h3>
					<span class="h5 text-white/60">keyboard</span>
				</div>
				<span class="h3 text-white/60">$409</span>
			</div>
		</div>

		<div
			id="product-card__medium"
			class="w-full tablet-lg:max-w-[calc(50%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${creatorMicro});
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
					<h3 class="h3">creator micro</h3>
					<span class="h5 text-white/60">keypad</span>
				</div>
				<span class="h3 text-white/60">$129</span>
			</div>
		</div>

		<div
			id="product-card__large"
			class="w-full min-w-full flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${creatorBoardXL});
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					`}
			>
				<div id="flair-wrapper" class="absolute top-0 left-0 p-24">
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
					<h3 class="h3">creator board XL</h3>
					<span class="h5 text-white/60">keyboard</span>
				</div>
				<span class="h3 text-white/60">$559</span>
			</div>
		</div>
	</div>
</section>
