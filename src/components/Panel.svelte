<script>
    import {slide} from 'svelte/transition';
    import ThemeSwitcher from './ThemeSwitcher.svelte';
    import Footer from './Footer.svelte'
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
        background-color: var(--accent1);
        color: var(--selFg);
        text-align: center;
        font-size: 0.875rem;
        transition: all 0.25s ease;
        animation: fadeInDown 0.75s cubic-bezier(.55, 0, .1, 1) both 1s;
    }
</style>

{#if $app.notifying == true}
<div class="alert" transition:slide>Close and reopen DevTools to apply your changes!</div>
{/if}

<ThemeSwitcher></ThemeSwitcher>

<Footer></Footer>