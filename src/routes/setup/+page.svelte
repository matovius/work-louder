<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import nomadPerspective from '$lib/images/nomad-perspective.png';
</script>

<svelte:head>
	<title>setup - work_louder, inc.</title>
</svelte:head>

<section id="hero" class="text-black w-full flex justify-center items-center">
	<div
		class="w-full py-96 flex flex-col justify-center items-center gap-48 bg-white rounded overflow-hidden relative"
	>
		<h1 class="h1 text-center relative">setup</h1>
	</div>
</section>

<section id="intro" class="w-full flex flex-col justify-center items-center gap-48 py-24">
	<div
		id="headline"
		class="w-full max-w-[52.5rem] flex flex-col justify-center items-center gap-24"
	>
		<h2 class="h2 text-center">the creator board and its modules work straight out of the box.</h2>
		<h3 class="h3 text-white/60 text-center">
			but let's be real: you don't want "out of the box", you want full creative control over every
			key and dial. so follow the steps below to unlock your board's full potential.
		</h3>
	</div>

	<ul class="w-full max-w-[52.5rem] flex flex-row justify-center items-start flex-wrap gap-48">
		<li class="w-full tablet-sm:max-w-[calc(50%-24px)]">
			<div id="step-one" class="w-full flex flex-col justify-start items-start gap-24">
				<div class="flair-chip gray-chip">
					<span>01</span>
				</div>
				<div class="w-full flex flex-col gap-12">
					<h5 class="h5">open the VIA configurator</h5>
					<p class="paragraph">
						VIA is the software that will enable you to create macros and remap every key, dial, and
						layer. it's available for mac, pc, and linux.
					</p>
				</div>
				<div>
					<Button as="button" variant="solid-primary">
						<span>get VIA now</span>
					</Button>
				</div>
			</div>
		</li>

		<li class="w-full tablet-sm:max-w-[calc(50%-24px)]">
			<div id="step-two" class="w-full flex flex-col justify-start items-start gap-24">
				<div class="flair-chip gray-chip">
					<span>02</span>
				</div>
				<div class="w-full flex flex-col gap-12">
					<h5 class="h5">customize your layout</h5>
					<p class="paragraph">
						watch this one-minute overview of VIA's feature set to help you learn the basics.
					</p>
				</div>
				<div>
					<Button as="button" variant="solid-primary">
						<span>watch video</span>
					</Button>
				</div>
			</div>
		</li>
	</ul>
</section>

<section id="walkthrough" class="w-full flex flex-col justify-center items-center gap-48 py-24">
	<div
		id="headline"
		class="w-full max-w-[52.5rem] flex flex-col justify-center items-center gap-24"
	>
		<h2 class="h2 text-center">master the basics of VIA in 4 short videos.</h2>
		<h3 class="h3 text-white/60 text-center">
			unlock the power of macros, layers, rgb, and pre-made keymaps by other creators.
		</h3>
	</div>

	<ul class="w-full max-w-[52.5rem] flex flex-row justify-center items-start flex-wrap gap-48">
		<li class="w-full tablet-sm:max-w-[calc(50%-24px)]">
			<div id="step-one" class="w-full flex flex-col justify-start items-start gap-24">
				<div class="flair-chip gray-chip">
					<span>01</span>
				</div>
				<div class="w-full flex flex-col gap-12">
					<h5 class="h5">getting to know layer keys</h5>
					<p class="paragraph">
						using layers will give you access to three times the number of keys you physically have
						in front of you. we suggest using each layer to hold your shortcuts/macros for your
						different apps/programs.
					</p>
				</div>
				<div>
					<Button as="button" variant="solid-primary">
						<span>watch video</span>
					</Button>
				</div>
			</div>
		</li>

		<li class="w-full tablet-sm:max-w-[calc(50%-24px)]">
			<div id="step-two" class="w-full flex flex-col justify-start items-start gap-24">
				<div class="flair-chip gray-chip">
					<span>02</span>
				</div>
				<div class="w-full flex flex-col gap-12">
					<h5 class="h5">macros & dials</h5>
					<p class="paragraph">
						say goodbye to having to use two hands, and multiple buttons to activate a shortcut.
						macros will enable you to execute multiple keystrokes with one single key.
					</p>
				</div>
				<div>
					<Button as="button" variant="solid-primary">
						<span>watch video</span>
					</Button>
				</div>
			</div>
		</li>

		<li class="w-full tablet-sm:max-w-[calc(50%-24px)]">
			<div id="step-three" class="w-full flex flex-col justify-start items-start gap-24">
				<div class="flair-chip gray-chip">
					<span>03</span>
				</div>
				<div class="w-full flex flex-col gap-12">
					<h5 class="h5">controlling rgb colors, brightness & patterns</h5>
					<p class="paragraph">
						quickly browse different colors and patterns to give your setup the perfect vibe.
					</p>
				</div>
				<div>
					<Button as="button" variant="solid-primary">
						<span>watch video</span>
					</Button>
				</div>
			</div>
		</li>

		<li class="w-full tablet-sm:max-w-[calc(50%-24px)]">
			<div id="step-four" class="w-full flex flex-col justify-start items-start gap-24">
				<div class="flair-chip gray-chip">
					<span>04</span>
				</div>
				<div class="w-full flex flex-col gap-12">
					<h5 class="h5">saving & loading new keymaps</h5>
					<p class="paragraph">
						download experienced creators' keymaps to gain speed and efficiency in your workflow, by
						emulating where they have their macros/shortcuts positioned.
					</p>
				</div>
				<div>
					<Button as="button" variant="solid-primary">
						<span>watch video</span>
					</Button>
				</div>
			</div>
		</li>
	</ul>
</section>

<section
	id="extra-ctas"
	class="w-full flex flex-row flex-wrap justify-center items-center gap-24 py-24"
>
	<div
		id="keyboard-practice"
		class="w-full tablet-lg:max-w-[calc(50%-12px)] tablet-lg:h-360 flex flex-col justify-center items-center gap-24 p-24 rounded bg-white/10"
	>
		<h3 class="h3 text-center">want to type faster?</h3>
		<p class="paragraph text-center">
			visit keybr.com to practice with your creator board. remember to always place your index
			fingers on the F and J keys and use the finger closest to the letter you want to press. the
			goal is to move your hands as little as possible.
		</p>
		<Button as="button" variant="solid-white">head to keybr</Button>
	</div>

	<div
		id="discord-cta"
		class="isolate w-full tablet-lg:max-w-[calc(50%-12px)] tablet-lg:h-360 flex flex-col justify-center items-center gap-24 p-24 bg-black rounded overflow-hidden relative"
	>
		<div class="absolute inset-0 w-full h-full -z-10 opacity-40">
			<img
				src={nomadPerspective}
				alt="a shot of the nomad [e] from the top right corner"
				class="w-full h-full object-cover"
			/>
		</div>

		<h3 class="h3 text-center">the power of our community</h3>
		<p class="paragraph text-center">
			join our passionate community of creators to get build help, project ideas, and be part of the
			development of new modules for your creator board.
		</p>
		<Button as="button" variant="solid-white">join the discord</Button>
	</div>
</section>
