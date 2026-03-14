import { DataSettings } from "@typedly/data";
import { AsyncReturn, DataConfig } from "@typedly/data";
import { DataAdapterShape } from "./data-adapter.shape";

export class ExampleDataAdapter<
  T,
  C extends DataSettings<R> | undefined = undefined,
  R extends boolean = C extends DataSettings<infer U> ? U extends boolean ? U : false : false
> implements DataAdapterShape<DataConfig<C, R>, T, R> {
  public configuration: DataConfig<C, R>;
  constructor(
    public value: T,
    public settings?: C,
    public version?: string,
    public async = this.settings?.async ?? false as R
  ) {
    this.configuration = (settings ?? {}) as DataConfig<C, R>;
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
  lock(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
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
const adapter = new ExampleDataAdapter(new Set([1, '2']), {async: true}, '1.0.0');
