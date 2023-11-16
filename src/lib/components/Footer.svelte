<script lang="ts">
	import InfiniteCarousel from './InfiniteCarousel.svelte';
	import WlLogoFull from './icons/WLLogoFull.svelte';
	import founderAvatar from '../images/avatar.png';
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
			<div class="w-full flex flex-col gap-24">
				<ul class="w-full flex flex-row justify-center items-center flex-wrap gap-24">
					<li>
						<a href="/store" class="paragraph text-white/60">store</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">setup</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">about</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">updates</a>
					</li>
				</ul>

				<ul class="w-full flex flex-row justify-center items-center flex-wrap gap-24">
					<li>
						<a href="/" class="paragraph text-white/60">twitter/x</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">instagram</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">tiktok</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">threads</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">discord</a>
					</li>
				</ul>

				<ul class="w-full flex flex-row justify-center items-center flex-wrap gap-24">
					<li>
						<a href="/" class="paragraph text-white/60">affiliate program</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">terms of service</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">return policy</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">privacy policy</a>
					</li>
					<li>
						<a href="/" class="paragraph text-white/60">terms and conditions</a>
					</li>
				</ul>
			</div>

			<div class="w-full flex justify-center items-center pb-24">
				<span class="small w-full text-center text-white/60">&copy; 2023 - work_louder inc.</span>
			</div>
		</div>
	</div>
</footer>
