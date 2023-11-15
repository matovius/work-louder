<script lang="ts">
	import KeyboardsSection from '$lib/components/store/KeyboardsSection.svelte';
	import ModulesSection from '$lib/components/store/ModulesSection.svelte';
	import KeycapsSection from '$lib/components/store/KeycapsSection.svelte';
	import MerchandiseSection from '$lib/components/store/MerchandiseSection.svelte';
	import DeskmatsSection from '$lib/components/store/DeskmatsSection.svelte';
</script>

<svelte:head>
	<title>the store - work_louder</title>
</svelte:head>

<section id="hero" class="text-black w-full flex justify-center items-center">
	<div
		class="w-full py-96 flex flex-col justify-center items-center gap-48 bg-white rounded overflow-hidden relative"
	>
		<h1 class="h1 text-center relative">store</h1>
	</div>
</section>

<KeyboardsSection />

<ModulesSection />

<KeycapsSection />

<MerchandiseSection />

<DeskmatsSection />
