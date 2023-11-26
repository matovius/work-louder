<script lang="ts">
	import { page } from '$app/stores';

	import Button from '$lib/components/Button.svelte';
	import { NavLinks } from '$lib/components/Links';
	import { CartItemsStore, CartPrice } from '$lib/stores/Store';
	import { Products } from '$lib/components/product-card/ProductData';

	import WlLogoFull from './icons/WLLogoFull.svelte';
	import WlLogoShort from './icons/WLLogoShort.svelte';
	import { onDestroy } from 'svelte';

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
					class="flex justify-center items-center opacity-100 hover:opacity-60 focus:opacity-60 rounded-full outline outline-2 outline-offset-4 outline-transparent focus-visible:outline-lemon-lime"
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
											<div class="absolute bottom-0 right-0 hidden">
												<Button as="button" variant="ghost-black">
													<span>remove</span>
												</Button>
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

				<div class="w-full hidden flex-row gap-4">
					<input type="text" class="input" placeholder="enter a discount code" />
					<Button as="button" variant="ghost-black">
						<span>apply</span>
					</Button>
				</div>

				<div class="w-full flex flex-row justify-between items-center">
					<h5 class="h5 text-black/60">subtotal</h5>
					<span class="">US${cartPrice}</span>
				</div>

				<div>
					{#if cartItems[0] === 'empty'}
						<Button as="button" variant="solid-black" isDisabled>
							<span>start checkout</span>
						</Button>
					{:else}
						<Button as="button" variant="solid-black">
							<span>start checkout</span>
						</Button>
					{/if}
				</div>
			</footer>
		</div>
	</div>
</dialog>
