"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const higherorlower_1 = __importDefault(require("./higherorlower"));
exports.default = {
    hol: higherorlower_1.default,
    HigherOrLower: higherorlower_1.default,
    author: require("./package.json").author,
    version: require("./package.json").version,
};
