## 2.4. Kontexty a lexikální rozsah

> Oblast viditelnosti (Scope)

Oblast viditelnosti - část kódu, ze které je "viditelný" identifikátor. Podívejme se na příklad:

```js
const level = 1;

const f = () => {
  const level = 2;
  {
    const level = 3;
    console.log(level); // 3
  }
  console.log(level); // 2
};
```

V moderním standardu JavaScript je oblast viditelnosti vytvářena funkcí nebo jakýmkoli blokem příkazů, který má složené závorky {}. V Pythonu je scope vytvářen pouze funkcemi. Porovnejte tento kód s předchozím příkladem:

```py
level = 1

def f():
  level = 2
  if level == 2:
    level = 3
    print(level) // 3
  print(level) // 3

f()
```

> Lexikální kontext (Lexical environment)

Sada identifikátorů dostupných v lokálním bloku nebo funkci. Pokud identifikátor není nalezen v lexikálním kontextu, vyhledávání pokračuje v nadřazeném kontextu, protože kontexty mají vnořenou strukturu. Pokud se po dosažení kořene identifikátor nenajde, bude provedeno vyhledávání v globálním kontextu. Pro JavaScript jsou lexikální kontexty omezeny bloky {} a funkcemi, pro Python pouze funkcemi.

Lexikální kontext nebo lexikální prostředí má vnořenost, tj. kromě lokálních proměnných v bloku, který vytváří kontext, existuje i nadřazený blok se svým kontextem. Pokud je identifikátor definován v nadřazeném kontextu, je viditelný ve všech vnořených, pokud nedochází k překrytí názvů. Překrytí je případ, kdy je ve vnořeném kontextu znovu deklarován identifikátor, který již existuje ve vnějším, pak se hodnota z vnějšího kontextu stává nedostupnou a můžeme přistupovat pouze k vnitřnímu.

> Objektový kontext

Objekt dostupný z metod a funkcí prostřednictvím speciálního identifikátoru `this` se také používá jako kontext. Ve většině programovacích jazyků se metoda váže s `this` při vytváření objektu třídy. Ale v JavaScriptu mohou být funkce připojeny k `this` pomocí `bind` nebo jednorázově volány v kontextu objektu prostřednictvím `call` a `apply`. Všechny funkce kromě šipkových mohou být vázány s objekty.

> Globální kontext (Global context)

Pokud identifikátor není nalezen v žádném z vnořených lexikálních kontextů, bude provedeno jeho vyhledávání v globálním objektu-referenčním, který je globálním kontextem (v JavaScriptu `global` nebo `window`).
