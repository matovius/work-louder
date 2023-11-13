<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/handjet';

	import '../app.css';

	import Header from '$lib/components/Header.svelte';
</script>

<div class="text-white w-full bg-black min-h-[100dvh]">
	<Header />
	<slot />
</div>
