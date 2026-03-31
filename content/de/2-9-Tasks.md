## 2.9. Aufgaben zum Abschnitt

`Aufgabe 1.` Nehmen wir ein Beispiel, das wir bereits betrachtet haben, aber dem einige Fehler hinzugefügt wurden. Kopieren Sie diesen Code in eine separate Datei und korrigieren Sie ihn, damit er nicht nur funktioniert, sondern auch schön und verständlich ist. Als Referenz können Sie den Code aus dem Buch und den Vorlesungen verwenden.

```js
const Items = [
  { CENA: 40 } ,{ CENA : 120 },{
  CENA: '505',
  }, { CENA: 350 }];

For (const ITEM of items){
console.log(`Price: ${item.price}`);
}
```

`Aufgabe 2.` Lassen Sie uns nun eine Funktion erstellen, die die Summe des gesamten Einkaufs berechnet. Geben Sie der Funktion einen verständlichen Namen und fügen Sie folgende Regeln hinzu: Es muss überprüft werden, ob der Preis eine Zahl ist (mit `typeof`), wir summieren nur positive Preise, und wenn wir keine Zahl oder eine negative Zahl finden, geben wir einen Fehler mit `throw` aus.

Während der Ausführung der Aufgabe, suchen Sie im Internet nach Dokumentation zu `for..of`, `throw`, `console.log`, Funktionen und Arrays. Am besten suchen Sie in MDN (mozilla developers network).

Stellen Sie sicher, dass der Code in der Kommandozeile über node.js oder im Browser läuft.

`Aufgabe 3.` Nehmen Sie diese Datenstruktur und ergänzen Sie sie mit Waren und Warengruppen nach dem Beispiel der bereits vorhandenen:

```js
const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
};
```

Platzieren Sie den Code in eine Datei und geben Sie die gesamte Struktur auf dem Bildschirm aus, indem Sie den Code in node.js oder im Browser ausführen.

`Aufgabe 4.` Schreiben Sie eine Funktion `find`, die durch die Struktur aus der vorherigen Aufgabe geht und ein Produkt anhand seines Namens findet (alle Produktgruppen überprüfend). Namen können sich wiederholen, aber diesmal interessiert uns nur das erste Produkt, dessen Name übereinstimmt.

Beispiel für die Verwendung der Funktion `find`:

```js
const result = find(purchase, 'Laptop');
console.log(result);
```

Sollte ausgeben: `{ name: 'Laptop', price: 1500 }`

`Aufgabe 5.` Erweitern wir nun die vorherige Aufgabe: Die Funktion `find` muss so geändert werden, dass sie ein Array zurückgibt, das alle Produkte mit dem angegebenen Namen enthält. Wenn keines gefunden wird, dann ein leeres Array.
