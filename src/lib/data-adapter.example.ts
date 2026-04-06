import { AsyncReturn } from "@typedly/data";
import { DataAdapterShape } from "../public-api";

export class ExampleDataAdapter<
  T,
  R extends boolean = false
> implements DataAdapterShape<T, R> {

  constructor(
    public async = false as R,
    public value: T,
    public version?: string,
  ) {
  }

  clear(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }
  destroy(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }
  getValue(): AsyncReturn<R, T> {
    return this.value as AsyncReturn<R, T>;
  }
  lock(): this {
    return this;
  }
  setValue(value: T): AsyncReturn<R, this> {
    this.value = value;
    return this as AsyncReturn<R, this>;
  }
}
/*
const adapter: ExampleDataAdapter<Set<string | number>, {
    async: true;
}, true>
*/
const adapter = new ExampleDataAdapter(true, new Set([1, '2']), '1.0.0');
