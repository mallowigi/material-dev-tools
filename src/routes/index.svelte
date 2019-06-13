<svelte:head>
	<title>Theme Switcher built with Svelte and Sapper</title>
</svelte:head>

<script>
import {onMount} from 'svelte';
import Panel from '../components/Panel.svelte';
import * as api from './_api';
import {app} from '../stores';

  onMount(async _ => {
    $app.loading = true;
    // Just waiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Now fetching
    const themes = await api.get('themes.json');

    try {
      $app.themes = themes;
    } catch (e) {
      console.error(e);
      $app.themes = [];
    }
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