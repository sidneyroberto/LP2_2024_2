import { join } from "path";
import { writeFileSync } from "fs";

import { Contact } from "../models/Contact";
import { ContactDAO } from "./ContactDAO";

export class ContactCsvDAO extends ContactDAO {
  constructor() {
    super("contacts.csv");

    const arr = this._strContent.split("\n").slice(1);
    arr.forEach((c) => {
      const values = c.split(",");
      const name = values[0];
      const email = values[1];
      const phone = values[2];
      const address = values[3];
      const birthday = new Date(values[4]);

      const contact = new Contact(name, phone, email, address, birthday);
      this._contacts.push(contact);
    });
  }

  flush(): void {
    let contactsStr = "NOME,E-MAIL,TELEFONE,ENDEREÇO,DATA DE NASCIMENTO\n";
    this._contacts.forEach((c) => {
      contactsStr += `${c.name},${c.email},${c.phone},${
        c.address
      },${c.birthday.toDateString()}\n`;
    });

    const filePath = join(__dirname, "..", "data", "contacts.csv");
    writeFileSync(filePath, contactsStr);
  }
}
