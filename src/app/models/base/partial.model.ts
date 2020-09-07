export class PartialModel<T> {
  constructor(partial?: Partial<T>) {
    Object.assign(this, partial);
  }
}
