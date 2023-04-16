"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __importDefault(require("./functions/random"));
class HigherOrLower {
    /**
     * **⚠ You may not instantiate the Canvabase class! ⚠**
     * @hideconstructor
     */
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
    }
    /**
     *
     * @param {string} name file name
     * @returns {void}
     */
    static random() {
        return (0, random_1.default)();
    }
}
exports.default = HigherOrLower;
