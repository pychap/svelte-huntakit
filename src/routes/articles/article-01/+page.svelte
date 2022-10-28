<script>
  import Hero from "../../../$lib/Hero.svelte"
  import FirstPost from "./first-post.md"
</script>

<Hero />
<main class="flex-1 w-screen flex flex-col items-center prose">
  <!-- <slot /> -->
  <FirstPost />
</main>