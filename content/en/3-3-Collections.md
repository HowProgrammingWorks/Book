## 3.3. Array, list, set, tuple

> Array

```js
const ages = [10, 12, 15, 15, 17, 18, 18, 19, 20];

const first = ages[0];
const last = ages[ages.length - 1];

console.log({ first, last });
```

> List

```py
ages = [10, 12, 15, 15, 17, 18, 18, 19, 20]

first = ages[0]
last = ages[-1]

print({ 'first': first, 'last': last })
```

> Array

```c
#include <stdio.h>

int main() {
  int ages[] = { 10, 12, 15, 15, 17, 18, 18, 19, 20 };

  int first = ages[0];
  int length = sizeof(ages) / sizeof(ages[0]);
  int last = ages[length - 1];

  printf("first: %d\n", first);
  printf("last: %d\n", last);
}
```

> Access elements

```js
const getFirstAndLast = (array) => {
  const first = array[0];
  const last = array[array.length - 1];
  return { first, last };
};
```

```js
const ages = [10, 12, 15, 15, 17, 18, 18, 19, 20];
const { first, last } = getFirstAndLast(ages);
console.log({ first, last });
```

```py
def getFirstAndLast(array):
  first = ages[0]
  last = ages[-1]
  return first, last
```

```py
ages = [10, 12, 15, 15, 17, 18, 18, 19, 20]
first, last = getFirstAndLast(ages)
print({ 'first': first, 'last': last })
```

```js
const getFirstAndLast = (array) => ({
  first: array[0],
  last: array[array.length - 1],
});
```

```py
getFirstAndLast = lambda array: (array[0], array[-1])
```

```js
const concat = (arr1, arr2) => {
  const arr = arr1.slice();
  arr.push(...arr2);
  return arr;
};
```

```js
const schoolAges = [10, 12, 15, 15];
const studentAges = [17, 18, 18, 19, 20];
const ages = concat(schoolAges, studentAges);
```

```py
concat = lambda arr1, arr2: arr1 + arr2
```

```py
schoolAges = [10, 12, 15, 15]
studentAges = [17, 18, 18, 19, 20]
ages = schoolAges + studentAges
```

```c
#include <stdio.h>

int main() {
  int schoolAges[] = { 10, 12, 15, 15 };
  int studentAges[] = { 17, 18, 18, 19, 20 };

  int schoolLength = sizeof(schoolAges) / sizeof(int);
  int studentLength = sizeof(studentAges) / sizeof(int);
  int length = schoolLength + studentLength;
  int ages[length];

  for (int i = 0; i < schoolLength; i++) {
    ages[i] = schoolAges[i];
  }

  for (int i = 0; i < studentLength; i++) {
    ages[i + schoolLength] = studentAges[i];
  }

  for (int i = 0; i < length; i++) {
    printf("ages[%d]: %d\n", i, ages[i]);
  }
}
```

```js
const concat = (arr1, arr2) => [...arr1, ...arr2];
```

> Set

```js
const ages = new Set([10, 12, 15, 15, 17, 18, 18, 19, 20]);
console.log({ ages });

ages.add(16);
ages.delete(20);

console.log({
  10: ages.has(10),
  16: ages.has(16),
  19: ages.has(19),
  20: ages.has(20),
});

ages.clear();
console.log({ ages });
```

> Union

```js
const union = (s1, s2) => {
  const ds = s1.slice(0);
  for (let i = 0; i < s2.length; i++) {
    const item = s2[i];
    if (!ds.includes(item)) ds.push(item);
  }
  return ds;
};
```

```js
const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];
console.dir({ cities1, cities2 });

const results = union(cities1, cities2);
console.dir(results);
```

```js
const union = (s1, s2) => new Set([...s1, ...s2]);
```

> Intersection

```js
const intersection = (s1, s2) => {
  const ds = [];
  for (let i = 0; i < s1.length; i++) {
    const item = s1[i];
    if (s2.includes(item)) ds.push(item);
  }
  return ds;
};
```

```js
const intersection = (s1, s2) => new Set(
  [...s1].filter((v) => s2.has(v))
);
```

> Difference

```js
const difference = (s1, s2) => {
  const ds = [];
  for (let i = 0; i < s1.length; i++) {
    const item = s1[i];
    if (!s2.includes(item)) ds.push(item);
  }
  return ds;
};
```

```js
const difference = (s1, s2) => new Set(
  [...s1].filter((v) => !s2.has(v))
);
```

> Complement

```js
const complement = (s1, s2) => difference(s2, s1);
```
