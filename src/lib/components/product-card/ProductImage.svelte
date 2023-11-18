<script lang="ts">
	import Button from '../Button.svelte';

	export let imgSrc: string;
	export let imgAlt: string;
</script>

<div
	class={`isolate w-full h-240 tablet-sm:h-360 flex justify-center items-center bg-white/10 rounded overflow-hidden relative`}
>
	<div class="absolute inset-0 -z-10 w-full h-full">
		<img src={imgSrc} alt={imgAlt} class="w-full h-full object-cover" />
	</div>

	<div id="cart-cta-wrapper" class="absolute bottom-0 right-0 p-24">
		<Button as="button" variant="solid-primary">
			<span>add to cart</span>
		</Button>
	</div>
</div>
