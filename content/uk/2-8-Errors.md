## 2.8. Винятки та обробка помилок

> Налагодження (Debug) — процес виявлення та усунення помилок у програмному забезпеченні.

Налагодження реалізують за допомогою виводу повідомлень або інструментів: налагоджувача, профілювальника, декомпілятора, систем моніторингу ресурсів та логування, систем безперервної інтеграції та тестування.

«Налагодження коду вдвічі складніше, ніж його написання. Тому якщо ви пишете код настільки розумно, наскільки можете, то ви за визначенням недостатньо кмітливі, щоб його налагоджувати.» // Брайан Керніган

«Якщо налагодження — процес видалення помилок, то програмування має бути процесом їх внесення» // Едсгер Дейкстра

> Throw

```js
const isNumber = (value) => typeof value === 'number';

const sum = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  throw new Error('a та b мають бути числами');
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

> Повернення кортежу або структури (Return tuple or struct)

```js
const sum = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return [null, a + b];
  }
  return [new Error('a та b мають бути числами')];
};

console.log(sum(2, 3));

console.log(sum(7, 'A'));
```

> Колбек (Callback)

```js
const sum = (a, b, callback) => {
  if (isNumber(a) && isNumber(b)) {
    callback(null, a + b);
  } else {
    callback(new Error('a та b мають бути числами'));
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
      reject(new Error('a та b мають бути числами'));
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

> Асинхронне викидання (Async throw)

```js
const sum = async (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  throw new Error('a та b мають бути числами');
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
