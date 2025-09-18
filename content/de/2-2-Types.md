## 2.2. Datentypen: skalare, Referenz- und strukturierte Typen

> Typ — eine Menge von Werten und Operationen, die auf diesen Werten ausgeführt werden können.

Zum Beispiel nimmt der `Boolean`-Typ in `JavaScript` zwei Werte `true` und `false` an und logische Operationen darauf, der `Null`-Typ nimmt einen `null`-Wert an, und der `Number`-Typ ist eine Menge rationaler Zahlen mit zusätzlichen Einschränkungen für Mindest- und Maximalwerte sowie Einschränkungen für Präzision und mathematische Operationen `+ - * ** / % ++ -- > < >= <= & | ~ ^ << >>`.

> Datentypen

```js
const values = [5, 'Kiew', true, { size: 10 }, (a) => ++a];

const types = values.map((x) => typeof x);
console.log({ types });
```

> Skalar (Primitiv, Atomarer Wert) — der Wert des primitiven Datentyps.

Der Skalar wird bei der Zuweisung kopiert und an die Funktion als Wert übergeben.

> Referenz zeigt auf einen Wert eines Referenztyps, d.h. nicht auf einen Skalarwert.

Für `JavaScript` sind dies die Untertypen: `Object`, `Function`, `Array`.

> Strukturierte Typen (Zusammengesetzte Typen) — zusammengesetzte Typen oder Strukturen, die aus mehreren Skalarwerten bestehen.

Skalarwerte werden so zu einem kombiniert, dass eine Reihe von Operationen auf diesem kombinierten Wert ausgeführt werden können. Zum Beispiel: Objekt, Array, Set, Tupel.

> Aufzählungstyp

> Flag — ein boolescher Wert, der den Zustand von etwas bestimmt.

Zum Beispiel: Status einer geschlossenen Verbindung, Status der Beendigung einer Suche über eine Datenstruktur usw.

```js
let flagName = false;
```

Manchmal können Flags nicht als logische, sondern als Aufzählungstypen bezeichnet werden.

> String — eine Zeichenfolge

In den meisten Sprachen kann auf jedes Zeichen über die Array-Zugriffssyntax zugegriffen werden, wie z.B. eckige Klammern.
