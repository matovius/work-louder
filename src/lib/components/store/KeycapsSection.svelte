<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InfiniteCarousel from '$lib/components/InfiniteCarousel.svelte';

	import wrkBlind from '$lib/images/wrk-blind.png';
	import wrkCartridge from '$lib/images/wrk-cartridge.png';
	import wrkDaily from '$lib/images/wrk-daily.png';
	import wrkDial from '$lib/images/wrk-dial.png';
	import wrkIcon from '$lib/images/wrk-icon.png';
	import wrkLegend from '$lib/images/wrk-legend.png';
	import wrkPure from '$lib/images/wrk-pure.png';
</script>

<section id="keycaps" class="w-full flex flex-col justify-center items-center gap-24 py-24">
	<InfiniteCarousel background="transparent">
		<span>keycaps</span>
	</InfiniteCarousel>

	<div class="w-full flex flex-row flex-wrap justify-start items-start gap-24">
		<div
			id="product-card__large"
			class="w-full min-w-full flex flex-col justify-center items-center gap-24 outline outline-2 outline-transparent outline-offset-4 focus-visible:outline-current rounded"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${wrkCartridge});
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
					<h3 class="h3">wrk. cartridge</h3>
					<span class="h5 text-white/60">keycaps</span>
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
					background-image: url(${wrkIcon});
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
					<h3 class="h3">wrk. icon</h3>
					<span class="h5 text-white/60">keycaps</span>
				</div>
				<span class="h3 text-white/60">$54</span>
			</div>
		</div>

		<div
			id="product-card__medium"
			class="w-full tablet-lg:max-w-[calc(50%-12px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${wrkPure});
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
					<h3 class="h3">wrk. pure</h3>
					<span class="h5 text-white/60">keycaps</span>
				</div>
				<span class="h3 text-white/60">$54</span>
			</div>
		</div>

		<div
			id="product-card__small"
			class="w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-18px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${wrkBlind});
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
					<h3 class="h3">wrk. blind</h3>
					<span class="h5 text-white/60">keycaps</span>
				</div>
				<span class="h3 text-white/60">$44</span>
			</div>
		</div>

		<div
			id="product-card__small"
			class="w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-18px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${wrkLegend});
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					`}
			>
				<div id="flair-wrapper" class="absolute top-0 left-0 p-24 hidden">
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
					<h3 class="h3">wrk. legend</h3>
					<span class="h5 text-white/60">keycaps</span>
				</div>
				<span class="h3 text-white/60">$54</span>
			</div>
		</div>

		<div
			id="product-card__small"
			class="w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-18px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${wrkDaily});
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
					<h3 class="h3">wrk. daily</h3>
					<span class="h5 text-white/60">keycaps</span>
				</div>
				<span class="h3 text-white/60">$54</span>
			</div>
		</div>

		<div
			id="product-card__small"
			class="w-full tablet-sm:max-w-[calc(50%-12px)] laptop:max-w-[calc(25%-18px)] flex flex-col justify-center items-center gap-24"
		>
			<div
				class="w-full h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative"
				style={`
					background-image: url(${wrkDial});
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
					<h3 class="h3">wrk. dial</h3>
					<span class="h5 text-white/60">keycaps</span>
				</div>
				<span class="h3 text-white/60">$4.99</span>
			</div>
		</div>
	</div>
</section>
