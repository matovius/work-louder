<script lang="ts">
	import { page } from '$app/stores';

	import Button from '$lib/components/Button.svelte';
	import { NavLinks } from '$lib/components/Links';
	import { CartItemsStore, CartPrice } from '$lib/stores/Store';
	import { Products } from '$lib/components/product-card/ProductData';

	import WlLogoFull from './icons/WLLogoFull.svelte';
	import WlLogoShort from './icons/WLLogoShort.svelte';
	import { onDestroy } from 'svelte';
	import WlSmiley from './icons/WLSmiley.svelte';

	let NavModal: HTMLDialogElement;
	let navModalOpen: boolean = false;
	$: navModalOverflow = navModalOpen ? 'auto' : 'hidden';

	let CartModal: HTMLDialogElement;
	let cartModalOpen: boolean = false;
	$: cartModalOverflow = cartModalOpen ? 'auto' : 'hidden';

	let cartItems: string[];
	let cartPrice: number;

	const unsubscribeItems = CartItemsStore.subscribe((data) => {
		cartItems = data;
	});

	const unsubscribePrices = CartPrice.subscribe((data) => {
		cartPrice = data;
	});

	function toggleNavModal() {
		if (!navModalOpen) {
			NavModal.showModal();
			navModalOpen = true;
		} else {
			NavModal.close();
			navModalOpen = false;
		}

		document.body.style.overflow = navModalOverflow;
	}

	function toggleCartModal() {
		if (navModalOpen) {
			NavModal.close();
			navModalOpen = false;
		}

		if (!cartModalOpen) {
			CartModal.showModal();
			cartModalOpen = true;
		} else {
			CartModal.close();
			cartModalOpen = false;
		}

		document.body.style.overflow = cartModalOverflow;
	}

	onDestroy(unsubscribeItems);
</script>

<header class="w-full flex justify-center items-center p-24 sticky top-0 z-10">
	<div class="container flex flex-row justify-between items-center">
		{#if $page.url.pathname === '/'}
			<div class="w-36 h-36 aspect-square">
				<WlSmiley />
			</div>
		{:else}
			<a
				href="/"
				class="flex justify-center items-center opacity-100 hover:opacity-60 rounded-12 outline outline-2 outline-offset-4 outline-transparent focus-visible:outline-white"
				aria-label="the work_louder smiley logo. click to go back to the homepage."
			>
				<div class="w-36 h-36 aspect-square">
					<WlSmiley />
				</div>
			</a>
		{/if}
		<nav class="p-4 bg-white/80 backdrop-blur rounded-full border border-neutral-200">
			<ul class="flex-row justify-center items-center gap-4 hidden tablet-lg:flex">
				{#each NavLinks as item}
					<li>
						{#if $page.url.pathname.includes(item.url)}
							<button class="button text-white px-24 py-8 bg-black">
								<span>{item.label}</span>
							</button>
						{:else}
							<a
								href={item.url}
								class="button text-black hover:text-neutral-50 px-24 py-8 hover:bg-neutral-950 focus-visible:outline-neutral-950"
							>
								<span>{item.label}</span>
							</a>
						{/if}
					</li>
				{/each}

				<li>
					<button
						class="button text-black hover:text-neutral-50 px-24 py-8 hover:bg-neutral-950 focus-visible:outline-neutral-950"
						on:click={toggleCartModal}
					>
						<span>cart</span>
					</button>
				</li>
			</ul>
			<ul class="flex flex-row justify-center items-center gap-4 tablet-lg:hidden">
				<li>
					<button
						class="button text-black hover:text-neutral-50 px-24 py-8 hover:bg-neutral-950 focus-visible:outline-neutral-950"
						on:click={toggleCartModal}
					>
						<span>cart</span>
					</button>
				</li>

				<li>
					<button
						class="button text-black hover:text-neutral-50 px-24 py-8 hover:bg-neutral-950 focus-visible:outline-neutral-950"
						on:click={toggleNavModal}
					>
						<span>menu</span>
					</button>
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
					<button
						class="button text-black hover:text-neutral-50 px-24 py-8 hover:bg-neutral-950 focus-visible:outline-neutral-950"
						on:click={toggleNavModal}
					>
						<span>close</span>
					</button>
				</div>
			</header>
			<main class="w-full p-24 overflow-x-hidden overflow-y-auto">
				<ul class="flex flex-col justify-center items-center gap-4">
					{#each NavLinks as item}
						<li>
							{#if $page.url.pathname.includes(item.url)}
								<button class="button text-white px-24 py-8 bg-black">
									<span>{item.label}</span>
								</button>
							{:else}
								<button
									class="button text-black hover:text-neutral-50 px-24 py-8 hover:bg-neutral-950 focus-visible:outline-neutral-950"
									on:click={toggleNavModal}
								>
									<span>{item.label}</span>
								</button>
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
					<button
						class="button text-black hover:text-neutral-50 px-24 py-8 hover:bg-neutral-950 focus-visible:outline-neutral-950"
						on:click={toggleCartModal}
					>
						<span>close</span>
					</button>
				</div>
			</header>

			<main class="w-full h-full p-24 overflow-x-hidden overflow-y-auto">
				<ul class="w-full flex flex-col justify-start items-start gap-24">
					{#each cartItems as item}
						{#if item[0] !== 'empty'}
							{#each Products as Product}
								{#if Product.productID === item}
									<li class="w-full">
										<div
											class="w-full h-fit flex flex-row gap-24 border border-transparent relative"
										>
											<div
												class="w-full max-w-[7.5rem] h-120 aspect-square rounded-12 border border-black/20 overflow-hidden"
											>
												<img
													src={Product.imgSrc}
													alt={Product.imgAlt}
													class="w-full h-full object-cover"
												/>
											</div>
											<div class="w-full h-full flex flex-col gap-12">
												<h5 class="h5">{Product.name}</h5>
												<span class="small text-black/60">{Product.category}</span>
												<span class="h4">US${Product.price}</span>
											</div>
										</div>
									</li>
								{/if}
							{/each}
						{:else}
							<li class="w-full flex justify-center items-center py-48">
								<span class="h4 text-black/40">your cart is empty</span>
							</li>
						{/if}
					{/each}
				</ul>
			</main>

			<footer class="w-full p-24 flex flex-col justify-center items-center gap-24">
				<div class="w-full hidden">
					<input type="text" class="input" placeholder="enter a note for checkout" />
				</div>

				<div class="w-full flex flex-row justify-between items-center">
					<h5 class="h5 text-black/60">subtotal</h5>
					<span class="">US${cartPrice}</span>
				</div>

				<div>
					{#if cartItems[0] === 'empty'}
						<button class="button text-white px-24 py-8 bg-black" disabled>
							<span>start checkout</span>
						</button>
					{:else}
						<button class="button text-neutral-50 px-24 py-8 bg-neutral-950 hover:bg-neutral-800">
							<span>start checkout</span>
						</button>
					{/if}
				</div>
			</footer>
		</div>
	</div>
</dialog>
