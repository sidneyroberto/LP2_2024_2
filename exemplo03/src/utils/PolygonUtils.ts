import { IPolygon } from "../models/IPolygon";

export class PolygonUtils {
  static sumAreas(...polygons: IPolygon[]): number {
    return polygons.reduce((sum, p) => sum + p.area(), 0);
  }
}
