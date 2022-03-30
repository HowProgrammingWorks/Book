## 2.6. Higher-order function, pure function, side effects

```js
const add = (a, b) => a + b;

console.log('Add numbers: 5 + 2 = ' + add(5, 2));
console.log('Add floats: 5.1 + 2.3 = ' + add(5.1, 2.3));
console.log(`Concatenate: '5' + '2' = '${add('5', '2')}'`);
console.log('Subtraction: 5 + (-2) = ' + add(5, -2));
```
