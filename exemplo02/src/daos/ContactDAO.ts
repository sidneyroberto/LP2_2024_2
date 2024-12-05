import { join } from "path";
import { readFileSync } from "fs";

import { Contact } from "../models/Contact";
import { ContactCreationError } from "../errors/ContactCreationError";
import { ContactErrorMessages } from "../enums/ContactErrorMessages";

export abstract class ContactDAO {
  protected _contacts: Contact[];
  protected _strContent: string;

  constructor(filename: string) {
    const filePath = join(__dirname, "..", "data", filename);
    this._strContent = readFileSync(filePath, "utf-8");
  }

  save(contact: Contact) {
    if (!this.findUserByEmail(contact.email)) {
      this._contacts.push(contact);

      this.flush();
    } else {
      throw new ContactCreationError(
        ContactErrorMessages.EMAIL_ALREADY_EXISTS_MESSAGE
      );
    }
  }

  /**
   * Recupera um contato pelo seu e-mail único.
   * @param email o e-mail do contato
   * @returns o contacto encontrado ou undefined
   */
  findUserByEmail(email: string) {
    const contact = this._contacts.find((c) => c.email === email);
    return contact;
  }

  /**
   * Faz a descarga dos dados no arquivo fonte.
   */
  abstract flush(): void;
}
