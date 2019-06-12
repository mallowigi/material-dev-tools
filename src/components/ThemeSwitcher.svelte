<script>
    import Palette from './Palette.svelte';
    import ThemeList from './ThemeList.svelte';
    import FontSettings from './FontSettings.svelte';
</script>

<div class="container">
    <h4>Current Theme:</h4>

    <header class="title">
      <h1 id="currentTheme">Current Theme</h1>
    </header>

    <Palette></Palette>

    <ThemeList></ThemeList>

    <FontSettings></FontSettings>
  </div>