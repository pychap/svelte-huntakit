<script>
	export let data
	const { products, users } = data
	console.log(users)
</script>

<h1 class="text-3xl font-medium my-4">About</h1>
<slot />

<main class="flex-1 w-screen flex flex-col items-center">
  <div
		class="hero min-w-screen bg-cover bg-center bg-no-repeat h-96"
		style="background-image: url(../src/assets/img/screen-with-code.jpg);"
	>
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-xl">
				<h1
					class="text-5xl md:text-[3.50rem] font-serif font-medium leading-none tracking-tight mb-4 font-heading"
				>What is this all about?</h1>
				<p class="mb-5 font-extralight">
					I've always walked a thin line of working between artistic / creative and technical work.
					It was an encouraging day when I discovered that engineering work can be creative. Doing
					my best to document the journey.
				</p>
			</div>
		</div>
	</div>

  	<section class="flex flex-col px-6 py-4  w-3/4 h-full prose">
    <h1 class="text-3xl md:text-[2.50rem] font-serif font-medium leading-none tracking-tight mb-4 font-heading">About</h1>
		{#each products as product}
		  <h4>{product.title}</h4>
		  <p>{product.description} priced at ${product.price}.00</p>
		{/each}
		{#each users as user}
		  <p>#{user.id}. {user.firstName} {user.lastName}, is {user.age} years old.</p>
		{/each}
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet qui reprehenderit voluptatem! Eveniet laboriosam quam porro ut? Consequuntur fugit iusto praesentium corrupti itaque! Voluptatem fugit soluta consectetur doloribus provident.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet qui reprehenderit voluptatem! Eveniet laboriosam quam porro ut? Consequuntur fugit iusto praesentium corrupti itaque! Voluptatem fugit soluta consectetur doloribus provident.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio amet qui reprehenderit voluptatem! Eveniet laboriosam quam porro ut? Consequuntur fugit iusto praesentium corrupti itaque! Voluptatem fugit soluta consectetur doloribus provident.</p>

    <div class="card w-96 my-4 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Read more</button>
    </div>
  </div>
</div>
  </section>
</main>