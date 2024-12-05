import { ContactErrorMessages } from "../enums/ContactErrorMessages";
import { ContactCreationError } from "../errors/ContactCreationError";
import { generateContacts } from "../generateContacts";
import { Contact } from "../models/Contact";
import { ContactCsvDAO } from "./ContactCsvDAO";

let dao: ContactCsvDAO;

describe("Tests over ContactCsvDAO class", () => {
  beforeAll(() => {
    generateContacts();
    dao = new ContactCsvDAO();
  });

  it("should save a new contact with distinct email", () => {
    const contact = new Contact({
      name: "Fulano de Tal",
      phone: "(99) 99999-9999",
      email: "fulano@email.com",
      address: "Rua dos Fulanos, 123",
      birthday: new Date("1990-12-25"),
    });

    dao.save(contact);
    const savedContact = dao.findUserByEmail(contact.email);
    expect(savedContact.email).toBe(contact.email);
  });

  it("should not save a contact with an already existing email", () => {
    const contact = new Contact({
      name: "Fulano de Tal",
      phone: "(99) 99999-9999",
      email: "fulano@email.com",
      address: "Rua dos Fulanos, 123",
      birthday: new Date("1990-12-25"),
    });

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
