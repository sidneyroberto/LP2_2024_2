import { BankAccount } from "./BankAccount";
import { Client } from "./Client";

let client: Client;
let account: BankAccount;
let formatter: Intl.NumberFormat;

/**
 * Cria uma suíte de testes com a função describe
 */
describe("Tests over bank account use cases", () => {
  beforeAll(() => {
    formatter = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "brl",
    });

    client = new Client("Fulano de Tal", "000.000.000-00");
  });

  beforeEach(() => {
    account = new BankAccount("12345-6", "123-4", client);
  });

  it("should have 0 balance when account is created", () => {
    const balance = account.statement(); //R$ 0,00
    const expectedValue = formatter.format(0);
    expect(balance).toBe(expectedValue);
  });

  it("should allow a positive deposit", () => {
    const value = 25.75;
    account.deposit(value);
    const formatedValue = formatter.format(value);
    const balance = account.statement();
    expect(formatedValue).toBe(balance);
  });

  it("should not allow a negative deposit", () => {
    const value = -75.57;
    account.deposit(value);
    const formatedValue = formatter.format(0);
    const balance = account.statement();
    expect(formatedValue).toBe(balance);
  });

  it("should allow an withdraw when there is available balance", () => {
    const depositValue = 200;
    account.deposit(depositValue);
    const withdrawValue = 150;
    account.withdraw(withdrawValue);
    const expectedBalance = formatter.format(depositValue - withdrawValue);
    const balance = account.statement();
    expect(balance).toBe(expectedBalance);
  });

  it("should not allow an withdraw of a negative value", () => {
    const depositValue = 200;
    account.deposit(depositValue);
    const withdrawValue = -65;
    account.withdraw(withdrawValue);
    const expectedBalance = formatter.format(depositValue);
    const balance = account.statement();
    expect(balance).toBe(expectedBalance);
  });

  it("should not allow an withdraw when there is no available balance", () => {
    const withdrawValue = 70;
    account.withdraw(withdrawValue);
    const expectedBalance = formatter.format(0);
    const balance = account.statement();
    expect(balance).toBe(expectedBalance);
  });
});
