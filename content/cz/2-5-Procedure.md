## 2.5. Procedurální paradigma, volání, zásobník a halda

> Procedura nebo podprogram (Procedure, Subroutine) - logicky související skupina instrukcí nebo operátorů, která má jméno.

Procedura podporuje opakované použití kódu a může být volána z různých částí programu mnohokrát a s různými argumenty. Procedura nevrací hodnoty, na rozdíl od funkcí, ale v některých jazycích (ale ne v JavaScript) může modifikovat své argumenty. V mnoha jazycích je procedura popsána pomocí syntaxe funkcí (například typu void).

> Funkce (Function) - abstrakce transformace hodnot. Funkce jednoznačně mapuje jednu množinu hodnot na jinou množinu hodnot.

Funkce může být zadána blokem operátorů nebo výrazem. Funkce má sadu argumentů. Funkce může být volána podle jména nebo prostřednictvím ukazatele. Funkce podporuje opakované použití kódu a může být volána z různých částí programu mnohokrát a s různými argumenty. V JavaScriptu je funkce popsána pomocí `function` nebo syntaxe šipek (lambda funkcí).

Signatura funkce (Function signature) zahrnuje: jméno (identifikátor), počet argumentů a jejich typy (a někdy i jména argumentů), typ výsledku.

> Metoda - funkce nebo procedura spojená s objektem nebo třídou.

```js
{
  a: 10,
  b: 10,
  sum() {
    return this.a + this.b;
  }
}
```

```js
const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = (name) => {
  let res = '';
  const letters = name.split('');
  let color = 0;
  for (const letter of letters) {
    res += colorer(letter, color++);
    if (color > COLORS.length) color = 0;
  }
  return res;
};

const greetings = (name) =>
  name.includes('Augustus')
    ? `${SALUTATION}, ${colorize(name)}!`
    : `Hello, ${name}!`;
```

> Použití

```js
const fullName = 'Marcus Aurelius Antoninus Augustus';
console.log(greetings(fullName));

const shortName = 'Marcus Aurelius';
console.log(greetings(shortName));
```
