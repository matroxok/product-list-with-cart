/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'waffle-mobile': "url('/assets/image-waffle-mobile.jpg')",
			},
		},
		plugins: [],
	},
}
