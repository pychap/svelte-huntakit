<script>
	import CardOne from '../$lib/CardOne.svelte';
	import CardTwo from '../$lib/CardTwo.svelte';
	import Hero from '../$lib/Hero.svelte';

	// export let data;
</script>

<main class=" flex-1 w-screen flex flex-col items-center">
	<Hero />
	<section class="flex flex-col px-6 py-4 business:bg-transparent  w-3/4 h-full prose">
		<h1
			class="text-3xl md:text-[2.50rem] font-serif font-medium leading-none tracking-tight mb-4 font-heading"
		>
			Welcome to my website
		</h1>
		<p>
			This is the fruit of exploration of building a website with <a
				href="https://kit.svelte.dev/"
				target="_blank"
				rel="noopener noreferrer"
				alt="SvelteKit"
				class=" no-underline border-b border-dotted border-orange-500  hover:bg-orange-200 hover:text-gray-700"
				>SvelteKit</a
			>,
			<a
				href="https://tailwindcss.com/"
				target="_blank"
				rel="noopener noreferrer"
				alt="SvelteKit"
				class=" no-underline border-b border-dotted border-orange-500  hover:bg-orange-200 hover:text-gray-700"
				>Tailwind</a
			>
			and
			<a
				href="https://daisyui.com/"
				target="_blank"
				rel="noopener noreferrer"
				alt="SvelteKit"
				class=" no-underline border-b border-dotted border-orange-500  hover:bg-orange-200 hover:text-gray-700"
				>DaisyUI</a
			>.
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet qui reprehenderit
			voluptatem! Eveniet laboriosam quam porro ut? Consequuntur fugit iusto praesentium corrupti
			itaque! Voluptatem fugit soluta consectetur doloribus provident.
		</p>

		<!-- <p class="text-indigo-300">Welcome {data.user.name}!</p> -->
	</section>
	<section class="grid grid-cols-4 cards-grid-rows gap-5 w-full">
		<div class="mockup-code col-start-2 col-span-2 row-start-1 row-end-2">
			<pre data-prefix="$"><code>npm i daisyui</code></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-success"><code>Done!</code></pre>
		</div>
		<CardOne />
		<CardTwo />
	</section>
</main>

<style>
	.cards-grid-rows {
		grid-template-rows: max-content repeat(2, minmax(0, 1fr));
	}

</style>
