const fs = require("fs/promises");
const path = require("path");

const getAll = async () => {
  const data = await fs.readFile(`${__dirname}/contacts.json`, "UTF-8");

  return JSON.parse(data);
};

module.exports = {
  getAll,
};
