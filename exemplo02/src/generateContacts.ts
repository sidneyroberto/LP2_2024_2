import { fakerPT_BR as faker } from "@faker-js/faker";
import { join } from "path";
import { writeFileSync } from "fs";

import { Contact } from "./models/Contact";

export const TOTAL = 100;

export const generateContacts = () => {
  const contacts: Contact[] = [];
  let csvLines = "NOME,E-MAIL,TELEFONE,ENDEREÇO,DATA DE NASCIMENTO\n";

  for (let i = 0; i < TOTAL; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;
    const email = faker.internet.email({
      firstName,
      lastName,
      provider: "estudante.ifms.edu.br",
    });
    const address = faker.location.streetAddress({ useFullAddress: true });
    const birthday = faker.date.between({
      from: "1970-01-01",
      to: "2010-12-31",
    });
    const phone = faker.phone.number({ style: "national" });

    const contact = new Contact(fullName, phone, email, address, birthday);
    contacts.push(contact);

    const line = `${fullName},${email},${phone},${address},${birthday.toDateString()}\n`;
    csvLines += line;
  }

  const filesPath = join(__dirname, "data");

  // Salvando o arquivo JSON
  const contactsStr = JSON.stringify(contacts);
  const jsonFileName = join(filesPath, "contacts.json");
  writeFileSync(jsonFileName, contactsStr);

  // Salvando o arquivo CSV
  const csvFileName = join(filesPath, "contacts.csv");
  writeFileSync(csvFileName, csvLines);

  console.log("Mal feito desfeito");
};
