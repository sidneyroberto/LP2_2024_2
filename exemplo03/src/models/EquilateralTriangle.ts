import { PolygonErrorMessages } from "../enums/PolygonErrorMessages";
import { PolygonCreationError } from "../errors/PolygonCreationError";
import { IPolygon } from "./IPolygon";

export class EquilateralTriangle implements IPolygon {
  private _side: number;

  constructor(side: number) {
    this.side = side;
  }

  set side(side: number) {
    if (side > 0) {
      this._side = side;
    } else {
      throw new PolygonCreationError(
        PolygonErrorMessages.NON_POSITIVE_SIDE_ERROR
      );
    }
  }

  /**
   * Calculate the area of the triangle.
   * @returns The area value.
   */
  area(): number {
    return (Math.pow(this._side, 2) * Math.sqrt(3)) / 4;
  }

  /**
   * Calculate the perimeter of the triangle.
   * @returns The perimeter value.
   */
  perimeter(): number {
    return this._side * 3;
  }
}
