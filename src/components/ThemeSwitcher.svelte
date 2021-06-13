<script>
  import Palette from './Palette.svelte';
  import ThemeSelector from './ThemeSelector.svelte';
  import ThemePreview from './ThemePreview.svelte';
  import FontSettings from './FontSettings.svelte';
  import {app} from '../$app';
  import {fade, slide} from 'svelte/transition';
</script>

<div class="loading">
    {#if $app.currentTheme}
        <header transition:fade class="title">
            <h4>Material Theme UI for DevTools</h4>
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
            <ThemeSelector></ThemeSelector>

            <FontSettings></FontSettings>
        </div>

        <div class="second-col preview">
            <ThemePreview></ThemePreview>
        </div>
    </grid>
</div>

<style>

  .loading {
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

  @media (min-width: 480px) {
    .loading .title {
      padding: 0.625rem 0;
    }

    .loading h1 {
      font-size: 6em;
    }
  }

  .loading h1,
  .loading h4 {
    font-weight: normal;
    font-style: normal;
    color: var(--fg);
    text-rendering: optimizeLegibility;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .loading small {
    font-size: 60%;
    color: var(--text);
    line-height: 0;
    font-weight: 300;
    letter-spacing: 0.05em;
  }

  .loading h1 {
    font-size: 4em;
    font-weight: lighter;
    line-height: 1;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    letter-spacing: 0.025em;
    animation: fadeInDownShort 0.5s cubic-bezier(0.55, 0, 0.1, 1) both 0.5s;
    pointer-events: none;
  }

  .loading h4 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
    font-size: 2em;
  }

  .loading h1 {
    margin: 0;
  }

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
    border: var(--hl) 1px solid;
    border-radius: 20px;
    max-height: 300px;
    overflow: auto;
  }
</style>