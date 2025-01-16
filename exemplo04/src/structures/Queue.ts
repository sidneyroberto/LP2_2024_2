import { ListStructure } from "./ListStructure";

export class Queue<T> extends ListStructure<T> {
  enqueue(newValue: T): void {
    this._values.push(newValue);
  }

  dequeue(): T | undefined {
    if (this._values.length > 0) {
      const value = this._values[0];
      this._values = this._values.slice(1);
      return value;
    }

    return undefined;
  }
}
