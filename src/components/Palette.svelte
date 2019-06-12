<script>
    export let colors = [
      {
        id: 1,
        text: '#ff0000'
      },
      {
        id: 2,
        text: '#00ff00'
      }
    ];
</script>

<style>
    .palette {
        height: 2em;
        margin-bottom: 2em;
        font-size: 1em;
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
        box-shadow: 0 0 0.125rem 0 rgba(0,0,0,0.15);
    }
</style>

<ul class="palette">
    {#each colors as color(color.id)}
    <li class="delayed" style="background: {color.text}"></li>
    {/each}
</ul>