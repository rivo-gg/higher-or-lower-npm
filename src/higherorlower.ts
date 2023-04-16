import randomItem from "./functions/random";

export default class HigherOrLower {
  /**
   * **⚠ You may not instantiate the Canvabase class! ⚠**
   * @hideconstructor
   */
  constructor() {
    throw new Error(
      `The ${this.constructor.name} class may not be instantiated!`
    );
  }

  /**
   * 
   * @param {string} name file name
   * @returns {void}
   */
  static random() {
    return randomItem();
  }

  // http://api.higherlowergame.com/_client/images/general/IMAGE
}
