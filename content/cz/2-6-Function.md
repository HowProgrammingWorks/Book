## 2.6. Funkce vyššího řádu, čistá funkce, vedlejší účinky

Deklarace funkce (Function definition) - v `JavaScript` je to způsob deklarace funkce, který je viditelný odkudkoli v lexikálním kontextu, ve kterém je funkce deklarována, příklad:

```js
function sum(a, b) {
  return a + b;
}
```

Funkční výraz (Function expression) - propojení funkce s identifikátorem pomocí přiřazení, kde hodnota je dostupná prostřednictvím identifikátoru ne v celém lexikálním kontextu, ale pouze po místě přiřazení. Má několik syntaktických variant:

Funkční výraz s pojmenovanou funkcí (Named function expression):

```js
const sum = function sum(a, b) {
  return a + b;
};
```

Anonymní funkční výraz (Anonymous function expression):

```js
const sum = function (a, b) {
  return a + b;
};
```

Šipková nebo lambda funkce (Arrow, Lambda function):

```js
const sum = (a, b) => {
  return a + b;
};
```

Lambda výraz, šipková funkce s výrazem jako tělem (Lambda expression, Arrow function):

```js
const sum = (a, b) => a + b;
```

> Čistá funkce (Pure Function) - deterministická funkce bez vedlejších účinků.

Čistá funkce je funkce, která počítá výsledek pouze na základě argumentů, nemá stav a nepřistupuje k operacím vstupu-výstupu. Výsledek takové funkce je vždy deterministický a bez vedlejších účinků (viz vedlejší účinek).

> Uzávěr (Closure) - funkce spojená s lexikálním prostředím v okamžiku svého vytvoření.

Pokud je funkce `g` vrácena z funkce `f`, pak `g` uvidí kontext funkce `f`, stejně jako své vlastní argumenty. Pokud `f` vrací `g`, říká se, že instance `g` uzavřela kontext `f`. Uzávěr je způsob, jak propojit funkci s kontextem (s daty nebo kontextovými proměnnými). Uzávěr umožňuje vytvořit efekt podobný stavu objektu (sadě jeho vlastností) v OOP. Vlastnosti jsou propojeny s metodami prostřednictvím objektu, v podstatě je objekt v OOP sám kontextem propojení. Uzávěr také vytváří podobný kontext, ale na základě funkcí první třídy a lexikálního kontextu, ne objektově orientovaného.

Pomocí uzávěrů lze implementovat funkční dědičnost.

Příklady:

```js
const sum = (a) => (b) => a + b;

const hash =
  (data = {}) =>
  (key, value) => ((data[key] = value), data);
```

> Superpozice (Superposition) - kombinace volání funkcí ve výrazech tak, že výsledek některých funkcí se stává argumenty jiných funkcí.

```js
const expr2 = sum(
  pow(mul(5, 8), 2),
  div(inc(sqrt(20)), log(2, 7))
);
```

> Kompozice (Composition) - vytvoření nové funkce kombinací jednodušších.

```js
const compose = (f1, f2) => (x) => f2(f1(x));
```

```js
// prettier-ignore
const compose = (...funcs) => (...args) =>
  funcs.reduce((args, fn) => [fn(...args)], args);
```

> Částečná aplikace (Partial application)

```js
// prettier-ignore
const partial = (fn, x) => (...args) => fn(x, ...args);
```

> Curryfikace (Currying)

```js
const result = curry((a, b, c) => a + b + c)(1, 2)(3);
```

> Vedlejší účinky (Side effects)

> Funkce vyššího řádu (Higher-order Function)

1. Pokud je funkce předána jako argument jiné funkci, je to callback.
2. Pokud je funkce vrácena jako výsledek, je to továrna funkcí na uzávěrech.
3. Pokud má vrácená funkce stejnou sémantiku jako přijatá v argumentech, ale s dodatečným (rozšířeným) chováním, je to wrapper funkce.
4. Zřídka se stává, že vrácená funkce není propojena s funkcí z argumentů nebo není propojena přímo a má také jinou sémantiku a není wrapper funkcí.
5. Pokud na výstupu je třída nebo konstruktorová funkce, jsou to továrny pro třídy a prototypy.

> Wrapper funkce (Wrapper)

Funkce, která obaluje jinou funkci (někdy objekt, rozhraní nebo funkční objekt) a přidává jí dodatečné chování. Můžete obalit celé API rozhraní a dokonce asynchronní funkci spolu s callbacky (pokud je známá smlouva).

```js
const sum = (a, b) => a + b;

console.log(`Add nums:    ${sum(5, 2)}`);
console.log(`Add float:   ${sum(5.1, 2.3)}`);
console.log(`Concatenate: ${sum('5', '2')}`);
console.log(`Subtraction: ${sum(5, -2)}`);
```
