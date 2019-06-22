<script>
    import Palette from './Palette.svelte';
    import ThemeSelector from './ThemeSelector.svelte';
    import ThemePreview from './ThemePreview.svelte';
    import FontSettings from './FontSettings.svelte';
    import {app} from '../store';
    import {fade, slide} from 'svelte/transition';
</script>

<div class="container">
  {#if $app.currentTheme}
      <header transition:fade class="title">
          <h4>Current Theme</h4>
          <!-- The selected theme -->
          <h1 id="currentTheme">
              <small>{$app.currentTheme.name}</small>
          </h1>

          <!-- Display the theme colors -->
          <div transition:slide>
              <Palette></Palette>
          </div>
      </header>
  {:else}
      <header>
          <h4>Please select a theme below</h4>
          <br><br>
      </header>
  {/if}

    <grid>
        <div class="first-col">
            <!-- The Theme Selector -->
            <ThemeSelector></ThemeSelector>

            <!-- The font settings -->
            <FontSettings></FontSettings>
        </div>

        <div class="second-col preview">
            <ThemePreview></ThemePreview>
        </div>
    </grid>
</div>

<style>
    grid {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-column-gap: 20px;
    }

    .first-col,
    .second-col {
        text-align: left;
    }

    .preview {
        background: var(--contrast);
        border: var(--highlight) 1px solid;
        border-radius: 20px;
    }
</style>