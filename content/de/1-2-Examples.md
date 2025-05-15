## 1.2. Beispiele in JavaScript, Python und C

Wir werden Codebeispiele in verschiedenen Programmiersprachen schreiben, wobei der Fokus nicht auf den besten, schönsten oder schnellsten Sprachen liegt, sondern auf denen, ohne die man nicht auskommt. Wir nehmen `JavaScript` als die am weitesten verbreitete Sprache, `Python`, weil es Bereiche gibt, in denen man ohne sie nicht auskommt, und `C` als eine Sprache, die Assembler sehr nahe kommt, nach wie vor relevant ist und modernen Sprachen sowohl im Hinblick auf Syntax als auch auf konzeptionelle Ideen stark beeinflusst hat. Alle drei Sprachen sind weit entfernt von der Sprache meiner Träume – aber es ist das, womit wir arbeiten.

Auf den ersten Blick wirkt `Python` sehr verschieden von `JavaScript` und anderen C-ähnlichen Sprachen. Doch dieser Eindruck täuscht: Wir werden zeigen, dass `Python` `JavaScript` sehr ähnlich ist, insbesondere aufgrund der Typensysteme, Datenstrukturen und eingebauten Collections. Die syntaktischen Unterschiede, etwa bei der Blockstruktur über Einrückungen versus geschweifte Klammern `{}`, stechen zwar ins Auge, sind in der Praxis jedoch nicht besonders entscheidend. Zwischen `JavaScript` und `Python` gibt es deutlich mehr Gemeinsamkeiten als zwischen beiden und `C`.

Wir beginnen nicht mit dem Erlernen der Syntax, sondern sofort mit dem Lesen von fehlerhaftem Code und der Fehlersuche. Sehen wir uns die folgenden Codefragmente an. Der erste ist in `JavaScript`:

```js
let first_num = 2;
let secord_num = 3;
let sum = firstNum + secondNum;
console.log({ sum });
```

Versuche zu verstehen, was hier geschrieben steht, und wo mögliche Fehler liegen. Vergleiche diesen Code dann mit der entsprechenden Version in `C`:

```c
#include <stdio.h>

int main() {
  int first_num = 2;
  int secord_num = 3;
  int sum = firstNum + secondNum;
  printf("%d\n", sum);
}
```

Die Fehler sind hier identisch. Sie können auch von jemandem erkannt werden, der keinerlei Programmierkenntnisse hat – sofern er sich mit dem Code beschäftigt. Der nächste Codeausschnitt ist in `Python`, erfüllt die gleiche Aufgabe und enthält die gleichen Fehler:

```py
first_num = 2;
secord_num = 3;
sum = firstNum + secondNum;
print({ 'sum': sum  });
```

Im weiteren Verlauf werden wir häufig Codebeispiele aus verschiedenen Sprachen vergleichen, Fehler finden und korrigieren, den Code optimieren und dabei vor allem die Lesbarkeit und Verständlichkeit verbessern.
