<style>
    .theme-options {
        border-radius: 0.125rem;
        border: 0.0625rem solid #cccccc;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMTJweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCA2IDMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYgMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gcG9pbnRzPSI1Ljk5MiwwIDIuOTkyLDMgLTAuMDA4LDAgIi8+PC9zdmc+);
        background-position: 100% center;
        background-repeat: no-repeat;
        line-height: normal;
        font: inherit;
        font-size: 0.875rem;
        color: var(--foreground);
        text-transform: none;
        margin: 0 auto 2em;
        display: block;
    }
</style>

<script>
    import {onMount} from 'svelte';
    import {app} from '../store';
    import {styleBuilder} from '../style-builder';

    function applyTheme() {
        setTimeout(() => styleBuilder.applyTheme(
                $app.currentTheme,
                $app.currentFontFamily,
                $app.currentFontSize
        ), 100);
    }

    onMount(applyTheme);

</script>

<label for="theme-options">Selected Theme:</label>
<select class="theme-options"
        id="theme-options"
        on:change="{applyTheme}"
        bind:value={$app.currentThemeName}>
  {#each $app.themes as theme(theme.name)}
      <option value={theme.name}>{theme.name}</option>
  {/each}
</select>