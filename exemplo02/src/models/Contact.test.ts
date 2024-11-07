import { ContactErrorMessages } from "../enums/ContactErrorMessages";
import { ContactCreationError } from "../errors/ContactCreationError";
import { Contact } from "./Contact";

describe("Tests over Contact class", () => {
  it("should create a contact with valid inputs", () => {
    const nameValue = "Fulano de Tal";
    const phoneValue = "(99) 9999-9999";
    const emailValue = "fulano@email.com";
    const addresValue = "Rua dos Fulanos, 57";
    const birthdayValue = new Date("1990-08-23");

    const contact = new Contact(
      nameValue,
      phoneValue,
      emailValue,
      addresValue,
      birthdayValue
    );

    expect(contact.name).toBe(nameValue);
    expect(contact.phone).toBe(phoneValue);
    expect(contact.email).toBe(emailValue);
    expect(contact.address).toBe(addresValue);
    expect(contact.birthday).toBe(birthdayValue);
  });

  it("should not create a contact with invalid name", () => {
    const nameValue = "Tal";
    const phoneValue = "(99) 99999-9999";
    const emailValue = "fulano@email.com";

    try {
      const contact = new Contact(nameValue, phoneValue, emailValue);
      fail("It allowed to set an invalid name");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(ContactErrorMessages.NAME_ERROR_MESSAGE);
    }
  });

  it("should not create a contact with invalid phone", () => {
    const nameValue = "Fulano de Tal";
    const phoneValue = "12345-6789";
    const emailValue = "fulano@email.com";

    try {
      const contact = new Contact(nameValue, phoneValue, emailValue);
      fail("It allowed to set an invalid phone");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(ContactErrorMessages.PHONE_ERROR_MESSAGE);
    }
  });
});
