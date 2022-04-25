## 2.3. Contexts and lexical scope

> Scope — part of the code where identifier is visible

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

f();
```

In the modern standard of `Javascript` the scope is spawned by any of the following:

- a function
- a block of operators which are wrapped with curly braces `{}`
- a branch or cycle operator which optionally may have `{}` braces

For instance, in `Python` scope is spawned by functions only. Let's compare the following code with the one above:

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

> Lexical context (lexical environment) — list of identifiers binded to specific values inside a function or code block (loops, conditions, etc)

Lexical context (environment) is nestable. Meaning an identifier from parent block is accessible from any child block or function. Exception: identier name overlapping. In this case identifier from parent context won't be accessible - only local one.

> Object method context — an object binded with special identifier `this`. All functions (except arrow functions) can be binded to this context. To make this happen a function must satisfy one of the following:

- be a method of the object
- be binded to the object using `bind()`
- be envoked using `apply()` or `call()`

> Global context — global object-reference.

If case identifier is not found in any of the nested lexical contexts, the search will be performed in global context (global, window, sandbox).
