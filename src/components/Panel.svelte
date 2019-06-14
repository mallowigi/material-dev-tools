<script>
	import { slide } from 'svelte/transition';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
  import {app} from '../store';
</script>

<style>
  .alert {
    position: absolute;
    z-index: 3;
    width: 100%;
    min-width: 24rem;
    height: 2.5rem;
    padding: 0.625rem 0;
    background-color: #7bc082;
    color: white;
    text-align: center;
    font-size: 0.875rem;
    transition: all 0.25s ease;
    animation: fadeInDown 0.75s cubic-bezier(.55,0,.1,1) both 1s;
  }


  .footer {
    position: absolute;
    bottom: 2.5%;
    right: 2.5%;
  }
  .footer  a {
      text-decoration: none;
      color: #6f6f6f;
  }
</style>

{#if $app.notifying == true}
  <div class="alert" transition:slide>Close and reopen DevTools to apply your changes!</div>
{/if}

<ThemeSwitcher></ThemeSwitcher>

<div class="footer">
  Mahalo from <a target="_blank" href="https://github.com/micjamking">Mike King</a>
</div>