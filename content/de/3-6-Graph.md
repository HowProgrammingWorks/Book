## 3.6. Bäume und Graphen

> Adjazenzmatrix - speichert die Verbindungen der Graphknoten

```
    1            +---+              const graph = [
  +--------------+ B +--+             [0, 1, 1, 0, 1],
  |              +---+  |             [1, 0, 0, 1, 0],
  |                     |             [1, 0, 0, 1, 0],
+-+-+    2              |             [0, 1, 1, 0, 0],
|| A +----------+        |3            [1, 0, 0, 0, 0],
|+-+          |        |           ];
  |            |        |
  |          +-+-+      |           const graph = {
  |5         | C |      |             A: [0, 1, 1, 0, 1],
  |          +-+-+      |             B: [1, 0, 0, 1, 0],
  +--+         |        |             C: [1, 0, 0, 1, 0],
     |         |        |             D: [0, 1, 1, 0, 0],
   +-+-+     4 |      +-+-+           E: [1, 0, 0, 0, 0],
   | E |       +------+ D |         };
   +---+              +---+
```

> Adjazenzmatrix als flaches Array

```
    1            +---+              const graph = [
  +--------------+ B +--+             0, 1, 1, 0, 1,
  |              +---+  |             1, 0, 0, 1, 0,
  |                     |             1, 0, 0, 1, 0,
+-+-+    2              |             0, 1, 1, 0, 0,
|| A +----------+        |3            1, 0, 0, 0, 0,
|+-+          |        |           ];
  |            |        |
  |          +-+-+      |
  |5         | C |      |
  |          +-+-+      |
  +--+         |        |
     |         |        |
   +-+-+     4 |      +-+-+
   | E |       +------+ D |
   +---+              +---+
```

> Inzidenzmatrix - Verbindung von Knoten (Array-Zeilen) mit Kanten (Array-Spalten)

```
    1            +---+               const graph = [
  +--------------+ B +--+              [1, 1, 0, 0, 1],
  |              +---+  |              [1, 0, 1, 0, 0],
  |                     |              [0, 1, 0, 1, 0],
+-+-+    2              |              [0, 0, 1, 1, 0],
|| A +----------+        |3             [0, 0, 0, 0, 1],
|+-+          |        |            ];
  |            |        |
  |          +-+-+      |            const graph = {
  |5         | C |      |              A: [1, 1, 0, 0, 1],
  |          +-+-+      |              B: [1, 0, 1, 0, 0],
  +--+         |        |              C: [0, 1, 0, 1, 0],
     |         |        |              D: [0, 0, 1, 1, 0],
   +-+-+     4 |      +-+-+            E: [0, 0, 0, 0, 1],
   | E |       +------+ D |          ];
   +---+              +---+
```

> Adjazenzliste - Liste von Knoten, für jeden eine Liste benachbarter Knoten

```
    1            +---+               const graph = {
  +--------------+ B +--+              A: [],
  |              +---+  |              B: [],
  |                     |              C: [],
+-+-+    2              |              D: [],
|| A +----------+        |3             E: [],
|+-+          |        |            };
  |            |        |
  |          +-+-+      |            const { A, B, C, D, E } = graph;
  |5         | C |      |            A.push(B, C, E);
  |          +-+-+      |            B.push(A, D);
  +--+         |        |            C.push(A, D);
     |         |        |            D.push(B, C);
   +-+-+     4 |      +-+-+          E.push(A);
   | E |       +------+ D |
   +---+              +---+          console.dir({ graph });
```

> Kantenliste - Liste mit Angabe der Kante als Knotenpaar

```
    1            +---+               const graph = [
  +--------------+ B +--+               [A, B],
  |              +---+  |               [A, C],
  |                     |               [B, D],
+-+-+    2              |               [C, D],
|| A +----------+        |3              [A, E],
|+-+          |        |            ];
  |            |        |
  |          +-+-+      |            const graph = [
  |5         | C |      |               { from: A, to: B },
  |          +-+-+      |               { from: A, to: C },
  +--+         |        |               { from: B, to: D },
     |         |        |               { from: C, to: D },
   +-+-+     4 |      +-+-+             { from: A, to: E },
   | E |       +------+ D |          ];
   +---+              +---+
```
