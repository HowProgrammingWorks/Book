## 2.6. Höhere Funktionen, reine Funktionen, Seiteneffekte

Funktionsdeklaration (Function definition) — in `JavaScript` ist dies eine Art der Funktionsdeklaration, die von überall im lexikalischen Kontext sichtbar ist, in dem die Funktion deklariert ist, Beispiel:

```js
function sum(a, b) {
  return a + b;
}
```

Funktionsausdruck (Function expression) — Verknüpfung einer Funktion mit einem Bezeichner durch Zuweisung, wobei der Wert über den Bezeichner nicht im gesamten lexikalischen Kontext verfügbar ist, sondern nur nach der Zuweisungsstelle. Hat mehrere syntaktische Varianten:

Funktionsausdruck mit benannter Funktion (Named function expression):

```js
const sum = function sum(a, b) {
  return a + b;
};
```

Anonymer Funktionsausdruck (Anonymous function expression):

```js
const sum = function (a, b) {
  return a + b;
};
```

Pfeil- oder Lambda-Funktion (Arrow, Lambda function):

```js
const sum = (a, b) => {
  return a + b;
};
```

Lambda-Ausdruck, Pfeilfunktion mit Ausdruck als Körper (Lambda expression, Arrow function):

```js
const sum = (a, b) => a + b;
```

> Reine Funktion (Pure Function) — deterministische Funktion ohne Seiteneffekte.

Eine reine Funktion ist eine Funktion, die das Ergebnis nur auf der Grundlage der Argumente berechnet, keinen Zustand hat und nicht auf Eingabe-Ausgabe-Operationen zugreift. Das Ergebnis einer solchen Funktion ist immer deterministisch und ohne Seiteneffekte (siehe Seiteneffekt).

> Closure (Closure) — Funktion, die mit dem lexikalischen Umfeld zum Zeitpunkt ihrer Erstellung verknüpft ist.

Wenn eine Funktion `g` aus einer Funktion `f` zurückgegeben wird, wird `g` den Kontext der Funktion `f` sehen, ebenso wie ihre eigenen Argumente. Wenn `f` `g` zurückgibt, sagt man, dass die Instanz `g` den Kontext `f` geschlossen hat. Ein Closure ist eine Möglichkeit, eine Funktion mit einem Kontext (mit Daten oder Kontextvariablen) zu verknüpfen. Ein Closure ermöglicht es, einen Effekt zu erzeugen, der dem Zustand eines Objekts (der Menge seiner Eigenschaften) in der OOP ähnelt. Eigenschaften sind mit Methoden über das Objekt verknüpft, im Wesentlichen ist das Objekt in der OOP selbst der Verknüpfungskontext. Ein Closure erzeugt ebenfalls einen ähnlichen Kontext, aber auf der Grundlage von Funktionen erster Klasse und lexikalischem Kontext, nicht objektbasiert.

Mit Hilfe von Closures kann funktionale Vererbung implementiert werden.

Beispiele:

```js
const sum = (a) => (b) => a + b;

const hash =
  (data = {}) =>
  (key, value) => ((data[key] = value), data);
```

> Superposition (Superposition) — Kombination von Funktionsaufrufen in Ausdrücken so, dass das Ergebnis einiger Funktionen zu Argumenten anderer Funktionen wird.

```js
const expr2 = sum(
  pow(mul(5, 8), 2),
  div(inc(sqrt(20)), log(2, 7))
);
```

> Komposition (Composition) — Erstellung einer neuen Funktion durch Kombination einfacherer.

```js
const compose = (f1, f2) => (x) => f2(f1(x));
```

```js
// prettier-ignore
const compose = (...funcs) => (...args) =>
  funcs.reduce((args, fn) => [fn(...args)], args);
```

> Partielle Anwendung (Partial application)

```js
// prettier-ignore
const partial = (fn, x) => (...args) => fn(x, ...args);
```

> Currying (Currying)

```js
const result = curry((a, b, c) => a + b + c)(1, 2)(3);
```

> Seiteneffekte (Side effects)

> Funktion höherer Ordnung (Higher-order Function)

1. Wenn eine Funktion als Argument an eine andere Funktion übergeben wird, ist es ein Callback.
2. Wenn eine Funktion als Ergebnis zurückgegeben wird, ist es eine Funktionsfabrik auf Closures.
3. Wenn die zurückgegebene Funktion dieselbe Semantik hat wie die in den Argumenten erhaltene, aber mit zusätzlichem (erweitertem) Verhalten, ist es eine Wrapper-Funktion.
4. Es kommt selten vor, dass die zurückgegebene Funktion nicht mit der Funktion aus den Argumenten verknüpft ist oder nicht direkt verknüpft ist und auch eine andere Semantik hat und keine Wrapper-Funktion ist.
5. Wenn am Ausgang eine Klasse oder Konstruktorfunktion steht, sind es Fabriken für Klassen und Prototypen.

> Wrapper-Funktion (Wrapper)

Eine Funktion, die eine andere Funktion (manchmal ein Objekt, Interface oder funktionales Objekt) umhüllt und ihr zusätzliches Verhalten hinzufügt. Man kann eine ganze API-Schnittstelle und sogar eine asynchrone Funktion zusammen mit Callbacks umhüllen (wenn der Vertrag bekannt ist).

```js
const sum = (a, b) => a + b;

console.log(`Add nums:    ${sum(5, 2)}`);
console.log(`Add float:   ${sum(5.1, 2.3)}`);
console.log(`Concatenate: ${sum('5', '2')}`);
console.log(`Subtraction: ${sum(5, -2)}`);
```
