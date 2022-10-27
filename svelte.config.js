import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import mdsvexConfig from 'mdsvex.config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
