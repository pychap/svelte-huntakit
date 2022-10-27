import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { fileURLToPath } from 'url';
import * as path from 'path';
// import { defineConfig } from "vite";

const dirname = path.resolve(fileURLToPath(import.meta.url), '../')

const config = defineConfig( config: {
  extensions: [ '.md', '.svx'],
  smartypants: {dashes: 'oldschool'},
  layout: {blog: path.join(dirname, './src/routes/articles/+page.svelte')}
}
)

export default config
// const { mdsvex } = require('mdsvex')

// // add ".svx" to the extensions array
// const extensions = ['.mjs', '.js', '.json', '.svelte', '.md', '.html', '.svx'];

// module.exports = {
// 	...boring_config_stuff,
// 	resolve: { alias, extensions, mainFields },
// 	module: {
// 		rules: [
// 			{
// 				// tell svelte-loader to handle svx files as well
// 				test: /.(svelte|html|svx)$/,
// 				use: {
// 					loader: 'svelte-loader',
// 					options: {
// 						...svelte_options,
// 						preprocess: mdsvex({ extensions: ['.svx', '.md']})
// 					}
// 				}
// 			}
// 		]
// 	}
// };