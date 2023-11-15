<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import xlBase from '$lib/images/xl-base.png';
	import loopPad from '$lib/images/loop-pad.png';
	import nanoPad from '$lib/images/nano-pad.png';
	import numPad from '$lib/images/num-pad.png';
	import microPCB from '$lib/images/micro-pcb.png';
	import microBase from '$lib/images/micro-base.png';
</script>

<section id="modules" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>modules</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		<div
			id="product-card__large"
			class="w-full min-w-full flex flex-col justify-center items-center gap-24 outline outline-2 outline-transparent outline-offset-4 focus-visible:outline-current rounded"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${xlBase});
					background-position: 50% 45%;
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
					<h3 class="h3">XL base</h3>
					<span class="h5 text-white/60">module</span>
				</div>
				<span class="h3 text-white/60">$79</span>
			</div>
		</div>

		<div
			id="product-card__medium"
			class="w-full tablet-lg:max-w-[calc(50%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${loopPad});
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
					<h3 class="h3">loop pad</h3>
					<span class="h5 text-white/60">module</span>
				</div>
				<span class="h3 text-white/60">$99</span>
			</div>
		</div>

		<div
			id="product-card__medium"
			class="w-full tablet-lg:max-w-[calc(50%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${nanoPad});
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
					<h3 class="h3">nano pad</h3>
					<span class="h5 text-white/60">module</span>
				</div>
				<span class="h3 text-white/60">$49.99</span>
			</div>
		</div>

		<div
			id="product-card__small"
			class="w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${numPad});
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
					<h3 class="h3">num pad</h3>
					<span class="h5 text-white/60">module</span>
				</div>
				<span class="h3 text-white/60">$89</span>
			</div>
		</div>

		<div
			id="product-card__small"
			class="w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${microPCB});
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					`}
			>
				<div id="flair-wrapper" class="absolute top-0 left-0 p-24">
					<div id="flair-chip" class="flair-chip orange-chip">
						<span>out of stock</span>
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
					<h3 class="h3">micro pcb</h3>
					<span class="h5 text-white/60">module</span>
				</div>
				<span class="h3 text-white/60">$99</span>
			</div>
		</div>

		<div
			id="product-card__small"
			class="w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${microBase});
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
					<h3 class="h3">micro base</h3>
					<span class="h5 text-white/60">module</span>
				</div>
				<span class="h3 text-white/60">$59</span>
			</div>
		</div>
	</div>
</section>
