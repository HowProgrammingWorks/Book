## 1.2. Examples in JavaScript, Python and C languages

We will write code examples in different languages, but preference will not be given to the best, beautiful and fast, but to those that are indispensable. We will take `JavaScript` as the most common, `Python`, because there are areas where you cannot do without it and `C`, language close enough to assembly language, which is still very relevant and has had the significant influence on modern languages ​​in terms of syntax and built-it ideas. All three are very far from the language of my dreams, but this is what we have. At first glance, `Python` is very different from `JavaScript` and other C-like languages, although this is only at first glance, we will show that it is very similar to `JavaScript` since the type system, data structures and especially the built-in collections are very similar in them. Although syntactically, the difference in the code blocks organization using indentation and curly brackets `{}` is striking the eye, in reality, such a difference is not so significant, and there is much more in common between `JavaScript` and `Python` than between any of them and the language `C`.

We will not start over by learning the syntax, but immediately by reading bad code and searching for errors in it. Let's take a look at the following snippets, the first one will be in `JavaScript`:

```js
let first_num = 2;
let secord_num = 3;
let sum = firstNum + secondNum;
console.log({ sum });
```

Try to understand what is written here, and where there may be errors. And then compare this code with its translation to `C`.

```c
#include <stdio.h>

int main() {
  int first_num = 2;
  int secord_num = 3;
  int sum = firstNum + secondNum;
  printf("%d\n", sum);
}
```

The errors here are the same, they can be easily identified by a person, who does not even know the basics of programming, if he examines the code. And the next piece of code will be in `Python`, it does exactly the same and contains the same errors.

```py
first_num = 2;
secord_num = 3;
sum = firstNum + secondNum;
print({ 'sum': sum  });
```

Further, we will often compare code examples in different languages, search for errors and fix them, optimize the code, primarily improving its readability and understandability.
