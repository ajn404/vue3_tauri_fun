export const assertIsNonNullish = <T>(
  value: T,
  message: string
): asserts value is NonNullable<T> => {
  if (value === null || value === undefined) {
    throw Error(message);
  }
};

/**
 * Usage:
 *
 * assertIsString(myString, 'myString must be a string');
 *
 * This will throw an error with the message 'myString must be a string' if myString is not a string.
 */

export const assertIsString = (
  value: unknown,
  message: string
): asserts value is string => {
  // This function asserts that the given value is a string. If it is not, an error with the given message is thrown.
  if (typeof value !== 'string') {
    throw Error(message);
  }
};

export const assertIsNumber = (
  value: unknown,
  message: string
): asserts value is number => {
  if (typeof value !== 'number') {
    throw Error(message);
  }
};

//https://fettblog.eu/typescript-assertion-signatures/
declare type InferValue<Prop extends PropertyKey, Desc> = Desc extends {
  get(): any;
  value: any;
}
  ? never
  : Desc extends { value: infer T }
  ? Record<Prop, T>
  : Desc extends { get(): infer T }
  ? Record<Prop, T>
  : never;

declare type DefineProperty<
  Prop extends PropertyKey,
  Desc extends PropertyDescriptor
> = Desc extends { writable: any; set(val: any): any }
  ? never
  : Desc extends { writable: any; get(): any }
  ? never
  : Desc extends { writable: false }
  ? Readonly<InferValue<Prop, Desc>>
  : Desc extends { writable: true }
  ? InferValue<Prop, Desc>
  : Readonly<InferValue<Prop, Desc>>;

export const defineProperty = <
  Obj extends object,
  Key extends PropertyKey,
  PDesc extends PropertyDescriptor
>(
  obj: Obj,
  prop: Key,
  val: PDesc
): asserts obj is Obj & DefineProperty<Key, PDesc> => {
  Object.defineProperty(obj, prop, val);
};
