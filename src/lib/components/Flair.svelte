<script lang="ts">
	export let variant: 'green-chip' | 'orange-chip' | 'gray-chip' | 'blue-chip' | 'pink-chip';
	export let label: string;
</script>

<div class={`flair-chip ${variant}`}>
	{label}
</div>
