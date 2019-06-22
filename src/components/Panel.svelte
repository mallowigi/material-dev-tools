<script>
    import {slide} from 'svelte/transition';
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
        background-color: var(--accent1);
        color: var(--selFg);
        text-align: center;
        font-size: 0.875rem;
        transition: all 0.25s ease;
        animation: fadeInDown 0.75s cubic-bezier(.55, 0, .1, 1) both 1s;
    }


    .footer {
        position: absolute;
        bottom: 2.5%;
        right: 2.5%;
        text-align: right;
    }

    .footer a {
        text-decoration: none;
        color: var(--primary);
    }
</style>

{#if $app.notifying == true}
<div class="alert" transition:slide>Close and reopen DevTools to apply your changes!</div>
{/if}

<ThemeSwitcher></ThemeSwitcher>

<div class="footer">
<small>Material Theme © 2015-2019 <a target="_blank" href="https://www.material-theme.com">Elior Boukhobza & Chris Magnussen</a></small><br>
<small>Original concept from <a target="_blank" href="https://github.com/micjamking">Mike King</a></small>
</div>