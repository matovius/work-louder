/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			white: '#ffffff',
			'lemon-lime': '#edff00',
			malachite: '#0ee077',
			pumpkin: '#ff6700',
			onyx: '#444444',
			blue: '#384cff',
			heliotrope: '#e77fff'
		},
		spacing: {
			0: '0',
			px: '1px',
			4: '.25rem',
			8: '.5rem',
			12: '.75rem',
			24: '1.5rem',
			36: '2.25rem',
			48: '3rem',
			96: '6rem',
			120: '7.5rem',
			240: '15rem',
			296: '18.5rem',
			360: '22.5rem',
			480: '30rem',
			608: '38rem'
		},
		borderRadius: {
			none: '0',
			4: '.25rem',
			8: '.5rem',
			12: '.75rem',
			DEFAULT: '1.5rem',
			48: '3rem',
			full: '9999rem'
		},
		fontFamily: {
			manrope: 'Manrope Variable, sans-serif',
			inter: 'Inter Variable, sans-serif',
			handjet: 'Handjet Variable, monospace'
		},
		screens: {
			'mob-lg': '480px',
			'tablet-sm': '640px',
			'tablet-lg': '860px',
			laptop: '1024px',
			desktop: '1240px'
		},
		extend: {}
	},
	plugins: []
};
