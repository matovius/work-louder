<script lang="ts">
	import { page } from '$app/stores';
	import Button from './Button.svelte';

	import WlLogoFull from './icons/WLLogoFull.svelte';
	import WlLogoShort from './icons/WLLogoShort.svelte';

	interface NavLink {
		label: string;
		url: string;
	}

	const NavLinks: NavLink[] = [
		{
			label: 'store',
			url: '/store'
		},
		{
			label: 'setup',
			url: '/setup'
		},
		{
			label: 'about',
			url: '/about'
		},
		{
			label: 'updates',
			url: '/updates'
		}
	];
</script>

<header class="w-full flex justify-center items-center p-24 sticky top-0 z-10">
	<div class="container flex flex-row justify-between items-center">
		<div
			class="flex justify-center items-center p-8 bg-black/80 backdrop-blur rounded-12 border border-white/10"
		>
			{#if $page.url.pathname === '/'}
				<div class="h-24 hidden tablet-lg:inline-block text-lemon-lime">
					<WlLogoFull />
				</div>

				<div class="h-24 inline-block tablet-lg:hidden text-lemon-lime">
					<WlLogoShort />
				</div>
			{:else}
				<a
					href="/"
					class="flex justify-center items-center opacity-100 hover:opacity-60 focus:opacity-60 rounded-4 outline outline-2 outline-offset-4 outline-transparent focus-visible:outline-lemon-lime"
					aria-label="the work_louder logo. click to go back to the homepage."
				>
					<div class="h-24 hidden tablet-lg:inline-block">
						<WlLogoFull />
					</div>

					<div class="h-24 inline-block tablet-lg:hidden">
						<WlLogoShort />
					</div>
				</a>
			{/if}
		</div>
		<nav class="p-4 bg-white/60 backdrop-blur rounded-full border border-black/10">
			<ul class="flex-row justify-center items-center gap-4 hidden tablet-lg:flex">
				{#each NavLinks as item}
					<li>
						{#if $page.url.pathname.includes(item.url)}
							<Button as="button" variant="solid-white">
								<span>{item.label}</span>
							</Button>
						{:else}
							<Button as="link" variant="ghost-black" url={item.url}>
								<span>{item.label}</span>
							</Button>
						{/if}
					</li>
				{/each}

				<li>
					<Button as="button" variant="ghost-black">
						<span>cart</span>
					</Button>
				</li>
			</ul>
			<ul class="flex flex-row justify-center items-center gap-4 tablet-lg:hidden">
				<li>
					<Button as="button" variant="ghost-black">
						<span>cart</span>
					</Button>
				</li>

				<li>
					<Button as="button" variant="ghost-black">
						<span>menu</span>
					</Button>
				</li>
			</ul>
		</nav>
	</div>
</header>
