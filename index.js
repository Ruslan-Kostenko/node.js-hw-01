const contactFunc = require("./contacts");
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <action>", "choose action")
  .option("-i, --id <id>", "user id")
  .option("-n, --name <name>", "user name")
  .option("-e, --email <email>", "user email")
  .option("-p, --phone <phone>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactFunc.listContacts();
      return console.table(contacts);

    case "get":
      const contact = await contactFunc.getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await contactFunc.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const removeContact = await contactFunc.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
