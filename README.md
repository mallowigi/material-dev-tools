# DevTools Material Theme

This is a Chrome extension that applies a different colour theme to the Chrome developer tools.

![Theme Screenshot](https://github.com/mallowigi/material-dev-tools/raw/master/docs/oceanic.png "Material Theme")

## Getting Started

The extension can be downloaded via the Google Chrome web store: 
[DevTools Material Theme](https://chrome.google.com/webstore/detail/material-theme-ui-for-dev/ejjjgkmkicngofngkjdcahlhnmmoicim)

If you want to make your own adjustments, you can also clone this repository and sideload the extension, adhering to the installation guidelines below.
Either way, make sure that the following prerequisites are met before you perform the installation. Also, ensure that you have switched to the native dark theme of the devtools to see a difference.

### Prerequisites

You need to have the Developer Mode for Chrome extensions activated:
1. navigate to ```chrome://extensions/```
2. toggle the _Developer Mode_ switch

As a further requirement, Developer Tools experiments must be enabled and custom UI themes allowed:
1. navigate to ```chrome://flags/#enable-devtools-experiments```
2. enable the _Developer Tools experiments_ flag
3. in the settings panel of your Developer Tools, toggle the _Allow custom UI themes_ experiment

### Development

Clone this repository:

```
git clone https://github.com/mallowigi/material-dev-tools
```

In the ```chrome://extensions/``` window, use the _Load unpacked_ button to load this extension from the location where
you cloned the repository.

To test the new theme, make sure the extension is activated and open the Chrome devtools on a page of your choosing. As
this theme is meant as a replacement for the dark theme, you first need to switch to the native dark theme of the 
devtools to see any effect.

### Building the styles

To make sure that you are using the most up to date styles, or if you want to make your own adjustments, use the provided
Gulp task to rebuild from source, first making sure that you have installed the necessary dependencies:

#### NPM
```
npm install
```

### Yarn
```
yarn install
```

Then run 
```
npm run watchStyles
```

to generate the new CSS file. Refresh the browser and ta-da!

---------

### Building the extension

The extension itself is built with Svelte 3.0. To understand the development with svelte, please refer to the documentation.

Simply run 

```
npm run dev
```

to trigger the build process and watch for changes. Now every change you make will be reflected on the browser.

----

## Built With

* [SASS](https://sass-lang.com/) - CSS preprocessing
* [Gulp](https://gulpjs.com/) - Automation
* [Svelte](https://svelte.dev/) - Web Framework
* [Yarn](https://yarnpkg.com/) - Dependency management

## Acknowledgments

Thanks for [Jonas Augsburger](https://chrome.google.com/webstore/detail/material-devtools-theme/pmlofkkoaahmkmmebdkkcljmflocijlo) for the original devtools plugin, and [Mike King](https://chrome.google.com/webstore/detail/devtools-author/egfhcfdfnajldliefpdoaojgahefjhhi) for the inspiration for the Options Panel!
