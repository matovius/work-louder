<script lang="ts">
	import Marquee from '$lib/components/Marquee.svelte';
	import { Asterisk } from 'lucide-svelte';

	import nomadForHeroSection from '$lib/images/nomad-for-hero-section.png';
	import nomadColorways from '$lib/images/nomad-colorways.png';
	import creatorMicro from '$lib/images/creator-micro.png';
	import creatorBoard from '$lib/images/creator-board.png';
	import creatorBoardXL from '$lib/images/creator-board-XL.png';
	import floatingKeycaps from '$lib/images/floating-keycaps.png';
	import clothingModel from '$lib/images/clothing-model.png';
</script>

<svelte:head>
	<title>work_louder - focus. work. rest.</title>
</svelte:head>

<section id="hero" class="w-full flex justify-center items-center">
	<div
		class="isolate w-full h-480 flex flex-col justify-center items-center gap-48 bg-black rounded overflow-hidden relative"
	>
		<div class="absolute inset-0 w-full h-full -z-10 opacity-60 bg-neutral-800">
			<img
				src={nomadForHeroSection}
				alt="a full shot of the nomad [e]"
				class="w-full h-full object-cover"
			/>
		</div>

		<h1 class="h1 text-center relative">
			<span>focus.</span>
			<br />
			<span>work.</span>
			<br />
			<span>rest.</span>

			<div class="p-4 bg-primary-500 text-black rounded-full absolute top-0 right-0">
				<Asterisk />
			</div>
		</h1>
		<a
			href="/store/nomad-e"
			class="button text-neutral-950 px-24 py-8 bg-primary-500 hover:bg-primary-600 focus-visible:outline-white"
		>
			<span>discover the nomad</span>
		</a>
		<div
			id="asterisk"
			class="absolute bottom-0 tablet-lg:left-0 w-full tablet-lg:w-240 tablet-lg:max-w-[15rem] flex flex-row justify-center items-center tablet-lg:flex-col tablet-lg:justify-start tablet-lg:items-start gap-12 p-24"
		>
			<div class="w-fit h-fit p-4 bg-primary-500 text-black rounded-full">
				<Asterisk />
			</div>
			<div class="w-full">
				<span class="paragraph">our tools help you focus in ways you've only dreamt of.</span>
			</div>
		</div>
	</div>
</section>

<Marquee animationDuration="slow">
	<span>know productivity, efficiency, passion, and creativity with no limits.</span>
</Marquee>

<section
	id="featured-products"
	class="w-full flex justify-start items-center flex-wrap gap-24 py-24"
>
	<div
		id="main-product-card"
		class="w-full flex flex-col tablet-sm:flex-row justify-center items-center gap-24"
	>
		<div class="w-full max-w-[53.5rem] h-360 bg-neutral-800 rounded overflow-hidden">
			<img
				src={nomadColorways}
				alt="a set of nomad [e] colorways: atomic, atomic purple, charcoal, and chalk"
				class="w-full h-full object-cover"
			/>
		</div>
		<div
			class="text-black w-full tablet-sm:max-w-[22.5rem] h-360 flex flex-col gap-24 p-24 rounded overflow-hidden bg-lemon-lime"
		>
			<div class="w-full flex flex-col gap-12">
				<h3 class="h3">nomad [e]</h3>
				<span class="h5 text-black/60">keyboard</span>
				<span class="small">[e] for everyone</span>
			</div>
			<div class="w-full">
				<p class="paragraph">
					the first keyboard to get you in the zone, and keep you there. currently on pre-order, you
					can expect to get the nomad [e] by Q1, 2024.
				</p>
			</div>
			<div class="w-full">
				<a
					href="/store/nomad-e"
					class="button text-neutral-950 px-24 py-8 bg-neutral-50 hover:bg-neutral-200 focus-visible:outline-black"
				>
					<span>explore</span>
				</a>
			</div>
		</div>
	</div>
	<div
		id="small-product-card"
		class="w-full tablet-sm:max-w-[calc(50%-12px)] tablet-lg:max-w-none laptop:w-[calc(50%-12px)] flex flex-col tablet-lg:flex-row-reverse justify-center items-center gap-24"
	>
		<div class="w-full laptop:max-w-[17.5rem] h-360 bg-white/10 rounded overflow-hidden">
			<div class="w-full h-full">
				<img
					src={creatorMicro}
					alt="the creator micro with twelve buttons and two dials one on its side and one standing up"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
		<div
			class="text-black w-full tablet-lg:max-w-[19rem] h-360 flex flex-col gap-24 p-24 rounded overflow-hidden bg-white"
		>
			<div class="w-full flex flex-col gap-12">
				<h3 class="h3">creator micro</h3>
				<span class="h5 text-black/60">keypad</span>
			</div>
			<div class="w-full">
				<p class="paragraph">
					everything you love and want from the creator board, and a little more, distilled into a
					compact device.
				</p>
			</div>
			<div class="w-full">
				<a
					href="#"
					class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800 focus-visible:outline-black"
				>
					<span>explore</span>
				</a>
			</div>
		</div>
	</div>
	<div
		id="small-product-card"
		class="w-full tablet-sm:max-w-[calc(50%-12px)] tablet-lg:max-w-none laptop:w-[calc(50%-12px)] flex flex-col tablet-lg:flex-row justify-center items-center gap-24"
	>
		<div class="w-full laptop:max-w-[17.5rem] h-360 bg-white/10 rounded overflow-hidden">
			<div class="w-full h-full">
				<img
					src={creatorBoard}
					alt="the creator board with its modular design consisting of a work keeb, a loop pad, and a nano pad"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
		<div
			class="text-black w-full tablet-lg:max-w-[19rem] h-360 flex flex-col gap-24 p-24 rounded overflow-hidden bg-white"
		>
			<div class="w-full flex flex-col gap-12">
				<h3 class="h3">creator board</h3>
				<span class="h5 text-black/60">keyboard</span>
			</div>
			<div class="w-full">
				<p class="paragraph">
					the first modular keyboard for digital creators, designed for those who defy limits and
					change the world.
				</p>
			</div>
			<div class="w-full">
				<a
					href="#"
					class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800 focus-visible:outline-black"
				>
					<span>explore</span>
				</a>
			</div>
		</div>
	</div>
	<div
		id="wide-product-card"
		class="w-full flex flex-col-reverse tablet-sm:flex-row justify-center items-center gap-24"
	>
		<div
			class="text-black w-full tablet-lg:max-w-[22.5rem] h-360 flex flex-col gap-24 p-24 rounded overflow-hidden bg-white"
		>
			<div class="w-full flex flex-col gap-12">
				<h3 class="h3">creator board XL</h3>
				<span class="h5 text-black/60">keyboard</span>
			</div>
			<div class="w-full">
				<p class="paragraph">sometimes bigger is better. expand your creativity coming Q1, 2024.</p>
			</div>
			<div class="w-full">
				<a
					href="#"
					class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800 focus-visible:outline-black"
				>
					<span>explore</span>
				</a>
			</div>
		</div>
		<div class="w-full h-360 bg-white/10 rounded overflow-hidden">
			<div class="w-full h-full">
				<img
					src={creatorBoardXL}
					alt="the creator board XL is similar to the creator board, but with an expanded design with a numpad and an extra space "
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
	</div>
</section>

<Marquee animationDuration="slow">
	<span>all work & <s>no</s> play - work_louder, inc.</span>
</Marquee>

<section id="extra-ctas" class="w-full flex justify-start items-center flex-wrap gap-24 py-24">
	<div
		id="storefront-cta"
		class="isolate w-full tablet-sm:max-w-[calc(50%-12px)] h-360 flex flex-col justify-center items-center gap-24 p-24 rounded overflow-hidden bg-black relative"
	>
		<div class="absolute inset-0 -z-10 w-full h-full opacity-40">
			<img
				src={floatingKeycaps}
				alt="a bunch of beautiful keycaps floating in mid-air"
				class="w-full h-full object-cover"
			/>
		</div>

		<h2 class="h2 text-center">our products</h2>
		<p class="paragraph text-center">
			for all the keyboards, deskmats, keycaps, modules, collabs, and other merchandise.
		</p>
		<a
			href="/store"
			class="button text-neutral-950 px-24 py-8 bg-primary-500 hover:bg-primary-600 focus-visible:outline-white"
		>
			<span>head to the store</span>
		</a>
	</div>

	<div
		id="wrkshop-cta"
		class="isolate w-full tablet-sm:max-w-[calc(50%-12px)] h-360 flex flex-col justify-center items-center gap-24 p-24 rounded overflow-hidden bg-black relative"
	>
		<div class="absolute inset-0 -z-10 w-full h-full opacity-40">
			<img
				src={clothingModel}
				alt="a beautiful feminine model wearing some beautiful leisure-wear"
				class="w-full h-full object-cover"
			/>
		</div>

		<h2 class="h2 text-center">wrk.shop</h2>
		<p class="paragraph text-center">where your renders become reality</p>
		<button class="button text-neutral-950 px-24 py-8 bg-neutral-50" disabled>
			<span>coming soon</span>
		</button>
	</div>
</section>
