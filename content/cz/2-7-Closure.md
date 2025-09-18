## 2.7. Uzávěry, funkce zpětného volání, zabalení a události

> Uzávěr

```js
const add = (x) => (y) => {
  const z = x + y;
  console.log(`${x} + ${y} = ${z}`);
  return z;
};
```

```js
const res = add(3)(6);
console.log(res);
```

```js
const add = (x) => (y) => x + y;
```

> Rekurzivní uzávěr

```js
const add = (x) => (y) => {
  const z = x + y;
  console.log(`${x} + ${y} = ${z}`);
  return add(z);
};
```

```js
const add = (x) => (y) => add(x + y);
```

```js
const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);
console.log(a1, a2, a3, a4, a5);
```

> Řetězení funkcí

```js
const res = add(5)(2)(3)(7);
console.log(res);
```

> Abstrakce (náhrada třídy)

```js
const COLORS = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m',
};

const logger = (kind) => {
  const color = COLORS[kind] || COLORS.info;
  return (s) => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
};
```

```js
const warning = logger('warning');
const error = logger('error');
const debug = logger('debug');
const slow = logger('slow');

slow('I am slow logger');
warning('Hello');
error('World');
debug('Bye!');
```

> Řetězení metod objektu

```js
const adder = (a) => {
  const value = () => a;
  const add = (b) => adder(a + b);
  return { add, value };
};
```

```js
const v = adder(3).add(-9).add(12).value();
console.log(v);
```

> Alternativní syntaxe

```js
const adder = (a) => ({
  value() {
    return a;
  },
  add(b) {
    a += b;
    return this;
  },
});
```

```js
const v = adder(3).add(-9).add(12).value();
console.log(v);
```

> Alternativní syntaxe

```js
const adder = (a) => ({
  value: () => a,
  add: (b) => adder(a + b),
});
```

```js
const v = adder(3).add(-9).add(12).value();
console.log(v);
```

> Složitý příklad

```js
const adder = (a) => {
  let onZerro = null;
  const obj = {};
  const value = () => a;
  const add = (b) => {
    let x = a + b;
    if (x < 0) {
      x = 0;
      if (onZerro) onZerro();
    }
    return adder(x);
  };
  const on = (name, callback) => {
    if (name === 'zero') onZerro = callback;
    return obj;
  };
  return Object.assign(obj, { add, value, on });
};
```

```js
const a = adder(3)
  .on('zero', () => console.log('Less than zero'))
  .add(-9)
  .add(12)
  .add(5)
  .value();

console.log(a);
```

> Callback

```js
// Normální vrácení výsledku
const sum = (a, b) => a + b;

// Vrácení výsledku do callback funkce
const sum = (a, b, callback) => callback(a + b);
```

```js
console.log('sum(5, 2) =', sum(5, 2));
sum(5, 2, console.log.bind(null, 'sum(5, 2) ='));
```

```js
const fs = require('fs');

const reader = (err, data) => {
  console.log({ lines: data.split('\n').length });
};

fs.readFile('./file.txt', 'utf8', reader);
```

> Pojmenované callbacky

```js
const fs = require('fs');

const print = (fileName, err, data) => {
  console.log({ lines: data.split('\n').length });
};

const fileName = './file.txt';
const callback = print.bind(null, fileName);
fs.readFile(fileName, 'utf8', callback);
```

> Implementace timeru s callbackem

```js
const fn = () => {
  console.log('Callback from from timer');
};

const timeout = (interval, fn) => {
  setTimeout(fn, interval);
};

timeout(5000, fn);
```

> Curry timeru

```js
const curry = (fn, ...par) => {
  const curried = (...args) => {
    if (fn.length <= args.length) return fn(...args);
    return curry(fn.bind(null, ...args));
  };
  return par.length ? curried(...par) : curried;
};
```

```js
const fn = () => {
  console.log('Callback from from timer');
};

const timeout = (interval, fn) => {
  setTimeout(fn, interval);
};

const timer = curry(timeout);
timer(2000)(fn);

const timer2s = timer(2000);
timer2s(fn);
```

> Callbacky iterace

```js
const iterate = (array, listener) => {
  for (const item of array) {
    listener(item);
  }
};

const cities = ['Kiev', 'London', 'Beijing'];

const print = (city) => {
  console.log('City:', city);
};

iterate(cities, print);
```

> Události

```js
const adder = (initial) => {
  let value = initial;
  const add = (delta) => {
    value += delta;
    if (value >= add.maxValue) add.maxEvent(value);
    return add;
  };
  add.max = (max, event) => {
    add.maxValue = max;
    add.maxEvent = event;
    return add;
  };
  return add;
};
```

```js
const maxReached = (value) => {
  console.log('max value reached, value: ' + value);
};

const a1 = adder(10).max(100, maxReached)(-12);

a1(25);
a1(50);
a1(75);
a1(100);
a1(-200)(50)(30);
```

> EventEmitter

```js
const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('new city', (city) => {
  console.log('Emitted city:', city);
});

emitter.on('data', (array) => {
  console.log(array.reduce((a, b) => a + b));
});

emitter.emit('new city', 'Delhi');
emitter.emit('new city', 'Berlin');
emitter.emit('new city', 'Tokyo');
emitter.emit('data', [5, 10, 7, -3]);
```
