<script>
    import Palette from './Palette.svelte';
    import ThemeList from './ThemeList.svelte';
    import FontSettings from './FontSettings.svelte';
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


  @media (min-width: 480px) {
    .container .title {
      padding: 0.625rem 0;
    }
    .container h1 {
      font-size: 6em;
    }
  }


  h1, h4 {
    font-weight: normal;
    font-style: normal;
    color: #222222;
    text-rendering: optimizeLegibility;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  small {
    font-size: 60%;
    color: #6f6f6f;
    line-height: 0;
    font-weight: 300;
    letter-spacing: 0.05em;
  }

  h1 {
    font-size: 4em;
    font-weight: lighter;
    line-height: 1;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    letter-spacing: 0.025em;
    animation: fadeInDownShort 0.5s cubic-bezier(.55,0,.1,1) both 0.5s;
    pointer-events: none;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
    font-size: 2em;
  }

</style>

<div class="container">
    <h4>Current Theme:</h4>

    <header class="title">
      <h1 id="currentTheme"><small>Selected theme</small></h1>
    </header>

    <Palette></Palette>

    <ThemeList></ThemeList>

    <FontSettings></FontSettings>
  </div>