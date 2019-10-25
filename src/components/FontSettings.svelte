<script>
    import {app} from '../$app';
    import {styleBuilder} from '../style-builder';

    function applyTheme() {
        setTimeout(() => styleBuilder.applyTheme(
            {
                currentTheme: $app.currentTheme,
                currentFontFamily: $app.currentFontFamily,
                currentFontSize: $app.currentFontSize,
                accentColor: $app.currentAccentColor,
            }), 100);
    }
</script>

<style>
    .font-setting {
        display: block;
        margin: 1rem auto;
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

    .color-preview {
        padding: 3px;
        color: white;
        border-radius: 10px;
    }

    .accent-color-input {
        border: none;
    }

    input[type="color"] {
        -webkit-appearance: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
        border-radius: 50%;
    }

    input[type="color"]::-webkit-color-swatch {
        border-color: var(--border);
        border-radius: 50%;
    }
</style>

<div class="font-setting font-family">
    <label for="font-family-input">Font Family:
        <span style="font-family: '{$app.currentFontFamily}'">{$app.currentFontFamily}</span>
    </label>

    <input id="font-family-input"
        type="text"
        on:change="{applyTheme}"
        bind:value="{$app.currentFontFamily}"
        placeholder="e.g. Menlo" />
</div>

<div class="font-setting font-size">
    <label for="font-size-input">Font size:
        <output id="font-size-output" for="font-size-input">{$app.currentFontSize}</output>
        px
    </label>

    <input id="font-size-input" type="range"
        min="10"
        max="22"
        on:change="{applyTheme}"
        bind:value="{$app.currentFontSize}" />
</div>

<div class="font-setting accent-color">
    <label for="accent-color">Accent Color:
        <mark class="color-preview" style="background-color: {$app.currentAccentColor || $app.currentTheme.accent}">
            {$app.currentAccentColor || 'Default'}
        </mark>
    </label>

    <input type="color"
        class="accent-color-input"
        on:change={applyTheme}
        bind:value={$app.currentAccentColor} />
</div>