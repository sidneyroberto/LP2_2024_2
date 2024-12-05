import { ContactErrorMessages } from "../enums/ContactErrorMessages";
import { ContactCreationError } from "../errors/ContactCreationError";
import { Contact } from "./Contact";

describe("Tests over Contact class", () => {
  it("should create a contact with valid inputs", () => {
    const name = "Fulano de Tal";
    const phone = "(99) 9999-9999";
    const email = "fulano@email.com";
    const address = "Rua dos Fulanos, 57";
    const birthday = new Date("1990-08-23");

    const contact = new Contact({ email, name, phone, address, birthday });

    expect(contact.name).toBe(name);
    expect(contact.phone).toBe(phone);
    expect(contact.email).toBe(email);
    expect(contact.address).toBe(address);
    expect(contact.birthday).toBe(birthday);
  });

  it("should not create a contact with invalid name", () => {
    const name = "Tal";
    const phone = "(99) 99999-9999";
    const email = "fulano@email.com";

    try {
      new Contact({ name, phone, email });
      fail("It allowed to set an invalid name");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(ContactErrorMessages.NAME_ERROR_MESSAGE);
    }
  });

  it("should not create a contact with invalid phone", () => {
    const name = "Fulano de Tal";
    const phone = "12345-6789";
    const email = "fulano@email.com";

    try {
      const contact = new Contact({ name, phone, email });
      fail("It allowed to set an invalid phone");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(ContactErrorMessages.PHONE_ERROR_MESSAGE);
    }
  });

  it("should not create a contact with invalid email", () => {
    const name = "Fulano de Tal";
    const phone = "(99) 99999-9999";
    const email = "fulano.email.com";

    try {
      new Contact({ name, phone, email });
      fail("It allowed to set an invalid email");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(ContactErrorMessages.EMAIL_ERROR_MESSAGE);
    }
  });

  it("should not create a contact with invalid address", () => {
    const name = "Fulano de Tal";
    const phone = "(99) 99999-9999";
    const email = "fulano@email.com";
    const address = "Av 7";

    try {
      new Contact({ name, phone, email, address });
      fail("It allowed to set an invalid address");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(ContactErrorMessages.ADDRESS_ERROR_MESSAGE);
    }
  });

  it("should not create a contact with invalid birthday", () => {
    const name = "Fulano de Tal";
    const phone = "(99) 99999-9999";
    const email = "fulano@email.com";
    const birthday = new Date("2050-02-01");

    try {
      new Contact({ birthday, name, phone, email });
      fail("It allowed to set an invalid birthday");
    } catch (err) {
      expect(err).toBeInstanceOf(ContactCreationError);
      expect(err.message).toBe(ContactErrorMessages.BIRTHDAY_ERROR_MESSAGE);
    }
  });
});
