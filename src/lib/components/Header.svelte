<script lang="ts">
	import { page } from '$app/stores';

	import WlLogoFull from './icons/WLLogoFull.svelte';
	import WlLogoShort from './icons/WLLogoShort.svelte';
</script>

<header class="w-full flex justify-center items-center p-24 sticky top-0 z-10">
	<div class="container flex flex-row justify-between items-center">
		<div class="">
			{#if $page.url.pathname === '/'}
				<div class="h-36 hidden tablet-lg:inline-block text-lemon-lime">
					<WlLogoFull />
				</div>
				<div class="h-24 mob-lg:h-36 inline-block tablet-lg:hidden text-lemon-lime">
					<WlLogoShort />
				</div>
			{:else}
				<a
					href="/"
					class="opacity-100 hover:opacity-60"
					aria-label="the work_louder logo. click to go back to the homepage."
				>
					<div class="h-36 hidden tablet-lg:inline-block">
						<WlLogoFull />
					</div>
					<div class="h-36 inline-block tablet-lg:hidden">
						<WlLogoShort />
					</div>
				</a>
			{/if}
		</div>
		<nav class="p-4 bg-white/60 backdrop-blur rounded-full">
			<ul class="flex-row justify-center items-center gap-4 hidden tablet-lg:flex">
				<li>
					<button class="button solid-white">store</button>
				</li>
				<li>
					<button class="button ghost-black">setup</button>
				</li>
				<li>
					<button class="button ghost-black">about</button>
				</li>
				<li>
					<button class="button ghost-black">updates</button>
				</li>
				<li>
					<button class="button ghost-black">cart</button>
				</li>
			</ul>
			<ul class="flex flex-row justify-center items-center gap-4 tablet-lg:hidden">
				<li>
					<button class="button ghost-black">cart</button>
				</li>
				<li>
					<button class="button ghost-black">menu</button>
				</li>
			</ul>
		</nav>
	</div>
</header>
