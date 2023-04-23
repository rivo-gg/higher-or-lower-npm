const data = require("./data.json");

const randomItem = () => {
  const randomNumber = Math.floor(Math.random() * data.length);

  return data[randomNumber];
};

module.exports = { randomItem };
