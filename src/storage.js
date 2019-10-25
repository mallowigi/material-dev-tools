export const SETTINGS = 'devtools-settings';
export const DEVTOOLS_THEME = 'devtools-theme';
export const DEVTOOLS_FONT = 'devtools-font';
export const DEVTOOLS_SIZE = 'devtools-size';
export const DEVTOOLS_CURRENT = 'devtools-current';
export const DEVTOOLS_ACCENT_COLOR = 'devtools-accent-color';

const chromeStorage = chrome.storage && chrome.storage.sync;
const fakeStorage = {

  async get(property, fn = () => {}) {
    let item = await localStorage.getItem(SETTINGS);
    try {
      const settings = item ? JSON.parse(item) : {};
      fn(settings);
    } catch (e) {
      fn({});
    }
  },

  set(settings, fn = () => {}) {
    let oldItem = localStorage.getItem(SETTINGS) || '{}';
    try {
      const oldSettings = JSON.parse(oldItem);
      const newSettings = {...oldSettings, ...settings};

      if (chromeStorage) {
        chromeStorage.set({[SETTINGS]: JSON.stringify(newSettings)}, () => {});
      }
      localStorage.setItem(SETTINGS, JSON.stringify(newSettings));
      fn(settings);
    } catch (e) {
      fn({});
    }
  },
};

// export const storage = chrome.storage.sync;
export const storage = fakeStorage;
