import { EquilateralTriangle } from "../models/EquilateralTriangle";
import { Square } from "../models/Square";
import { PolygonUtils } from "./PolygonUtils";

let square: Square;
const squareSide = 5;
let triangle: EquilateralTriangle;
const triangleSide = 5;

describe("Tests over PolygonUtils", () => {
  beforeEach(() => {
    square = new Square(squareSide);
    triangle = new EquilateralTriangle(triangleSide);
  });

  it("should sum areas from 2 polygons correctly", () => {
    const sum = PolygonUtils.sumAreas(square, triangle);
    const a1 = square.area();
    const a2 = triangle.area();
    expect(sum).toBe(a1 + a2);
  });

  it("should sum areas from various polygons correctly", () => {
    const square2 = new Square(4);
    const triangle2 = new EquilateralTriangle(4);
    const sum = PolygonUtils.sumAreas(square, square2, triangle, triangle2);
    const a1 = square.area();
    const a2 = square2.area();
    const a3 = triangle.area();
    const a4 = triangle2.area();
    expect(sum).toBe(a1 + a2 + a3 + a4);
  });
});
