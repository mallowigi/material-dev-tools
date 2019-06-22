<style>
    .palette {
        height: 2em;
        margin-bottom: 2em;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }

    .palette::after {
        display: table;
        content: '';
        clear: both;
    }

    .palette li {
        position: relative;
        list-style: none;
        height: 50%;
        display: block;
        float: left;
        z-index: 1;
        flex: 1;
        transition: transform 0.25s cubic-bezier(.55, 1.15, 0.1, 1.15);
        animation: zoomIn 0.15s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }

    .palette li:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: inherit;
        transform: scale3d(1, 1, 1);
        box-shadow: none;
        position: absolute;
        border-radius: 10%;
    }

    .palette li:hover {
        z-index: 2;
    }

    .palette li:hover:before {
        border-radius: 1%;
        transform: scale3d(1.5, 4, 1);
        box-shadow: 0 0 0.125rem 0 rgba(0, 0, 0, 0.15);
        transition: transform 0.25s cubic-bezier(.55, 1.15, 0.1, 1.15);
    }
</style>

<script>
    import {fade} from 'svelte/transition';
    import {app} from '../store';

    function isColor(color) {
        return color && color.startsWith && color.startsWith('#');
    }
</script>

{#if $app.currentTheme}
    <ul class="palette" transition:fade>
      {#each Object.entries($app.currentTheme.colors) as [key, color]}
          {#if isColor(color)}
            <li class="anim anim-delayed" style="background: {color}"
                title="{key}"></li>
          {/if}
      {/each}
    </ul>
{/if}
