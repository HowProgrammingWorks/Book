## 2.1. Hodnota, identifikátor, proměnná a konstanta, literál, přiřazení

```js
const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
  if (counter === MAX_VALUE) {
    console.log('The end');
    clearInterval(timer);
    return;
  }
  console.dir({ counter, date: new Date() });
  counter++;
};

console.log('Begin');
timer = setInterval(event, INTERVAL);
```

```js
// Constants

const SALUTATION = 'Ave';

const COLORS = [
  /* 0 */ 'černá',
  /* 1 */ 'červená',
  /* 2 */ 'zelená',
  /* 3 */ 'žlutá',
  /* 4 */ 'modrá',
  /* 5 */ 'magenta',
  /* 6 */ 'cyan',
  /* 7 */ 'bílá',
];
```
