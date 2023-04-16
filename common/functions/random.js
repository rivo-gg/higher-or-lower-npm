"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const data = (0, fs_1.readFile)("data.json", (err, data) => {
    if (err) {
        console.log(err);
        return null;
    }
    return data;
});
function randomItem() {
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];
}
exports.default = randomItem;
