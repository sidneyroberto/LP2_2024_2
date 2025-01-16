import { ListStructure } from "./ListStructure";

export class Stack<T> extends ListStructure<T> {
  push(newValue: T): void {
    this._values.push(newValue);
  }

  pop(): T | undefined {
    return this._values.pop();
  }
}
