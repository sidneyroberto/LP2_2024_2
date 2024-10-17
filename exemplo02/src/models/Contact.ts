export class Contact {
  private _name: string = "";
  private _phone: string = "";
  private _email: string = "";
  private _address?: string;
  private _birthday?: Date;

  set name(name: string) {
    if (name.trim().length >= 5) {
      this._name = name;
    }
  }

  get name(): string {
    return this._name;
  }
}
