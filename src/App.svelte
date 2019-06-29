<script>
import {onMount} from 'svelte';
import yaml from 'js-yaml'
import Panel from './components/Panel.svelte';
import * as api from './api';
import {app} from './store';
import {storage} from './storage';
import {fly} from 'svelte/transition'

  onMount(async _ => {
    $app.loading = true;
    // Just waiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Now fetching
    const themesYml = await api.get('themes.yml');
    const allThemes = yaml.load(themesYml);
    const themes = [...allThemes.material, ...allThemes.other];

    // Load themes
    $app.loadThemes(themes);
    // Get settings from local storage
    await $app.fetchSettings();
    // Add defaults
    $app.loadDefaults();

    $app.loading = false;
  });
</script>

<main style="width: 100vw;height: 100vh;position: relative;">
{#if $app.loading}
  <div class="container" transition:fly="{{ y: 200, duration: 2000 }}">
    <h4>Loading...</h4>
  </div>
{:else}
  <Panel></Panel>
{/if}
</main>