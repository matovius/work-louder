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

	let NavModal: HTMLDialogElement;
	let navModalOpen: boolean = false;

	let CartModal: HTMLDialogElement;
	let cartModalOpen: boolean = false;

	function toggleNavModal() {
		if (!navModalOpen) {
			NavModal.showModal();
			document.body.style.overflow = 'hidden';
			navModalOpen = true;
		} else {
			NavModal.close();
			document.body.style.removeProperty('overflow');
			navModalOpen = false;
		}
	}

	function toggleCartModal() {
		if (navModalOpen) {
			NavModal.close();
			navModalOpen = false;
		}

		if (!cartModalOpen) {
			CartModal.showModal();
			document.body.style.overflow = 'hidden';
			cartModalOpen = true;
		} else {
			CartModal.close();
			document.body.style.removeProperty('overflow');
			cartModalOpen = false;
		}
	}
</script>

<header class="w-full flex justify-center items-center p-24 sticky top-0 z-10">
	<div class="container flex flex-row justify-between items-center">
		<div
			class="flex justify-center items-center p-8 bg-black/80 backdrop-blur rounded-full border border-white/10"
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
					<Button as="button" variant="ghost-black" on:click={toggleCartModal}>
						<span>cart</span>
					</Button>
				</li>
			</ul>
			<ul class="flex flex-row justify-center items-center gap-4 tablet-lg:hidden">
				<li>
					<Button as="button" variant="ghost-black" on:click={toggleCartModal}>
						<span>cart</span>
					</Button>
				</li>

				<li>
					<Button as="button" variant="ghost-black" on:click={toggleNavModal}>
						<span>menu</span>
					</Button>
				</li>
			</ul>
		</nav>
	</div>
</header>

<dialog
	class="isolate backdrop:bg-black/60 backdrop:backdrop-blur bg-transparent m-0 overflow-visible"
	bind:this={NavModal}
>
	<div class="fixed w-screen h-[100dvh] flex justify-center items-center mob-lg:p-24">
		<div
			class="w-full max-w-[30rem] h-full tablet-sm:max-h-[80dvh] flex flex-col mob-lg:rounded bg-white overflow-hidden"
		>
			<header class="w-full flex justify-between items-center p-24">
				<div>
					<h5 class="h5">menu</h5>
				</div>
				<div>
					<Button as="button" variant="ghost-black" on:click={toggleNavModal}>
						<span>close</span>
					</Button>
				</div>
			</header>
			<main class="w-full p-24 overflow-x-hidden overflow-y-auto">
				<ul class="flex flex-col justify-center items-center gap-4">
					{#each NavLinks as item}
						<li>
							{#if $page.url.pathname.includes(item.url)}
								<Button as="button" variant="solid-white">
									<span>{item.label}</span>
								</Button>
							{:else}
								<Button as="link" variant="ghost-black" url={item.url} on:click={toggleNavModal}>
									<span>{item.label}</span>
								</Button>
							{/if}
						</li>
					{/each}

					<li>
						<Button as="button" variant="ghost-black" on:click={toggleCartModal}>
							<span>cart</span>
						</Button>
					</li>
				</ul>
			</main>
		</div>
	</div>
</dialog>

<dialog
	class="isolate backdrop:bg-black/60 backdrop:backdrop-blur bg-transparent m-0 overflow-visible"
	bind:this={CartModal}
>
	<div class="fixed w-screen h-[100dvh] flex justify-center items-center mob-lg:p-24">
		<div
			class="w-full max-w-[30rem] h-full tablet-sm:max-h-[80dvh] flex flex-col mob-lg:rounded bg-white overflow-hidden"
		>
			<header class="w-full flex justify-between items-center p-24">
				<div>
					<h5 class="h5">your cart</h5>
				</div>
				<div>
					<Button as="button" variant="ghost-black" on:click={toggleCartModal}>
						<span>close</span>
					</Button>
				</div>
			</header>

			<main class="w-full h-full p-24 overflow-x-hidden overflow-y-auto">
				<div class="w-full h-full flex justify-center items-center">
					<span class="h4 text-black/40">your cart is empty</span>
				</div>
			</main>

			<footer class="w-full p-24 flex flex-col justify-center items-center gap-24">
				<div class="w-full hidden">
					<input type="text" class="input" placeholder="enter a note for checkout" />
				</div>

				<div class="w-full hidden flex-row gap-4">
					<input type="text" class="input" placeholder="enter a discount code" />
					<Button as="button" variant="ghost-black">
						<span>apply</span>
					</Button>
				</div>

				<div class="w-full flex flex-row justify-between items-center">
					<h5 class="h5 text-black/60">subtotal</h5>
					<span class="">US$0.00</span>
				</div>

				<div>
					<Button as="button" variant="solid-black">
						<span>start checkout</span>
					</Button>
				</div>
			</footer>
		</div>
	</div>
</dialog>
