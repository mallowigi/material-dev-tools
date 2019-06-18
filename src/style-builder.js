import {attr} from 'svelte/internal';

export const styleBuilder = {
  styles({
           background,
           foreground,
           primary,
           selBg,
           selFg,
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
  --selBg: ${selBg};
  --selFg: ${selFg};
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