## 2.4. Kontexte und lexikalischer Scope

> Scope

```js
const level = 1;

const f = () => {
  const level = 2;
  {
    const level = 3;
    console.log(level); // 3
  }
  console.log(level); // 2
};
```

```py
level = 1

def f():
  level = 2
  if level == 2:
    level = 3
    print(level) // 3
  print(level) // 3

f()
```

> Lexikalisches Umfeld

> Globaler Kontext
