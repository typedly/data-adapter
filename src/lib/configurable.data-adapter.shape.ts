// Interface.
import type { ConfigurableDataShape } from '@typedly/configurable-data';
import type {
  DataSettings,
  // Type.
  InferAsync
} from '@typedly/data';
/**
 * @description The adapter interface for data types with configuration.
 * @export
 * @interface ConfigurableDataAdapterShape
 * @template {DataSettings<R> | undefined} C The type of the configuration object.
 * @template T The type of the data value.
 * @template {boolean} [R=InferAsync<C>] The type of the return values for methods.
 * @extends {ConfigurableDataShape<C, T, R>}
 */
export interface ConfigurableDataAdapterShape<
  C extends DataSettings<R> | undefined,
  T,
  R extends boolean = InferAsync<C>
> extends ConfigurableDataShape<C, T, R> {
  version?: string;
}
