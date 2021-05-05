const {resolve} = require('path');
const {defineConfig} = require('vite');

module.exports = defineConfig({
	base: '/dist/',
	plugins: [],
	build: {
		rollupOptions: {
			input: {
				popup: resolve(__dirname, 'popup.html'),
			},
		},
	},
});
