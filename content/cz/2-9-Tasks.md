## 2.9. Úkoly

`Úkol 1.` Vezměme si příklad, který jsme již zvažovali, ale kterému byly přidány některé chyby. Zkopírujte tento kód do samostatného souboru a opravte ho tak, aby nejen fungoval, ale byl také krásný a srozumitelný. Jako referenci můžete použít kód z knihy a přednášek.

```js
const Items = [
  { CENA: 40 } ,{ CENA : 120 },{
  CENA: '505',
  }, { CENA: 350 }];

For (const ITEM of items){
console.log(`Price: ${item.price}`);
}
```

`Úkol 2.` Nyní vytvořme funkci, která vypočítá součet celého nákupu. Dejte funkci srozumitelné jméno a přidejte následující pravidla: musí se zkontrolovat, zda je cena číslo (pomocí `typeof`), sčítáme pouze kladné ceny, a pokud najdeme nečíslo nebo záporné číslo, vydáme chybu pomocí `throw`.

Během plnění úkolu hledejte na internetu dokumentaci k `for..of`, `throw`, `console.log`, funkcím a polím. Nejlépe hledejte v MDN (mozilla developers network).

Ujistěte se, že kód běží v příkazovém řádku přes node.js nebo v prohlížeči.

`Úkol 3.` Vezměte tuto datovou strukturu a doplňte ji zbožím a skupinami zboží podle příkladu těch, které již existují:

```js
const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
};
```

Umístěte kód do souboru a vypište celou strukturu na obrazovku spuštěním kódu v node.js nebo v prohlížeči.

`Úkol 4.` Napište funkci `find`, která projde strukturou z předchozího úkolu a najde produkt podle jeho jména (zkontroluje všechny skupiny produktů). Jména se mohou opakovat, ale tentokrát nás zajímá pouze první produkt, jehož jméno se shoduje.

Příklad použití funkce `find`:

```js
const result = find(purchase, 'Laptop');
console.log(result);
```

Mělo by vypsat: `{ name: 'Laptop', price: 1500 }`

`Úkol 5.` Nyní rozšíříme předchozí úkol: funkce `find` musí být změněna tak, aby vracela pole obsahující všechny produkty se zadaným jménem. Pokud se žádný nenajde, pak prázdné pole.
