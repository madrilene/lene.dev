module.exports = {
	content: [
		'./src/**/*.{html,md,11ty.js,js,json,liquid,njk,hbs,mustache,ejs,haml,pug}',
		'./utils/**/*.js'
	],
	theme: {
		fontFamily: {
			body: [
				'Outfit',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'ui-sans-serif',
				'system-ui',
				'sans-serif'
			],
			display: ['Charter', 'ui-sans-serif', 'system-ui', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#FF7F5C',
				secondary: '#3C4558',
				light: '#F9F5F1',
				dark: '#10100F'
			},
			spacing: {
				'size-0': 'clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)',
				'base': 'clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)',
				'size-1': 'clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)',
				'size-2': 'clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)',
				'size-3': 'clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)',
				'size-4': 'clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)',
				'size-5': 'clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)'
			},
			fontSize: {
				'size-0': 'clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)',
				'base': 'clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)',
				'size-1': 'clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)',
				'size-2': 'clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)',
				'size-3': 'clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)',
				'size-4': 'clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)',
				'size-5': 'clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)'
			},
			height: {
				'size-0': 'clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)',
				'base': 'clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)',
				'size-1': 'clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)',
				'size-2': 'clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)',
				'size-3': 'clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)',
				'size-4': 'clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)',
				'size-5': 'clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)'
			}
		}
	},
	variantOrder: [
		'first',
		'last',
		'odd',
		'even',
		'visited',
		'checked',
		'empty',
		'read-only',
		'group-hover',
		'group-focus',
		'focus-within',
		'hover',
		'focus',
		'focus-visible',
		'active',
		'disabled'
	],
	plugins: []
};
