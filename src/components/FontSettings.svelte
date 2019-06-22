<script>
    import {app} from '../store';
</script>

<style>
    .font-setting {
        display: block;
        margin: 1.25rem auto 2em;
    }

    .font-setting label {
        display: block;
        text-align: left;
        margin-bottom: 0.5em;
    }

    .font-setting input {
        display: block;
        background-image: none;
    }

    .font-family input {
        font-size: 0.875rem;
    }
</style>

<div class="font-setting font-family">
    <label for="font-family-input">Font Family:
        <span style="font-family: '{$app.currentFontFamily}'">{$app.currentFontFamily}</span> <small>(press enter to
            save)</small>
    </label>

    <input id="font-family-input"
           type="text"
           bind:value="{$app.currentFontFamily}"
           placeholder="e.g. Menlo"/>
</div>

<div class="font-setting font-size">
    <label for="font-size-input">Font size:
        <output id="font-size-output" for="font-size-input">{$app.currentFontSize}</output>
        px
    </label>

    <input id="font-size-input" type="range"
           min="10"
           max="22"
           bind:value="{$app.currentFontSize}"/>
</div>