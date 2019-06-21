<script>
	import { slide } from 'svelte/transition';
  import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
  import {app} from '../store';
  import {styleBuilder} from '../style-builder';

  // $: {
  //   const currentColor = $app.currentTheme;
  //   if (currentColor && currentColor.colors){
  //     const [background,
  //     second,
  //     comments,
  //     foreground,
  //     vars,
  //     links,
  //     functions,
  //     keywords,
  //     tags,
  //     strings,
  //     operators,
  //     accent] = currentColor.colors;
  //
  //
  //     const style = document.createElement('style');
  //     style.id = 'inject-style';
  //     style.innerHTML = styleBuilder.styles({
  //                background,
  //                foreground,
  //                primary: foreground,
  //                selBg: second,
  //                selFg: '#FFFFFF',
  //                button: second,
  //                disabled: comments,
  //                contrast: background,
  //                second,
  //                border: background,
  //                highlight: second,
  //                tree: second,
  //                notif: background,
  //                accent,
  //                excluded: second,
  //                comments,
  //                vars,
  //                links,
  //                functions,
  //                keywords,
  //                tags,
  //                errors: tags,
  //                strings,
  //                operators,
  //                numbers: strings,
  //                attributes: links,
  //
  //     });
  //
  //     const styleElem = document.getElementById('inject-style');
  //     if (styleElem) {
  //       document.head.removeChild(styleElem);
  //     }
  //     document.head.appendChild(style);
  //   }
  // }

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
    animation: fadeInDown 0.75s cubic-bezier(.55,0,.1,1) both 1s;
  }


  .footer {
    position: absolute;
    bottom: 2.5%;
    right: 2.5%;
  }
  .footer  a {
      text-decoration: none;
      color: var(--primary);
  }
</style>

{#if $app.notifying == true}
  <div class="alert" transition:slide>Close and reopen DevTools to apply your changes!</div>
{/if}

<ThemeSwitcher></ThemeSwitcher>

<div class="footer">
  Mahalo from <a target="_blank" href="https://github.com/micjamking">Mike King</a>
</div>