<svelte:head>
	<title>Theme Switcher built with Svelte and Sapper</title>
</svelte:head>

<script>
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
</script>

<main>
  <div class="alert">Close and reopen DevTools to apply your changes!</div>

  <ThemeSwitcher></ThemeSwitcher>

  <div class="footer">
    Mahalo from <a target="_blank" href="https://github.com/micjamking">Mike King</a>
  </div>
</main>