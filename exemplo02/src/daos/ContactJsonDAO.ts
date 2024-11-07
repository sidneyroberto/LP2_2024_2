import { join } from "path";

import { Contact } from "../models/Contact";
import { readFileSync, writeFileSync } from "fs";
import { ContactCreationError } from "../errors/ContactCreationError";
import { ContactErrorMessages } from "../enums/ContactErrorMessages";

export class ContactJsonDAO {
  private _contacts: Contact[];

  constructor() {
    const filePath = join(__dirname, "..", "data", "contacts.json");
    const contactsStr = readFileSync(filePath, "utf-8");
    const contacts = JSON.parse(contactsStr);
    this._contacts = contacts.map((c) => {
      const { _name, _phone, _email, _address, _birthday } = c;
      return new Contact(_name, _phone, _email, _address, new Date(_birthday));
    });
  }

  save(contact: Contact) {
    if (!this.findUserByEmail(contact.email)) {
      this._contacts.push(contact);
      const contactsStr = JSON.stringify(this._contacts);
      const filePath = join(__dirname, "..", "data", "contacts.json");
      writeFileSync(filePath, contactsStr);
    } else {
      throw new ContactCreationError(
        ContactErrorMessages.EMAIL_ALREADY_EXISTS_MESSAGE
      );
    }
  }

  findUserByEmail(email: string) {
    const contact = this._contacts.find((c) => c.email === email);
    return contact;
  }
}
