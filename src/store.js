import {writable} from 'svelte/store';
import {DEVTOOLS_FONT, DEVTOOLS_SIZE, DEVTOOLS_THEME, SETTINGS, storage} from './storage';

/**
 * @typedef Theme {object}
 * @property {string} name
 * @property {string[]} colors
 */
class App {
  constructor(data) {
    /**
     * The current theme
     * @type {?Theme}
     * @private
     */
    this._currentTheme = null;
    /**
     * The current theme name
     * @type {null}
     * @private
     */
    this._currentThemeName = null;
    /**
     * The current font size
     * @type {?number}
     * @private
     */
    this._currentFontSize = null;
    /**
     * The current font family
     * @type {?string}
     * @private
     */
    this._currentFontFamily = null;

    /**
     * List of available themes
     * @type {Theme[]}
     */
    this.themes = [];
    /**
     * Loading state
     * @type {boolean}
     */
    this.loading = true;
    /**
     * Whether the notification should be available
     * @type {boolean}
     */
    this.notifying = false;

    this.defaults = {
      fontSize: 14,
      fontFamily: 'Menlo',
      themeName: 'Default',
    };

    // Import data
    Object.assign(this, data);
  }

  /**
   * Returns the current theme
   * @returns {?Theme}
   */
  get currentTheme() {
    return this._currentTheme;
  }

  /**
   * Sets the current theme
   * @param {Theme} value
   */
  set currentTheme(value) {

    if (value) {
      // Simulate changing colors
      this._currentTheme = {name: value.name, colors: []};
      setTimeout(() => app.update($app => new App({...$app, _currentTheme: {...value}})), 100);
    }
  }

  get currentThemeName() {
    return this._currentThemeName;
  }

  set currentThemeName(name) {
    this._notify(this._currentTheme, name);
    this._currentThemeName = name;
    this.saveTheme(name);

    // Find and set current theme
    this.currentTheme = this.getTheme(name);
  }

  /**
   * Returns the current font size
   * @returns {?number}
   */
  get currentFontSize() {
    return this._currentFontSize;
  }

  /**
   * Sets the current font size
   * @param {number} value
   */
  set currentFontSize(value) {
    this._notify(this._currentFontSize, value);
    this._currentFontSize = value;
    this.saveFontSize(value);
  }

  /**
   * Returns the current font family
   * @returns {?string}
   */
  get currentFontFamily() {
    return this._currentFontFamily;
  }

  /**
   * Sets the current font family
   * @param {string} value
   */
  set currentFontFamily(value) {
    this._notify(this._currentFontFamily, value);
    this._currentFontFamily = value;
    this.saveFontFamily(value);
  }

  /**
   * Find a theme by name
   * @param {string} name
   * @returns {?Theme}
   */
  getTheme(name = '') {
    return this.themes.find((theme) => theme.name === name);
  }

  /**
   * Save selected theme
   * @param {string} name
   */
  saveTheme(name) {
    storage.set({[DEVTOOLS_THEME]: name}, () => {});
  }

  /**
   * Save selected font family
   * @param {string} family
   */
  saveFontFamily(family) {
    storage.set({[DEVTOOLS_FONT]: family}, () => {});
  }

  /**
   * Save selected font size
   * @param {number} size
   */
  saveFontSize(size) {
    storage.set({[DEVTOOLS_SIZE]: size}, () => {});
  }

  /**
   * Fetch settings
   */
  fetchSettings() {
    /** Get current theme setting from storage */
    return storage.get(SETTINGS, object => {
      this.currentThemeName = object[DEVTOOLS_THEME] || this.defaults.themeName;
      this.currentFontFamily = object[DEVTOOLS_FONT] || this.defaults.fontFamily;
      this.currentFontSize = object[DEVTOOLS_SIZE] || this.defaults.fontSize;
    });

  }

  /**
   * Trigger a notification by setting a notify flag if the value changes
   * @param oldValue
   * @param newValue
   * @private
   */
  _notify(oldValue, newValue) {
    if (oldValue && oldValue !== newValue) {
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