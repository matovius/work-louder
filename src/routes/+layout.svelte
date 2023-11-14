<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/handjet';

	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="text-white w-full bg-black min-h-[100dvh]">
	<Header />
	<main class="w-full flex justify-center items-center p-24">
		<div class="container flex flex-col justify-center items-center gap-48">
			<slot />
		</div>
	</main>
	<Footer />
</div>
