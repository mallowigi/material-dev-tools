import App from './App.svelte';

const app = new App({
	target: document.querySelector('#sapper'),
	hydrate: true
});

export default app;