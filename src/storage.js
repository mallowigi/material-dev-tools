export const SETTINGS = 'devtools-settings';
export const DEVTOOLS_THEME = 'devtools-theme';
export const DEVTOOLS_FONT = 'devtools-font';
export const DEVTOOLS_SIZE = 'devtools-size';

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

  async set(settings, fn = () => {}) {
    let oldItem = await localStorage.getItem(SETTINGS) || '{}';
    try {
      const oldSettings = JSON.parse(oldItem);
      const newSettings = {...oldSettings, ...settings};

      if (chromeStorage) {
        chromeStorage.set({[SETTINGS]: JSON.stringify(newSettings)}, () => {});
      }
      await localStorage.setItem(SETTINGS, JSON.stringify(newSettings));
      fn(settings);
    } catch (e) {
      fn({});
    }
  },
};

// export const storage = chrome.storage.sync;
export const storage = fakeStorage;
