<script lang="ts">
	import InfiniteCarousel from './InfiniteCarousel.svelte';
	import WlLogoFull from './icons/WLLogoFull.svelte';
	import founderAvatar from '../images/avatar.png';
	import { NavLinks, SocialLinks, DummyLegalLinks } from './Links';
	import Link from './Link.svelte';
</script>

<footer class="w-full flex justify-center items-center">
	<div class="container flex flex-col justify-center items-center gap-48">
		<div id="top" class="w-full flex flex-col justify-start items-center gap-48">
			<InfiniteCarousel background="solid-primary">
				<span>human after all.</span>
			</InfiniteCarousel>

			<div class="h-36 mob-lg:h-48 text-white">
				<WlLogoFull />
			</div>

			<div class="w-fit h-96">
				<img
					src={founderAvatar}
					alt="emoticons of the founders, Mattia, and Michael"
					class="h-full"
				/>
			</div>
		</div>

		<div id="bottom" class="w-full flex flex-col justify-start items-center gap-48">
			<div class="w-full flex flex-col gap-12">
				<ul class="w-full flex flex-row justify-center items-center flex-wrap gap-y-12">
					{#each NavLinks as link}
						<Link type="internal" label={link.label} url={link.url} />
					{/each}
				</ul>

				<ul class="w-full flex flex-row justify-center items-center flex-wrap gap-y-12">
					{#each SocialLinks as link}
						<Link type="external" label={link.label} url={link.url} />
					{/each}
				</ul>

				<ul class="w-full flex flex-row justify-center items-center flex-wrap gap-y-12">
					{#each DummyLegalLinks as link}
						<Link type="internal" label={link.label} url={link.url} />
					{/each}
				</ul>
			</div>

			<div class="w-full flex justify-center items-center pb-24">
				<span class="small w-full text-center text-white/60">&copy; 2023 - work_louder inc.</span>
			</div>
		</div>
	</div>
</footer>
