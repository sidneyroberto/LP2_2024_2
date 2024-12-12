import { PolygonErrorMessages } from "../enums/PolygonErrorMessages";
import { PolygonCreationError } from "../errors/PolygonCreationError";
import { EquilateralTriangle } from "./EquilateralTriangle";

describe("Tests over EquilateralTriangle", () => {
  it("should calculate area correctly", () => {
    const triangle = new EquilateralTriangle(5);
    const area = triangle.area();
    const expectedArea = "10.83";
    expect(area.toFixed(2)).toBe(expectedArea);
  });

  it("should calculate perimeter correctly", () => {
    const triangle = new EquilateralTriangle(5);
    const perimeter = triangle.perimeter();
    const expectedPerimeter = 15;
    expect(perimeter).toBe(expectedPerimeter);
  });

  it("should not instantiate a triangle with invalid side value", () => {
    try {
      new EquilateralTriangle(0);
      fail("It allowed to instantiate a triangle with invalid side value");
    } catch (err) {
      expect(err).toBeInstanceOf(PolygonCreationError);
      expect(err.message).toBe(PolygonErrorMessages.NON_POSITIVE_SIDE_ERROR);
    }
  });
});
