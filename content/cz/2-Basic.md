# 2. Základní pojmy

Potřebujeme komentáře k dočasnému zabránění spuštění nebo kompilace bloku kódu, k uložení strukturovaných anotací nebo metadat (interpretovaných speciálními nástroji), k uchování `TODOs` nebo vysvětlení čitelných pro vývojáře.

> `Komentář` je posloupnost znaků v kódu ignorovaná kompilátorem nebo interpretem.

Komentáře ve všech jazycích rodiny `C`, jako jsou `C++`, `JavaScript`, `Java`, `C#`, `Swift`, `Kotlin`, `Go` atd., mají stejnou syntaxi.

```js
// Single-line comment
```

```js
/*
  Multi-line
  comments
*/
```

Nedržte v komentářích zřejmé věci, neopakujte něco, co je jasné z samotného kódu.

V bash (shell-skriptech) a Python používáme znak čísla (křížek nebo hash symbol) pro komentování.

```py
# Single-line comment
```

Python používá víceřádkové řetězce jako víceřádkové komentáře s trojitou syntaxí uvozovek. Ale pamatujte, že se jedná o řetězcový literál nepřiřazený k proměnné.

```py
"""
  Multi-line
  comments
"""
```

SQL používá dvě pomlčky k zahájení jednořádkového komentáře do konce řádku.

```sql
select name from PERSON -- comments in sql
```

HTML komentáře mají pouze víceřádkovou syntaxi.

```html
<!-- commented block in xml and html -->
```

V Assembleru a mnoha dialektech LISP používáme středníky (nebo více středníků) pro různé typy komentářů.

```
; Single-line comment in Assembler and LISP
```
