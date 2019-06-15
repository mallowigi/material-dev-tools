(function (w,
           storage,
           panels) {
  const SETTINGS = 'devtools-settings';
  const DEVTOOLS_THEME = 'devtools-theme';

  async function themeSetup(panel) {
    const css = await fetch('dist/material-style.css').then(res => res.text());
    panels.applyStyleSheet(css);

    storage.get(SETTINGS, object => {
      const theme = object[DEVTOOLS_THEME] || 'Default';
      console.log(theme);
    });
  }

  function init() {
    const pagePath = '/dist/export/index.html';

    panels.create(
      'Material DevTools Settings', //Title
      null,  // icon
      pagePath, // panel html
      themeSetup, // callback
    );
  }

  init();
})(
  window,
  chrome.storage.sync,
  chrome.devtools.panels,
);

