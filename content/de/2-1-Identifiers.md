## 2.1. Wert, Bezeichner, Variable und Konstante, Literal, Zuweisung

```js
const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
  if (counter === MAX_VALUE) {
    console.log('Das Ende');
    clearInterval(timer);
    return;
  }
  console.dir({ counter, date: new Date() });
  counter++;
};

console.log('Beginn');
timer = setInterval(event, INTERVAL);
```

```js
// Konstanten

const SALUTATION = 'Ave';

const COLORS = [
  /* 0 */ 'schwarz',
  /* 1 */ 'rot',
  /* 2 */ 'grün',
  /* 3 */ 'gelb',
  /* 4 */ 'blau',
  /* 5 */ 'magenta',
  /* 6 */ 'cyan',
  /* 7 */ 'weiß',
];
```
