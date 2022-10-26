<!-- <script>
	export let data;
</script> -->

<main class=" flex-1 w-screen flex flex-col items-center">
	<div
		class="hero min-w-screen bg-cover bg-center bg-no-repeat h-96"
		style="background-image: url(../src/assets/img/screen-with-code.jpg);"
	>
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-xl">
				<h1
					class="text-5xl md:text-[3.50rem] font-serif font-medium leading-none tracking-tight mb-4 font-heading"
				>
					Front-end development:<br />a combination of<br />
					<span class="bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent "
						>Code</span>&nbsp;&amp;&nbsp;<span
						class="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 sm:whitespace-nowrap"
						>Creativity</span
					>
				</h1>
				<p class="mb-5 font-extralight">
					I've always walked a thin line of working between artistic / creative and technical work.
					It was an encouraging day when I discovered that engineering work can be creative. Doing
					my best to document the journey.
				</p>
				<button class="btn btn-primary">About</button>
			</div>
		</div>
	</div>
	<section class="flex flex-col px-6 py-4 business:bg-transparent  w-3/4 h-full prose">
    <h1 class="text-3xl md:text-[2.50rem] font-serif font-medium leading-none tracking-tight mb-4 font-heading">Welcome to my website</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet qui reprehenderit voluptatem! Eveniet laboriosam quam porro ut? Consequuntur fugit iusto praesentium corrupti itaque! Voluptatem fugit soluta consectetur doloribus provident.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet qui reprehenderit voluptatem! Eveniet laboriosam quam porro ut? Consequuntur fugit iusto praesentium corrupti itaque! Voluptatem fugit soluta consectetur doloribus provident.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet qui reprehenderit voluptatem! Eveniet laboriosam quam porro ut? Consequuntur fugit iusto praesentium corrupti itaque! Voluptatem fugit soluta consectetur doloribus provident.</p>
    <!-- <p class="text-indigo-300">Welcome {data.user.name}!</p> -->
    <div class="mockup-code w-80">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </div>
  </section>
</main>
