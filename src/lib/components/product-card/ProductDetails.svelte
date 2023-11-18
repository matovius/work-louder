<script lang="ts">
	export let name: string;
	export let category: 'keyboard' | 'keypad' | 'module' | 'keycaps' | 'merchandise' | 'deskmat';
	export let price: string = '0.00';
</script>

<div class="w-full flex flex-row justify-between items-center gap-24">
	<div class="w-full flex flex-col justify-start items-start gap-12">
		<h3 class="h4 text-start">{name}</h3>
		<span class="text-base font-semibold leading-none text-white/40 text-start">{category}</span>
	</div>
	<span class="h3 text-white/60">${price}</span>
</div>
