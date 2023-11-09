// console.log("Welcome to node.js!!!!")

// const twoArr = require("./contacts.mjs");
// console.log(twoArr);

// const {abc} = require("./contacts.mjs");
// console.log(abc);

// import alphabetAndNumb from "./contacts.js"
// console.log(alphabetAndNumb);

// const fs = require("fs/promises");
// import fs from "fs/promises";
// import db from "./db";

// const contactsPath = require("./db/contacts.json");


const books = require("./db");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
  }
};

invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });






// const readFile = async () => {
//   const data = await fs.readFile("./db/file.txt", "utf-8");
//   console.log(data);
// };

// readFile();

// const addText = async () => {
//   const text = await fs.appendFileFile("./db/file.txt", "\nQWERTYUIO");
//   console.log(text);
// };

// addText();
