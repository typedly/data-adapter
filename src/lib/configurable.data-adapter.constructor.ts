/// Interface
import type { ConfigurableDataAdapterShape } from "./configurable.data-adapter.shape";
import type { DataSettings } from "@typedly/data";
/**
 * @description The constructor interface for configurable data adapters with configuration.
 * @export
 * @interface ConfigurableDataAdapterConstructor
 * @template {ConfigurableDataAdapterShape<C, T, R> | undefined} I The adapter instance type, which can be undefined for more flexible inference.
 * @template {DataSettings<R>} C The configuration type, inferred from I if possible.
 * @template T= The underlying value type, inferred from I if possible.
 * @template {boolean} R The async flag, inferred from I if possible.
 * @template {readonly any[]} [G=[]] Additional arguments.
 */
export interface ConfigurableDataAdapterConstructor<
  I extends ConfigurableDataAdapterShape<C, T, R> | undefined,
  C extends DataSettings<R>,
  T,
  R extends boolean,
  G extends readonly any[] = []
> {
  new (
    settings: C,
    value?: T,
    ...args: G
  ): I;
}
