<script>
import {onMount} from 'svelte';
import Panel from './components/Panel.svelte';
import * as api from './api';
import {app} from './store';
import {storage} from './storage';

  onMount(async _ => {
    $app.loading = true;
    // Just waiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Now fetching
    const themes = await api.get('themes.json');

    $app.themes = themes.sort((a,b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });

    await $app.fetchSettings();

    $app.loading = false;
  });
</script>

<main style="width: 100vw;height: 100vh;position: relative;">
{#if $app.loading}
  <div class="container">
    <h4>Loading...</h4>
  </div>
{:else}
  <Panel></Panel>
{/if}
</main>