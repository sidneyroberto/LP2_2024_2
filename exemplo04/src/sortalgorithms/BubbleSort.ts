export class BubbleSort<T> {
  private _values: T[];
  private _comparisonFunction: (a: T, b: T) => boolean;

  constructor(values: T[], comparisonFunction: (a: T, b: T) => boolean) {
    this._values = values;
    this._comparisonFunction = comparisonFunction;
  }

  sort() {
    for (let i = 0; i < this._values.length - 1; i++) {
      for (let j = i + 1; j < this._values.length; j++) {
        const a = this._values[i];
        const b = this._values[j];

        if (this._comparisonFunction(a, b)) {
          this._values[i] = b;
          this._values[j] = a;
        }
      }
    }
  }

  get values() {
    return this._values;
  }
}
