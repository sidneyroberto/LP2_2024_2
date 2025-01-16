export class ListStructure<T> {
  protected _values: T[];

  constructor() {
    this._values = [];
  }

  clear(): void {
    this._values = [];
  }

  get values() {
    return this._values;
  }
}
