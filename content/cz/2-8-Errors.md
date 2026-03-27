## 2.8. Výjimky a řešení chyb

> Ladění (Debug) - proces detekce a odstraňování chyb v softwaru.

Ladění je implementováno pomocí výstupu zpráv nebo nástrojů: debugger, profiler, dekompilátor, systémy pro monitorování zdrojů a protokolování, systémy pro kontinuální integraci a testování.

„Ladění je dvakrát těžší než psaní kódu. Pokud tedy píšete kód tak chytře, jak můžete, pak jste podle definice ne dostatečně chytří na to, abyste ho ladili." // Brian Kernighan

„Pokud je ladění procesem odstraňování chyb, pak musí být programování procesem jejich zavádění" // Edsger Dijkstra

> Throw

```js
const isNumber = (value) => typeof value === 'number';

const sum = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  throw new Error('a and b should be numbers');
};
```

```js
try {
  console.log(sum(2, 3));
} catch (err) {
  console.log(err.message);
}
```

```js
try {
  console.log(sum(7, 'A'));
} catch (err) {
  console.log(err.message);
}
```

> Vrácení tuple nebo struktury

```js
const sum = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return [null, a + b];
  }
  return [new Error('a and b should be numbers')];
};

console.log(sum(2, 3));

console.log(sum(7, 'A'));
```

> Callback

```js
const sum = (a, b, callback) => {
  if (isNumber(a) && isNumber(b)) {
    callback(null, a + b);
  } else {
    callback(new Error('a and b should be numbers'));
  }
};
```

```js
sum(2, 3, (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(result);
});
```

```js
sum(7, 'A', (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(result);
});
```

> Promise

```js
const sum = (a, b) =>
  new Promise((resolve, reject) => {
    if (isNumber(a) && isNumber(b)) {
      resolve(a + b);
    } else {
      reject(new Error('a and b should be numbers'));
    }
  });
```

```js
sum(2, 3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
```

```js
sum(7, 'A')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
```

> Asynchronní throw

```js
const sum = async (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  throw new Error('a and b should be numbers');
};
```

```js
try {
  console.log(await sum(2, 3));
} catch (e) {
  console.log(e.message);
}
```

```js
try {
  console.log(await sum(7, 'A'));
} catch (err) {
  console.log(err.message);
}
```
