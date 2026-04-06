/// Interface
import type { DataAdapterShape } from "./data-adapter.shape";
/**
 * @description The constructor interface for data adapters.
 * @export
 * @interface DataAdapterConstructor
 * @template {DataAdapterShape<T, R> | undefined} I The adapter instance type, which can be undefined for more flexible inference.
 * @template T = The underlying value type, inferred from I if possible.
 * @template {boolean} R The async flag, inferred from I if possible.
 * @template {readonly any[]} [G=[]] Additional arguments.
 */
export interface DataAdapterConstructor<
  I extends DataAdapterShape<T, R> | undefined,
  T,
  R extends boolean,
  G extends readonly any[] = []
> {
  new (
    value?: T,
    ...args: G
  ): I;
}
