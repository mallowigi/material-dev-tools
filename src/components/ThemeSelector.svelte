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
  color: rgba(0, 0, 0, 0.75);
  text-transform: none;
  width: 60%;
  margin: 0 auto 2em;
  display: block;
}
</style>

<script >
  import {app} from '../store';
</script>

<select class="theme-options" id="theme-options"
        bind:value={$app.currentThemeName}>
  {#each $app.themes as theme(theme.name)}
    <option value={theme.name}>{theme.name}</option>
  {/each}
</select>