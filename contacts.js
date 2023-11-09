const fs = require("node:fs/promises");
const path = require("node:path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const readContacts = async () => {
  const data = await fs.readFile(contactsPath, "UTF-8");
  const contacts = JSON.parse(data);

  return contacts;
};

const writeContacts = async (contacts) => {
  const newContacts = await fs.writeFile(
    contactsPath,
    JSON.stringify(contacts, null, 2)
  );

  return newContacts;
};

async function listContacts() {
  const contacts = await readContacts();

  return contacts;
}

async function getContactById(contactId) {
  const contacts = await readContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  return contact;
}

async function removeContact(contactId) {
  const contacts = await readContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return undefined;
  }

  const newContacts = [
    ...contacts.slice(0, index),
    ...contacts.slice(index + 1),
  ];
  await writeContacts(newContacts);

  return contacts[index];
}

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await writeContacts(contacts);
  
  return newContact;
}
module.exports = {
  addContact,
  listContacts,
  removeContact,
  getContactById,
};
