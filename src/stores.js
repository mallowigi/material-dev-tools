import {writable} from 'svelte/store';

export const app = writable({
  themes: [],
  selectedTheme: null
});