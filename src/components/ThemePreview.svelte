<style>
    .preview {
        padding: .5em;
        color: var(--foreground);
        overflow: auto;
        line-height: calc(16 / var(--font-size, 14));
    }
</style>

<script>
    import Prism from 'prismjs';
    import * as plugins from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': false,
        'remove-indent': false,
        'left-trim': false,
        'right-trim': true,
        'remove-initial-line-feed': false,
    });
    const nw = Prism.plugins.NormalizeWhitespace;

    let js = `// Javascript Code:
function foo(p) {
  console.log('foo');
  return 10;
}
`;

    let htmlCode = `
<!-- HTML Code -->
<div class="foo" id="foo">
    <p>This is a content</p>
</div>
`;

    export let code = Prism.highlight(nw.normalize(js), Prism.languages.javascript, 'javascript');
    export let html = Prism.highlight(nw.normalize(htmlCode), Prism.languages.markup, 'html');
</script>

<pre class="preview">
    <code class="language-javascript">{@html code}</code>
    <code class="language-html">{@html html}</code>
</pre>
