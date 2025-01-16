import { Animal } from "../models/Animal";
import { Stack } from "./Stack";

let stack: Stack<Animal>;
let animal1: Animal;
let animal2: Animal;

describe("Tests over Stack class", () => {
  beforeEach(() => {
    stack = new Stack<Animal>();
    animal1 = {
      habitat: "jungle",
      popularName: "Jaguar",
      scientificName: "Panthera Onca",
    };

    animal2 = {
      habitat: "montane regions",
      popularName: "Giant Panda",
      scientificName: "Ailuropoda melanoleuca",
    };

    stack.push(animal1);
    stack.push(animal2);
  });

  it("should push values correctly", () => {
    expect(stack.values[0]).toStrictEqual(animal1);
    expect(stack.values[1]).toStrictEqual(animal2);
  });

  it("should pop values correctly", () => {
    expect(stack.pop()).toStrictEqual(animal2);
    expect(stack.pop()).toStrictEqual(animal1);
    expect(stack.pop()).toStrictEqual(undefined);
  });

  it("should clear the stack correctly", () => {
    stack.clear();
    expect(stack.values.length).toBe(0);
  });
});
