## 3.4. Dictionary, hash table and associative array

> Object

```js
const ages = {
  'Vasia Pupkin': 19,
  'Marcus Aurelius': 1860,
};

console.log({ ages });
```

```js
ages['Vasia Pupkin'] = 20;
console.log({ ages });
```

```js
Reflect.deleteProperty(ages, 'Vasia Pupkin');
console.log({ ages });
```

```js
console.log({
  'Vasia Pupkin': Reflect.has(ages, 'Vasia Pupkin'),
  'Marcus Aurelius': Reflect.has(ages, 'Marcus Aurelius'),
});
```

> Map

```js
const ages = new Map();

ages.set('Vasia Pupkin', 19);
ages.set('Marcus Aurelius', 1860);

console.log({ ages });
```

```js
ages.set('Vasia Pupkin', 20);
console.log({ ages });
```

```js
ages.delete('Vasia Pupkin');
console.log({ ages });
```

```js
console.log({
  'Vasia Pupkin': ages.has('Vasia Pupkin'),
  'Marcus Aurelius': ages.has('Marcus Aurelius'),
});
```

```js
ages.clear();
console.log({ ages });
```

> Complex example: distinct

```js
const distinct = (dataset) => {
  const keys = new Set();
  return dataset.filter((record) => {
    const cols = Object.keys(record).sort();
    const key = cols.map((field) => record[field]).join('\x00');
    const has = keys.has(key);
    if (!has) keys.add(key);
    return !has;
  });
};
```

```js
const flights = [
  { from: 'Kiev', to: 'Rome' },
  { from: 'Kiev', to: 'Warsaw' },
  { from: 'Dublin', to: 'Riga' },
  { from: 'Riga', to: 'Dublin' },
  { from: 'Kiev', to: 'Rome' },
  { from: 'Cairo', to: 'Paris' },
];

console.table(flights);
```

```js
const directions = distinct(flights);
console.table(directions);
```
