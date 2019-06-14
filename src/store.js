import {writable} from 'svelte/store';
import {DEVTOOLS_FONT, DEVTOOLS_SIZE, DEVTOOLS_THEME, storage} from './storage';

class App {
  constructor(data) {
    this._currentTheme = null;
    this._currentFontSize = null;
    this._currentFontFamily = null;

    /**
     * List of available themes
     * @type {Array}
     */
    this.themes = [];

    /**
     * Whether the notification should be available
     * @type {boolean}
     */
    this.notifying = false;

    // Import data
    Object.assign(this, data);
  }

  get currentTheme() {
    return this._currentTheme;
  }

  set currentTheme(value) {
    this._notify(this._currentTheme, value);
    this._currentTheme = value;
    this.saveTheme(value);
  }

  get currentFontSize() {
    return this._currentFontSize;
  }

  set currentFontSize(value) {
    this._notify(this._currentFontSize, value);
    this._currentFontSize = value;
    this.saveFontSize(value);
  }

  get currentFontFamily() {
    return this._currentFontFamily;
  }

  set currentFontFamily(value) {
    this._notify(this._currentFontFamily, value);
    this._currentFontFamily = value;
    this.saveFontFamily(value);
  }

  /**
   * Find a theme by name
   * @param name
   * @returns {*}
   */
  getTheme(name = '') {
    return this.themes.find((theme) => theme.name === name);
  }

  /**
   * Save selected theme
   * @param name
   */
  saveTheme({name} = {}) {
    storage.set({[DEVTOOLS_THEME]: name}, () => {});
  }

  /**
   * Save selected font family
   * @param family
   */
  saveFontFamily({family} = {}) {
    storage.set({[DEVTOOLS_FONT]: family}, () => {});
  }

  /**
   * Save selected font size
   * @param size
   */
  saveFontSize({size} = {}) {
    storage.set({[DEVTOOLS_SIZE]: size}, () => {});
  }

  /**
   * Fetch settings
   */
  fetchSettings() {
    /** Get current theme setting from storage */
    storage.get(DEVTOOLS_THEME, object => {
      this.currentTheme = this.getTheme(object[DEVTOOLS_THEME]);
    });

    /** Get current theme setting from storage */
    storage.get(DEVTOOLS_FONT, object => {
      this.currentFontFamily = object[DEVTOOLS_FONT];
    });

    /** Get current theme setting from storage */
    storage.get(DEVTOOLS_SIZE, object => {
      // let objectElement = object['devtools-theme'];
      this.currentFontSize = object[DEVTOOLS_SIZE];
    });
  }

  /**
   * Trigger a notification by setting a notify flag if the value changes
   * @param oldValue
   * @param newValue
   * @private
   */
  _notify(oldValue, newValue) {
    if (oldValue !== newValue) {
      this.notifying = true;
      setTimeout(this._clearNotify, 5000);
    }
  }

  /**
   * Clear the notification state by unsetting a flag
   * @param _
   * @private
   */
  _clearNotify(_) {
    return app.update(app => new App({...app, notifying: false}));
  }
}

export const app = writable(new App());