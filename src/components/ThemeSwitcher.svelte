<script>
    import Palette from './Palette.svelte';
    import ThemeSelector from './ThemeSelector.svelte';
    import FontSettings from './FontSettings.svelte';
    import {app} from '../store';
    import { fade, slide } from 'svelte/transition';
</script>

<div class="container">
    {#if $app.currentTheme}
      <header transition:fade class="title">
        <h4>Current Theme:</h4>
        <!-- The selected theme -->
        <h1 id="currentTheme">
          <small>{$app.currentTheme.name}</small>
        </h1>
      </header>

      <!-- Display the theme colors -->
      <div transition:slide>
        <Palette></Palette>
      </div>
    {:else}
      <header>
        <h4>Please select a theme below</h4>
      </header>
    {/if}

    <!-- The Theme Selector -->
    <ThemeSelector></ThemeSelector>

    <!-- The font settings -->
    <FontSettings></FontSettings>
</div>