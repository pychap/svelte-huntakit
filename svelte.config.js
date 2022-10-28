import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { markdown } from 'svelte-preprocess-markdown';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [ preprocess({ postcss: true, }), markdown()],
  extensions: [ '.svelte', '.md',],
};

export default config;
