import {attr} from 'svelte/internal';

/**
 * Service to build the styles
 */
export const styleBuilder = {
  /**
   * Extract current theme colors and inject a style tag in the body
   * @param currentTheme
   */
  applyTheme(currentTheme) {
    // Extract colors
    if (currentTheme && currentTheme.colors) {
      const {
              background,
              foreground,
              text,
              selectBg,
              selectFg,
              button,
              disabled,
              contrast,
              second,
              table,
              misc1,
              misc2,
              tree,
              notif,
              accent,
              excluded,
              comments,
              vars,
              links,
              functions,
              keywords,
              tags,
              strings,
              operators,
              attributes,
              numbers,
            } = currentTheme.colors;

      // Create a style tag with css variables with colors
      const style = document.createElement('style');
      style.id = 'inject-style';
      style.innerHTML = this.styles({
        background,
        foreground,
        primary: text,
        selectBg,
        selectFg,
        button,
        disabled,
        contrast,
        second,
        table,
        border: misc1,
        highlight: misc2,
        tree,
        notif,
        accent,
        excluded,
        comments,
        vars,
        links,
        functions,
        keywords,
        tags,
        errors: tags,
        strings,
        operators,
        numbers,
        attributes,

      });

      const styleElem = document.getElementById('inject-style');
      if (styleElem) {
        document.head.removeChild(styleElem);
      }
      document.head.appendChild(style);
    }
  },

  /**
   * Extract the styles and create a css string to be injected to a style tag
   * @param background
   * @param foreground
   * @param primary
   * @param selectBg
   * @param selectFg
   * @param button
   * @param disabled
   * @param contrast
   * @param second
   * @param darkerBg
   * @param lighterBg
   * @param border
   * @param highlight
   * @param tree
   * @param notif
   * @param accent
   * @param accent2
   * @param accent3
   * @param excluded
   * @param comments
   * @param vars
   * @param links
   * @param functions
   * @param keywords
   * @param tags
   * @param errors
   * @param strings
   * @param operators
   * @param numbers
   * @param attributes
   * @returns {string}
   */
  styles({
           background,
           foreground,
           primary,
           selectBg,
           selectFg,
           button,
           disabled,
           contrast,
           second,
           darkerBg = contrast,
           lighterBg = second,
           border,
           highlight,
           tree,
           notif,
           accent,
           accent2 = accent,
           accent3 = accent,
           excluded,
           comments,
           vars,
           links,
           functions,
           keywords,
           tags,
           errors,
           strings,
           operators,
           numbers,
           attributes,
         }) {
    return `
  :root {
  --background: ${background};
  --darkerBg: ${darkerBg};
  --lighterBg: ${lighterBg};
  --foreground: ${foreground};
  --primary: ${primary};
  --selBg: ${selectBg};
  --selFg: ${selectFg};
  --button: ${button};
  --disabled: ${disabled};
  --contrast: ${contrast};
  --second: ${second};
  --border: ${border};
  --highlight: ${highlight};
  --tree: ${tree};
  --notif: ${notif};
  --accent1: ${accent};
  --excluded: ${excluded};
  --accent2: ${accent2};
  --accent3: ${accent3};

  --tag-name-color: ${tags};
  --attribute-name-color: ${attributes};
  --comment-color: ${comments};
  --keyword-color: ${keywords};
  --error-color: ${errors};
  --var-color: ${vars};
  --operator-color: ${operators};
  --function-color: ${functions};
  --string-color: ${strings};
  --number-color: ${numbers};
  --link-color: ${links};
  --text-color: ${foreground};
  }
`;
  },
};