## 2.2. Data types, scalar, reference and structured types

> Type — a set of values ​​and operations that can be performed on these values.

For example, in `JavaScript` the `Boolean` type assumes two values ​​`true` and `false`, and logical operations on them, the `Null` type assumes one `null` value, and the `Number` type is a set of rational numbers with additional restrictions on the minimum and maximum values, as well as restrictions on precision and mathematical operations `+ - * ** / % ++ -- > < >= <= & | ~ ^ << >>`.

> Data Types

```js
const values = [
  5,
  'Kiev',
  true,
  { city: 'Madrid' },
  (a) => ++a,
];

const types = values.map((x) => typeof x);
console.log({ types });
```

> Scalar (Primitive, Atomic value) — the value of the primitive data type.

The scalar is copied on assignment and passed to the function by value.

> Reference points to a value of a reference type, i.e. not a scalar value.

For `JavaScript` these are the subtypes: `Object`, `Function`, `Array`.

> Structural types (Composed types) — composite types or structures, which consist of several scalar values.

Scalar values ​​are combined into one in such a way, that a set of operations can be performed on this combined value. For example: object, array, set, tuple.

> Enumerated type

> Flag — a boolean value that determines the state of something.

For example: a status of a closed connection, a status of completion of a search over data structure, etc.

```js
let flagName = false;
```

Sometimes flags can be called not logical but enumerated types.

> String — a sequence of characters

In most languages, each character can be accessed through array access syntax, such as square brackets.
