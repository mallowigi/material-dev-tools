<script>
  import {onMount} from 'svelte';
  import yaml from 'js-yaml';
  import * as api from './api';
  import {app} from './$app';
  import Panel from './components/Panel.svelte';
  import Loading from './components/Loading.svelte';

  onMount(async _ => {
    $app.loading = true;
    // Just waiting
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Now fetching
    const themesYml = await api.get('themes.yml');
    const allThemes = yaml.load(themesYml);
    const themes = [
      ...allThemes.material,
      ...allThemes.other,
    ];

    // Load themes
    $app.loadThemes(themes);
    // Get settings from local storage
    await $app.fetchSettings();
    // Add defaults
    $app.loadDefaults();

    $app.loading = false;
  });
</script>

<style>
  .main {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>


<main class="main">
    <Loading></Loading>
    {#if !$app.loading}
        <Panel></Panel>
    {/if}
</main>