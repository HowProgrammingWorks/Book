## 2.1. Value, identifier, variable and constant, literal, assignment

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
  /* 0 */ 'black',
  /* 1 */ 'red',
  /* 2 */ 'green',
  /* 3 */ 'yellow',
  /* 4 */ 'blue',
  /* 5 */ 'magenta',
  /* 6 */ 'cyan',
  /* 7 */ 'white',
];
```
