/// Interface
import type { DataAdapterShape } from "./data-adapter.shape";
/**
 * @description The constructor interface for data adapters.
 * @export
 * @interface DataAdapterConstructor
 * @template {DataAdapterShape<T, R> | undefined} I The adapter instance type (can be undefined for adapter-optional generics).
 * @template T = The underlying value type.
 * @template {boolean} R The async flag.
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
