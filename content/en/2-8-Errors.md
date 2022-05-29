## 2.8. Exceptions and error handling

> Throw

```js
const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
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
  if (typeof a === 'number' && typeof b === 'number') {
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
  if (typeof a === 'number' && typeof b === 'number') {
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
    if (typeof a === 'number' && typeof b === 'number') {
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
  if (typeof a === 'number' && typeof b === 'number') {
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
