import { generateContacts } from "../generateContacts";
import { ContactCsvDAO } from "./ContactCsvDAO";

let dao: ContactCsvDAO;

describe("Tests over ContactCsvDAO class", () => {
  beforeAll(() => {
    generateContacts();
    dao = new ContactCsvDAO();
  });

  it("should save a new contact with distinct email", () => {});
});
