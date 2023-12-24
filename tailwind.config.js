/** @type {import('tailwindcss').Config} */

import baseColors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: baseColors.black,
			white: baseColors.white,
			neutral: baseColors.neutral,
			primary: {
				100: '#fbffcc',
				200: '#f8ff99',
				300: '#f4ff66',
				400: '#f1ff33',
				500: '#edff00',
				600: '#becc00',
				700: '#8e9900',
				800: '#5f6600',
				900: '#2f3300'
			},
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
			DEFAULT: '1.5rem', // TODO: Remove later on
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			28: '1.75rem',
			32: '2rem',
			36: '2.25rem',
			40: '2.5rem',
			44: '2.75rem',
			48: '3rem',
			full: '9999rem'
		},
		fontFamily: {
			manrope: 'Manrope Variable, sans-serif',
			inter: 'Inter Variable, sans-serif',
			handjet: 'Handjet Variable, monospace'
		},
		screens: {
			'mob-lg': '480px', // TODO: Remove later on
			'tablet-sm': '640px', // TODO: Remove later on
			'tablet-lg': '860px', // TODO: Remove later on
			laptop: '1024px', // TODO: Remove later on
			desktop: '1240px', // TODO: Remove later on
			'min-240': '15rem',
			'min-360': '22.5rem',
			'min-480': '30rem',
			'min-600': '37.5rem',
			'min-720': '45rem',
			'min-840': '52.5rem',
			'min-960': '60rem',
			'min-1080': '67.5rem',
			'min-1200': '75rem'
		},
		extend: {}
	},
	plugins: []
};
