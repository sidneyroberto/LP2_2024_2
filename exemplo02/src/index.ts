import { Contact } from "./models/Contact";

const name = "Fulano de Tal";
const phone = "(99) 99999-9999";
const email = "fulano@email.com";
const birthday = new Date("2050-02-01");

const contact = new Contact({ email, name, phone, birthday });
console.log(contact);
