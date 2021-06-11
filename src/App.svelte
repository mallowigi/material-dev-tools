<script>
  import {onMount} from 'svelte';
  import yaml from 'js-yaml';
  import Panel from './components/Panel.svelte';
  import * as api from './api';
  import {app} from './$app';
  import {fly} from 'svelte/transition';

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
  .container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 40rem;
    min-width: 24rem;
  }

  .container h4 {
    font-weight: normal;
    font-style: normal;
    color: var(--fg);
    text-rendering: optimizeLegibility;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .container h4 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
    font-size: 2em;
  }

</style>

<main style="width: 100vw;height: 100vh;position: relative;">
    {#if $app.loading}
        <div class="container" transition:fly="{{ y: 200, duration: 2000 }}">
            <h4>Loading...</h4>
        </div>
    {:else}
        <Panel></Panel>
    {/if}
</main>