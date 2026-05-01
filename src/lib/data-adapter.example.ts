import { AsyncReturn, DataShape } from "@typedly/data";
import { DataAdapterConstructor, DataAdapterShape } from "../public-api";

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

export class AnyAdapter<T = any, R extends boolean = false> implements DataAdapterShape<T, R> {
  async: R;
  get value(): T {
    return this._value;
  }
  set value(value: T) {
    this._value = value;
  }
  private _value: T;

  constructor(value?: T, ...args: any[]) {
    this.async = false as R;
    this._value = value as T;
  }

  clear(): AsyncReturn<R, this> {
    this.value = undefined as any;
    return this as any;
  }

  destroy(): AsyncReturn<R, this> {
    return this as any;
  }

  getValue(): AsyncReturn<R, T> {
    return this.value as any;
  }

  lock(): this {
    return this;
  }

  setValue(value: T): AsyncReturn<R, this> {
    this.value = value;
    return this as any;
  }
}


export class AsyncAnyAdapter<T = any, R extends boolean = true> implements DataAdapterShape<T, R> {
  async: R;
  get value(): T {
    return this._value;
  }
  set value(value: T) {
    this._value = value;
  }
  private _value: T;

  constructor(value?: T, ...args: any[]) {
    this.async = true as R;
    this._value = value as T;
  }

  clear(): AsyncReturn<R, this> {
    this.value = undefined as any;
    return this as any;
  }

  destroy(): AsyncReturn<R, this> {
    return this as any;
  }

  getValue(): AsyncReturn<R, T> {
    return this.value as any;
  }

  lock(): this {
    return this;
  }

  setValue(value: T): AsyncReturn<R, this> {
    this.value = value;
    return this as any;
  }
}

export class AnyClass<
  A extends DataAdapterShape<T, R> | undefined = undefined,
  T = unknown,
  R extends boolean = A extends DataAdapterShape<any, infer U> ? U extends boolean ? U : false : false,
  G extends readonly any[] = []
>  implements DataShape<T, R> {
  get async(): R {
    return this.#adapter ? this.#adapter.async : false as any;
  }
  get adapter(): A {
    return this.#adapter;
  }
  get value(): T {
    return this.#adapter ? this.#adapter.value : undefined as any;
  }

  #adapter: A;
  constructor(
    value?: T,
    adapter?: DataAdapterConstructor<A, T, R, G>
  ) {
    this.#adapter = adapter ? new adapter(value!, ...([] as unknown as G)) : undefined as any;
  }

  clear(): AsyncReturn<R, this> {
    return this as any;
  }

  destroy(): AsyncReturn<R, this> {
    return this as any;
  }

  getValue(): AsyncReturn<R, T> {
    return this.#adapter ? this.#adapter.getValue() : undefined as any;
  }

  lock(): this {
    return this;
  }

  setValue(value: T): AsyncReturn<R, this> {
    if (this.#adapter) {
      this.#adapter.setValue(value);
    }
    return this as any;
  }

}

// const t: AnyClass<undefined, unknown, false, []>
const t = new AnyClass();

// const t1: AnyClass<undefined, string, false, []>
const t1 = new AnyClass('a');

// const t2: AnyClass<AnyAdapter<unknown, false>, unknown, false, any[]>
const t2 = new AnyClass(undefined as unknown, AnyAdapter);

// const t3: AnyClass<AnyAdapter<string, false>, string, false, any[]>
const t3 = new AnyClass('b' as string, AnyAdapter);

// const t4: AnyClass<undefined, string, false, []>
// const t4 = new AnyClass('b', AnyAdapter); // Issue here - not capture the AnyAdapter

const t4 = new AnyClass('b' as string, AsyncAnyAdapter);
