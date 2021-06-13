<style>
  .loading {
    background: var(--bg, #263238);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 40rem;
    min-width: 24rem;
  }

  .loading h4 {
    font-weight: normal;
    font-style: normal;
    color: var(--fg, #b0bec5);
    text-rendering: optimizeLegibility;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .loading h4 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
    font-size: 2em;
  }

</style>

<script>
  import {fly} from 'svelte/transition';
</script>

<div class="loading" transition:fly="{{ y: 200, duration: 2000 }}">
    <h4>Loading...</h4>
</div>