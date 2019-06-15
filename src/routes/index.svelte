<script context="module">

	export async function preload(page, session) {
	  console.log('pre');
		const res = await this.fetch(`themes.json`);
    const data = await res.json();
    if (res.status === 404) {
      this.error(404, 'Not found');
    }
    return { themes:data };
	}
</script>


<script>
console.log('stat')
import {onMount} from 'svelte';
import Panel from '../components/Panel.svelte';
import * as api from '../api';
import {app} from '../store';
import {storage} from '../storage';
export let themes;
console.log('abc', themes);
  onMount(async _ => {
    console.log('kdijd');
    $app.loading = true;
    // Just waiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Now fetching
    // const themes = await api.get('themes.json');

    $app.themes = themes.sort((a,b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });

    console.log('uu');
    await $app.fetchSettings();

    $app.loading = false;
  });
</script>

{#if $app.loading}
  <div class="container">
    <h4>Loading...</h4>
  </div>
{:else}
  <Panel></Panel>
{/if}
