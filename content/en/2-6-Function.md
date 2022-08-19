## 2.6. Higher-order function, pure function, side effects

> Function definition

```js
function sum(a, b) {
  return a + b;
}
```

> Named function expression

```js
const sum = function sum(a, b) {
  return a + b;
};
```

> Anonymous function expression

```js
const sum = function (a, b) {
  return a + b;
};
```

> Arrow function (Lambda function)

```js
const sum = (a, b) => {
  return a + b;
};
```

> Lambda expression

```js
const sum = (a, b) => a + b;
```

```js
const sum = (a) => (b) => a + b;

// prettier-ignore
const hash =
  (data = {}) =>
    (key, value) => ((data[key] = value), data);
```

> Superposition

```js
const expr2 = sum(
  pow(mul(5, 8), 2),
  div(inc(sqrt(20)), log(2, 7))
);
```

> Composition

```js
const compose = (f1, f2) => (x) => f2(f1(x));
```

```js
// prettier-ignore
const compose = (...funcs) => (...args) =>
  funcs.reduce((args, fn) => [fn(...args)], args);
```

> Partial application

```js
// prettier-ignore
const partial = (fn, x) => (...args) => fn(x, ...args);
```

> Currying

```js
const result = curry((a, b, c) => a + b + c)(1, 2)(3);
```

> Side effects

> Higher-order Function

> Wrapper

```js
const sum = (a, b) => a + b;

console.log('Add numbers: 5 + 2 = ' + sum(5, 2));
console.log('Add floats: 5.1 + 2.3 = ' + sum(5.1, 2.3));
console.log(`Concatenate: '5' + '2' = '${sum('5', '2')}'`);
console.log('Subtraction: 5 + (-2) = ' + sum(5, -2));
```
