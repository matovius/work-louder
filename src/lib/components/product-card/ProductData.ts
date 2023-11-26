import nomadProductImage from '$lib/images/nomad-product-image.png';
import creatorBoard from '$lib/images/creator-board.png';
import creatorBoardXL from '$lib/images/creator-board-XL.png';
import creatorMicro from '$lib/images/creator-micro.png';

import xlBase from '$lib/images/xl-base.png';
import loopPad from '$lib/images/loop-pad.png';
import nanoPad from '$lib/images/nano-pad.png';
import numPad from '$lib/images/num-pad.png';
import microPCB from '$lib/images/micro-pcb.png';
import microBase from '$lib/images/micro-base.png';

import wrkBlind from '$lib/images/wrk-blind.png';
import wrkCartridge from '$lib/images/wrk-cartridge.png';
import wrkDaily from '$lib/images/wrk-daily.png';
import wrkDial from '$lib/images/wrk-dial.png';
import wrkIcon from '$lib/images/wrk-icon.png';
import wrkLegend from '$lib/images/wrk-legend.png';
import wrkPure from '$lib/images/wrk-pure.png';

import stickers from '$lib/images/stickers.png';

import animoDeskpad from '$lib/images/animo-deskpad.png';
import floppyChameleon from '$lib/images/floppy-chameleon.png';
import muriicleCollab from '$lib/images/muriicle-collab.png';

export interface Product {
	productID: string;
	size: 'large' | 'small';
	name: string;
	category: 'keyboard' | 'module' | 'keycaps' | 'merchandise' | 'deskmat';
	price: number;
	imgSrc: string;
	imgAlt: string;
	url?: string;
	greenFlairs?: string[];
	orangeFlairs?: string[];
	grayFlairs?: string[];
	blueFlairs?: string[];
	pinkFlairs?: string[];
}

export const categories = ['keyboard', 'module', 'keycaps', 'merchandise', 'deskmat'];

export const Products: Product[] = [
	{
		productID: 'nomad-e-keyboard',
		size: 'large',
		name: 'nomad [e]',
		category: 'keyboard',
		price: 349,
		imgSrc: nomadProductImage,
		imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it',
		url: '/store/nomad-e',
		blueFlairs: ['pre-order only']
	},
	{
		productID: 'creator-board-keyboard',
		size: 'small',
		name: 'creator board',
		category: 'keyboard',
		price: 409,
		imgSrc: creatorBoard,
		imgAlt: 'the loop pad has three dials and nine buttons'
	},
	{
		productID: 'creator-micro-keypad',
		size: 'small',
		name: 'creator micro',
		category: 'keyboard',
		price: 129,
		imgSrc: creatorMicro,
		imgAlt: 'the nano pad has one dials and two programmable buttons'
	},
	{
		productID: 'creator-board-xl-keyboard',
		size: 'large',
		name: 'creator board XL',
		category: 'keyboard',
		price: 559,
		imgSrc: creatorBoardXL,
		imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base',
		blueFlairs: ['pre-order only']
	},
	{
		productID: 'xl-base-module',
		size: 'large',
		name: 'XL base',
		category: 'module',
		price: 79,
		imgSrc: xlBase,
		imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
	},
	{
		productID: 'loop-pad-module',
		size: 'small',
		name: 'loop pad',
		category: 'module',
		price: 99,
		imgSrc: loopPad,
		imgAlt: 'the loop pad has three dials and nine buttons'
	},
	{
		productID: 'nano-pad-module',
		size: 'small',
		name: 'nano pad',
		category: 'module',
		price: 50,
		imgSrc: nanoPad,
		imgAlt: 'the nano pad has one dials and two programmable buttons'
	},
	{
		productID: 'num-pad-module',
		size: 'small',
		name: 'num pad',
		category: 'module',
		price: 89,
		imgSrc: numPad,
		imgAlt:
			'the num pad has buttons for all the ten numbers, and extras for mathematical operations on the right and bottom',
		blueFlairs: ['pre-order only']
	},
	{
		productID: 'micro-pcb-module',
		size: 'small',
		name: 'micro pcb',
		category: 'module',
		price: 59,
		imgSrc: microPCB,
		imgAlt:
			"the micro pcb has twelve programmable buttons and two dials, one on it's side and the other standing up",
		orangeFlairs: ['out of stock']
	},
	{
		productID: 'micro-base-module',
		size: 'small',
		name: 'micro base',
		category: 'module',
		price: 59,
		imgSrc: microBase,
		imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base'
	},
	{
		productID: 'wrk-cartridge-keycaps',
		size: 'large',
		name: 'wrk. cartridge',
		category: 'keycaps',
		price: 99,
		imgSrc: wrkCartridge,
		imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
	},
	{
		productID: 'wrk-icon-keycaps',
		size: 'small',
		name: 'wrk. icon',
		category: 'keycaps',
		price: 54,
		imgSrc: wrkIcon,
		imgAlt: 'the loop pad has three dials and nine buttons'
	},
	{
		productID: 'wrk-pure-keycaps',
		size: 'small',
		name: 'wrk. pure',
		category: 'keycaps',
		price: 54,
		imgSrc: wrkPure,
		imgAlt: 'the nano pad has one dials and two programmable buttons'
	},
	{
		productID: 'wrk-blind-keycaps',
		size: 'small',
		name: 'wrk. blind',
		category: 'keycaps',
		price: 44,
		imgSrc: wrkBlind,
		imgAlt:
			'the num pad has buttons for all the ten numbers, and extras for mathematical operations on the right and bottom'
	},
	{
		productID: 'wrk-legend-keycaps',
		size: 'small',
		name: 'wrk. legend',
		category: 'keycaps',
		price: 54,
		imgSrc: wrkLegend,
		imgAlt:
			"the micro pcb has twelve programmable buttons and two dials, one on it's side and the other standing up"
	},
	{
		productID: 'wrk-daily-keycaps',
		size: 'small',
		name: 'wrk. daily',
		category: 'keycaps',
		price: 54,
		imgSrc: wrkDaily,
		imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base'
	},
	{
		productID: 'wrk-dial-keycap',
		size: 'small',
		name: 'wrk. dial',
		category: 'keycaps',
		price: 5,
		imgSrc: wrkDial,
		imgAlt: 'the micro base can be used to mount the micro pcb or the num pad to a base'
	},
	{
		productID: 'stickers-merchandise',
		size: 'large',
		name: 'stickers',
		category: 'merchandise',
		price: 10,
		imgSrc: stickers,
		imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
	},
	{
		productID: 'animo-deskmat',
		size: 'large',
		name: 'A.N.I.M.O.',
		category: 'deskmat',
		price: 40,
		imgSrc: animoDeskpad,
		imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
	},
	{
		productID: 'floppy-chameleon-deskmat',
		size: 'small',
		name: 'floppy chameleon',
		category: 'deskmat',
		price: 69,
		imgSrc: floppyChameleon,
		imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
	},
	{
		productID: 'muriicle-deskmat',
		size: 'small',
		name: 'Muriicle',
		category: 'deskmat',
		price: 49,
		imgSrc: muriicleCollab,
		imgAlt: 'the XL base has a slew of threaded holes to allow stuff to be mounted on top of it'
	}
];
