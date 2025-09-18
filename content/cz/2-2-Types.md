## 2.2. Datové typy, skalární, referenční a strukturované typy

> Typ — množina hodnot a operací, které lze na těchto hodnotách provádět.

Například v `JavaScript` typ `Boolean` předpokládá dvě hodnoty `true` a `false` a logické operace na nich, typ `Null` předpokládá jednu hodnotu `null` a typ `Number` je množina racionálních čísel s dodatečnými omezeními na minimální a maximální hodnoty, stejně jako omezení na přesnost a matematické operace `+ - * ** / % ++ -- > < >= <= & | ~ ^ << >>`.

> Datové typy

```js
const values = [5, 'Praha', true, { size: 10 }, (a) => ++a];

const types = values.map((x) => typeof x);
console.log({ types });
```

> Skalární (Primitivní, Atomická hodnota) — hodnota primitivního datového typu.

Skalární hodnota se kopíruje při přiřazení a předává se funkci hodnotou.

> Reference ukazuje na hodnotu referenčního typu, tj. ne skalární hodnotu.

Pro `JavaScript` jsou to podtypy: `Object`, `Function`, `Array`.

> Strukturované typy (Složené typy) — složené typy nebo struktury, které se skládají z několika skalárních hodnot.

Skalární hodnoty jsou kombinovány do jedné takovým způsobem, že na této kombinované hodnotě lze provádět sadu operací. Například: objekt, pole, množina, n-tice.

> Výčtový typ

> Příznak — logická hodnota, která určuje stav něčeho.

Například: stav uzavřeného připojení, stav dokončení vyhledávání nad datovou strukturou atd.

```js
let flagName = false;
```

Někdy se příznaky mohou nazývat ne logické, ale výčtové typy.

> Řetězec — posloupnost znaků

Ve většině jazyků lze ke každému znaku přistupovat pomocí syntaxe přístupu k poli, jako jsou hranaté závorky.
