## 2.8. Исключения и обработка ошибок

> Отладка (Debug) — процесс обнаружения и устранения ошибок в программном обеспечении.

Отладку реализовывают при помощи вывода сообщений или инструментов: отладчика, профилировщика, декомпилятора, систем мониторинга ресурсов и логирования, систем непрерывной интеграции и тестирования.

«Отладка кода вдвое сложнее, чем его написание. Так что если вы пишете код настолько умно, насколько можете, то вы по определению недостаточно сообразительны, чтобы его отлаживать.» // Брайан Керниган

«Если отладка — процесс удаления ошибок, то программирование должно быть процессом их внесения» // Эдсгер Дейкстра

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

> Return tuple or struct

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

> Async throw

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
