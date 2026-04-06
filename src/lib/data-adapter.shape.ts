// Interface.
import type { DataShape } from '@typedly/data';
/**
 * @description The adapter interface for data types.
 * @export
 * @interface DataAdapterShape
 * @template T The type of the data value.
 * @template {boolean} [R=false] The type of the return values for methods.
 * @extends {DataShape<T, R>}
 */
export interface DataAdapterShape<
  T,
  R extends boolean = false
> extends DataShape<T, R> {
  version?: string;
}
