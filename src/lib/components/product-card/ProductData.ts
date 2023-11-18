export interface Product {
	size: 'large' | 'medium' | 'small';
	name: string;
	category: 'keyboard' | 'keypad' | 'module' | 'keycaps' | 'merchandise' | 'deskmat';
	price: string;
	imgSrc: string;
	imgAlt: string;
	greenFlairs?: string[];
	orangeFlairs?: string[];
	grayFlairs?: string[];
	blueFlairs?: string[];
	pinkFlairs?: string[];
}
