# 2. Basic concepts

We need comments to temporarily prevent code block execution or compilation, to store structured annotation or metadata (interpreted by special tools), to hold `TODOs` or developer-readable explanations.

> A `comment` is character sequences in the code ignored by the compiler or the interpreter.

Comments in all `C`-family languages like `C++`, `JavaScript`, `Java`, `C#`, `Swift`, `Kotlin`, `Go`, etc. have the same syntax.

```js
// Single-line comment
```

```js
/*
  Multi-line
  comments
*/
```

Do not hold obvious things in comments, do not repeat something what is clear from the code itself.

In bash (shell-scripts) and Python we use number sign (sharp or hash symbol) for commenting.

```py
# Single-line comment
```

Python uses multi-line strings as multi-line comments with triple-quote syntax. But remember that it is a string literal not assigned to a variable.

```py
"""
  Multi-line
  comments
"""
```

SQL uses two dashes to start a single-line comment to the end of line.

```sql
select name from PERSON -- comments in sql
```

HTML comments have just multi-line syntax.

```html
<!-- commented block in xml and html -->
```

In Assembler and multiple LISP dialects we use semicolons (or multiple semicolons) for different types of comments.

```
; Single-line comment in Assembler and LISP
```
