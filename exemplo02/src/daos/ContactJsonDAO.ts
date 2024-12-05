import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

import { Contact } from "../models/Contact";
import { ContactCreationError } from "../errors/ContactCreationError";
import { ContactErrorMessages } from "../enums/ContactErrorMessages";
import { ContactDAO } from "./ContactDAO";

export class ContactJsonDAO extends ContactDAO {
  constructor() {
    super("contacts.json");

    const contacts = JSON.parse(this._strContent);
    this._contacts = contacts.map((c) => {
      const { _name, _phone, _email, _address, _birthday } = c;
      return new Contact(_name, _phone, _email, _address, new Date(_birthday));
    });
  }

  flush(): void {
    const contactsStr = JSON.stringify(this._contacts);
    const filePath = join(__dirname, "..", "data", "contacts.json");
    writeFileSync(filePath, contactsStr);
  }
}
