const { randomItem } = require("./functions/random");

class HigherOrLower {
  /**
   * **⚠ You may not instantiate the HigherOrLower class! ⚠**
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
}

module.exports = HigherOrLower;