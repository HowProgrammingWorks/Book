## 2.8. Ausnahmen und Fehlerbehandlung

> Debugging (Debug) — Prozess der Erkennung und Beseitigung von Fehlern in Software.

Debugging wird durch Ausgabe von Nachrichten oder Tools implementiert: Debugger, Profiler, Dekompiler, Systeme zur Überwachung von Ressourcen und Protokollierung, Systeme für kontinuierliche Integration und Tests.

„Debugging ist doppelt so schwer wie das Schreiben von Code. Wenn Sie also Code so klug schreiben, wie Sie können, sind Sie per Definition nicht klug genug, um ihn zu debuggen." // Brian Kernighan

„Wenn Debugging der Prozess des Entfernens von Fehlern ist, dann muss Programmierung der Prozess des Einbringens von Fehlern sein" // Edsger Dijkstra

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

> Rückgabe von Tupel oder Struktur

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

> Asynchrones Throw

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
