<script lang="ts">
	export let type: 'internal' | 'external';
	export let label: string;
	export let url: string;
</script>

{#if type === 'internal'}
	<a href={url} class="link">
		{label}
	</a>
{:else if type === 'external'}
	<a href={url} target="_blank" rel="noopener noreferrer" class="link">
		{label}
	</a>
{/if}
