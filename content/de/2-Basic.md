# 2. Grundkonzepte

Wir brauchen Kommentare, um Codeblöcke vorübergehend an der Ausführung oder Kompilierung zu hindern, um strukturierte Annotationen oder Metadaten zu speichern (interpretiert von speziellen Tools), um `TODOs` oder entwicklerlesbare Erklärungen zu halten.

> Ein `Kommentar` ist eine Zeichenfolge im Code, die vom Compiler oder Interpreter ignoriert wird.

Kommentare in allen `C`-Familien-Sprachen wie `C++`, `JavaScript`, `Java`, `C#`, `Swift`, `Kotlin`, `Go`, etc. haben die gleiche Syntax.

```js
// Einzeiliger Kommentar
```

```js
/*
  Mehrzeilige
  Kommentare
*/
```

Halten Sie nicht offensichtliche Dinge in Kommentaren fest, wiederholen Sie nicht etwas, was aus dem Code selbst klar ist.

In bash (Shell-Skripten) und Python verwenden wir das Nummernzeichen (Raute oder Hash-Symbol) für Kommentare.

```py
# Einzeiliger Kommentar
```

Python verwendet mehrzeilige Strings als mehrzeilige Kommentare mit Triple-Quote-Syntax. Aber denken Sie daran, dass es sich um ein String-Literal handelt, das keiner Variablen zugewiesen wird.

```py
"""
  Mehrzeilige
  Kommentare
"""
```

SQL verwendet zwei Bindestriche, um einen einzeiligen Kommentar bis zum Ende der Zeile zu starten.

```sql
select name from PERSON -- Kommentare in sql
```

HTML-Kommentare haben nur mehrzeilige Syntax.

```html
<!-- kommentierter Block in xml und html -->
```

In Assembler und mehreren LISP-Dialekten verwenden wir Semikolons (oder mehrere Semikolons) für verschiedene Arten von Kommentaren.

```
; Einzeiliger Kommentar in Assembler und LISP
```
