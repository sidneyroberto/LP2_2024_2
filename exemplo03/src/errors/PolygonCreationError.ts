import { PolygonErrorMessages } from "../enums/PolygonErrorMessages";

export class PolygonCreationError extends Error {
  constructor(message: PolygonErrorMessages) {
    super(message);
  }
}
