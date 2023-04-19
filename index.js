const HigherOrLower = require("./src/higherorlower")

module.exports = {
  hol: HigherOrLower,
  HigherOrLower,
  random: HigherOrLower.random,
  author: require("./package.json").author,
  version: require("./package.json").version,
};
