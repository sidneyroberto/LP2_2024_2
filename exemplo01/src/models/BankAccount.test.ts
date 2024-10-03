import { BankAccount } from "./BankAccount";
import { Client } from "./Client";

/**
 * Cria uma suíte de testes com a função describe
 */
describe("Tests over bank account use cases", () => {
  it("should have 0 balance when account is created", () => {
    const client = new Client("Fulano de Tal", "000.000.000-00");
    const account = new BankAccount("12345-6", "123-4", client);
    const balance = account.statement(); //R$ 0,00
    const formatter = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "brl",
    });
    const expectedValue = formatter.format(0);
    expect(balance).toBe(expectedValue);
  });
});
