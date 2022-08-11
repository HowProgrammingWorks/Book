## 1.2. Příklady v jazycích JavaScript, Python a C

Příklady kódu budeme psát v různých jazycích, ale přednost nebudou mít ty nejlepší z ních, krásné a rychlé, ale ty, bez kterých se nelze obejít. `JavaScript` budeme brát jako nejrozšířenější, `Python`, protože jsou oblasti, kde to bez něj nejde, a `C`, jako jazyk dostatečně blízký `Assembleru`, jazyku symbolických instrukcí, i který je stále relevantní a má největší vliv na moderní jazyky z hlediska syntaxe a myšlenek v něm obsažených. Všechny tři mají k mému vysněnému jazyku hodně daleko, ale tohle je to, co máme. `Python` se na první pohled velmi liší od `JavaScript` a dalších `C-podobných` jazyků, i když je to jen na první pohled, ukážeme si, že je `JavaScriptu` velmi podobný právě díky tomu, že typový systém, datové struktury a zejména vestavěné v nich kolekce jsou skoro stejné. Syntakticky rozdíl v organizaci bloků kódu pomocí odsazení a složených závorek `{}` je markantní, ale ve skutečnosti takový rozdíl není příliš významný a `JavaScript` a `Python` mají mnohem více společného, než oba mají s jazykem `C`.

Nezačneme učením syntaxe, ale rovnou čtením špatného kódu a hledáním tam chyb. Podívejme se na následující úryvky, první bude v jazyku `JavaScript`:

```js
let first_num = 2;
let secord_num = 3;
let sum = firstNum + secondNum;
console.log({ sum });
```

Pokuste se porozumět tomu, co je zde napsáno a kde mohou být chyby. A pak porovnejte tento kód s jeho překladem do `C-ečka`:

```c
#include <stdio.h>

int main() {
  int first_num = 2;
  int secord_num = 3;
  int sum = firstNum + secondNum;
  printf("%d\n", sum);
}
```

Chyby jsou zde stejné, snadno je pozná i člověk, který nezná ani základy programování, pokud si ovšem kód prozkoumá. Další část kódu bude v `Pythonu`, dělá to samé a se stejnými chybami.

```py
first_num = 2;
secord_num = 3;
sum = firstNum + secondNum;
print({ 'sum': sum  });
```

Dále budeme často porovnávat příklady kódu v různých jazycích, hledat a opravovat chyby, optimalizovat kód a především zlepšovat jeho čitelnost a srozumitelnost.
