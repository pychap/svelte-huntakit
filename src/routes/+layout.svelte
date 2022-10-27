<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import '@fontsource/alegreya';
	import '@fontsource/lato';
	import { themeChange } from 'theme-change';
	import Navbar from '../$lib/Navbar.svelte';
	import Footer from '../$lib/Footer.svelte';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<Navbar />

<slot />

<Footer />

