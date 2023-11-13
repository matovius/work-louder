<script lang="ts">
	export let variant:
		| 'solid-white'
		| 'solid-black'
		| 'solid-primary'
		| 'translucent-white'
		| 'translucent-black'
		| 'translucent-primary'
		| 'ghost-white'
		| 'ghost-black'
		| 'ghost-primary';

	export let as: 'button' | 'link';
	export let url: string = '/';
</script>

{#if as === 'button'}
	<button class={`button ${variant}`}>
		<slot />
	</button>
{:else if as === 'link'}
	<a href={url} class={`button ${variant}`}>
		<slot />
	</a>
{/if}
