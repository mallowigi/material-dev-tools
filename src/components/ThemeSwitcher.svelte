<script>
    import Palette from './Palette.svelte';
    import ThemeList from './ThemeList.svelte';
    import FontSettings from './FontSettings.svelte';
    import {app} from '../stores';
   import { fade, slide } from 'svelte/transition';
</script>

<div class="container">
    {#if $app.selectedTheme}
      <header transition:fade class="title">
        <h4>Current Theme:</h4>
        <h1 id="currentTheme">
          <small>{$app.selectedTheme.name}</small>
        </h1>
      </header>

      <div transition:slide>
        <Palette></Palette>
      </div>
    {/if}

    <ThemeList></ThemeList>

    <FontSettings></FontSettings>
</div>