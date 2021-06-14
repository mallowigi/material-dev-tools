<style>
  .theme-selector {
    grid-area: content;
  }

  .theme-options {
    border-radius: 0.125rem;
    border: 0.0625rem solid var(--hl);
    background: var(--contrast);
    background-position: 100% center;
    background-repeat: no-repeat;
    line-height: normal;
    font: inherit;
    font-size: 0.875rem;
    color: var(--fg);
    text-transform: none;
    margin: 0 auto 1em;
    display: block;
  }
</style>

<script>
  import {onMount} from 'svelte';
  import {app} from '../$app';
  import {styleBuilder} from '../style-builder';

  function applyTheme() {
    setTimeout(() => styleBuilder.applyTheme({
      currentTheme: $app.currentTheme,
      currentFontFamily: $app.currentFontFamily,
      currentFontSize: $app.currentFontSize,
      currentAccentColor: $app.currentAccentColor,
    }), 100);
  }

  onMount(applyTheme);

</script>

<div class="theme-selector">
    <label for="theme-options">Selected Theme:</label>
    <select class="theme-options"
            id="theme-options"
            on:change="{applyTheme}"
            bind:value={$app.currentThemeName}>
        {#each $app.themes as theme(theme.name)}
            <option value={theme.name}>{theme.name}</option>
        {/each}
    </select>
</div>