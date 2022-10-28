<script>
    import Hero from '../../$lib/Hero.svelte'
    import Itworks from "./appearance.md";
   
</script>
<Hero />
<main class="flex-1 w-screen flex flex-col items-center prose">
  
    <slot />
    <Itworks />

</main>