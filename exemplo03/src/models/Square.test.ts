import { PolygonErrorMessages } from "../enums/PolygonErrorMessages";
import { PolygonCreationError } from "../errors/PolygonCreationError";
import { Square } from "./Square";

describe("Tests over Square", () => {
  it("should calculate area correctly", () => {
    const square = new Square(5);
    const area = square.area();
    const expectedArea = 25;
    expect(area).toBe(expectedArea);
  });

  it("should calculare perimeter correctly", () => {
    const square = new Square(5);
    const perimeter = square.perimeter();
    const expectedPerimeter = 20;
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("should not instantiate an square with invalid side value", () => {
    try {
      new Square(0);
      fail("It allowed to instantiate a ");
    } catch (err) {
      expect(err).toBeInstanceOf(PolygonCreationError);
      expect(err.message).toBe(PolygonErrorMessages.NON_POSITIVE_SIDE_ERROR);
    }
  });
});
