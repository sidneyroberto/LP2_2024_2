import { PolygonErrorMessages } from "../enums/PolygonErrorMessages";
import { PolygonCreationError } from "../errors/PolygonCreationError";
import { IPolygon } from "./IPolygon";

export class Square implements IPolygon {
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
   * Calculate the area of the square.
   * @returns The value of the area.
   */
  area(): number {
    return this._side * this._side;
  }

  /**
   * Calculate the perimeter of the square.
   * @returns The value of the perimeter.
   */
  perimeter(): number {
    return this._side * 4;
  }
}
