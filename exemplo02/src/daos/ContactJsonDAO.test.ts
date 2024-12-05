import { join } from "path";
import { readFileSync } from "fs";

import { ContactJsonDAO } from "./ContactJsonDAO";
import { Contact } from "../models/Contact";
import { generateContacts } from "../generateContacts";
import { ContactCreationError } from "../errors/ContactCreationError";
import { ContactErrorMessages } from "../enums/ContactErrorMessages";

let dao: ContactJsonDAO;

describe("Tests over ContactJsonDAO class", () => {
  beforeAll(() => {
    generateContacts();
    dao = new ContactJsonDAO();
  });

  it("should save a new contact with distinct email", () => {
    const contact = new Contact(
      "Fulano de Tal",
      "(99) 99999-9999",
      "fulano@email.com",
      "Rua dos Fulanos, 123",
      new Date("1990-12-25")
    );

    dao.save(contact);

    const filePath = join(__dirname, "..", "data", "contacts.json");
    const contactsStr = readFileSync(filePath, "utf-8");
    const contactsArr = JSON.parse(contactsStr);
    const lastContact = contactsArr[contactsArr.length - 1];
    expect(lastContact._email).toBe(contact.email);
  });

  it("should not save a contact with an already existing email", () => {
    const contact = new Contact(
      "Fulano de Tal",
      "(99) 99999-9999",
      "fulano@email.com",
      "Rua dos Fulanos, 123",
      new Date("1990-12-25")
    );

    try {
      dao.save(contact);
      fail("It allowed a contact with an already existig email to be saved");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(
        ContactErrorMessages.EMAIL_ALREADY_EXISTS_MESSAGE
      );
    }
  });
});
