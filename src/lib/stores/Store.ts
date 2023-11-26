import { writable } from 'svelte/store';

export const CartItemsStore = writable(['empty']);

export const CartPrice = writable<number>(0);
