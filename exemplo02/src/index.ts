import { Contact } from "./models/Contact";

const contact = new Contact();

// Acessa o setter de  _name
contact.name = "Sidney Sousa";

// Acessa o getter de _name
const contactName = contact.name;
console.log(contactName);
