## 1.4. Algorithmus, Programm, Syntax, Sprache

Es gibt viele Begriffe, die mit der Programmierung verbunden sind. Um Klarheit zu schaffen, sollten wir den Unterschied zwischen ihnen verstehen. Ein informelles Verständnis ist dabei nützlicher als eine rein formale Definition.

> **Algorithmus (Algorithm)**

Ein Algorithmus ist noch kein Programm, sondern eine formal beschriebene Idee zur Lösung einer Aufgabe. Die Beschreibung muss so verfasst sein, dass andere sie verstehen, überprüfen und umsetzen können. Einen Algorithmus kann man nicht ausführen; er muss in Code einer Programmiersprache übertragen werden. Ein Algorithmus enthält die Beschreibung von Operationen und kann auf verschiedene Arten notiert werden: als Formel, als Blockdiagramm oder als Schrittfolge in natürlicher Sprache. Er ist immer auf eine bestimmte Klasse von Aufgaben beschränkt, die er in endlicher Zeit löst. Häufig können wir einen Algorithmus vereinfachen und optimieren, indem wir die Aufgabenklasse einschränken. Wenn wir zum Beispiel von der Addition ganzer und gebrochener Zahlen auf die Addition nur ganzer Zahlen übergehen, können wir eine effizientere Implementierung erreichen. Ebenso können wir die Aufgabenklasse erweitern, indem wir zusätzlich Zeichenketten, die Zahlen darstellen, als Eingabe zulassen; das macht den Algorithmus allgemeiner, aber weniger effizient. Wir müssen entscheiden, was genau wir optimieren. In diesem Fall ist es besser, den Algorithmus aufzuteilen: Einer wandelt alle Zahlen in einen Datentyp um, der andere führt die Addition durch.

> **Beispiel zur Implementierung des GGT-Algorithmus (Euclid)**

In `JavaScript` kann der euklidische Algorithmus zur Bestimmung des größten gemeinsamen Teilers (GGT) so aussehen:

```js
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
```

Oder noch kürzer:

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```

Dieser einfache Algorithmus ist **rekursiv**: Er ruft sich selbst auf, bis `b` den Wert `0` erreicht. Für Algorithmen können wir die Rechenkomplexität bestimmen und sie nach dem benötigten Zeit- und Speicheraufwand klassifizieren.

> **Programm (Program)**

Im vorherigen Beispiel hatten wir eine Funktion – nur einen Teil eines Programms. Damit sie wirkt, muss man sie aufrufen und Daten übergeben. Programmcode und Daten, die zu einer Einheit zusammengeführt sind, bilden ein **Programm**. Niklaus Wirth verdeutlichte das im Buchtitel: „Algorithmen + Datenstrukturen = Programme“. In den ersten Jahrzehnten der Softwareindustrie zeigte sich, dass Datenstrukturen nicht weniger wichtig sind als Algorithmen. Linus Torvalds meint: „Schlechte Programmierer kümmern sich um Code. Gute Programmierer kümmern sich um Datenstrukturen und ihre Beziehungen.“ Die Wahl der Datenstrukturen bestimmt weitgehend den Algorithmus und dessen Komplexität; über die Daten im Speicher versteht der Programmierer die Aufgabe besser als über die reine Abfolge von Operationen.

Eric Raymond formulierte: „Intelligente Datenstrukturen und dummer Code funktionieren viel besser als andersherum.“

> **Code als gemeinsame Sprache**

Linus Torvalds sagte auch: „Reden ist billig. Zeig mir den Code.“ Programmcode ist eindeutig und ermöglicht es Entwicklern, sich zu verständigen, selbst wenn natürliche Sprachen wegen Mehrdeutigkeit versagen.

> **Ingenieurwesen (Engineering)**

Ingenieurwesen ist die praktische Nutzung vorhandener Ressourcen durch Wissenschaft, Technik, Methoden, Organisation und Wissen. Schon früh war mir wichtig, dass Code Menschen nützt, ihr Leben verbessert und lange lebt. Wettbewerbs- oder Lehrbeispiele erschienen mir künstlich; ich wollte Software schreiben, die täglich genutzt wird: Datenbankanwendungen, Netz- und Kommunikationsprogramme, Steuerungssoftware und Entwicklerwerkzeuge.

Wie in anderen Ingenieurdisziplinen zählt der Nutzen für den Menschen mehr als die Eleganz des Konzepts. Wenn wissenschaftliche Erkenntnisse fehlen, greift man auf Intuition, Erfahrung und Versuch-und-Irrtum zurück. Das führt zu vielen unterschiedlichen und teils widersprüchlichen Lösungen. Niklaus Wirth bemerkte: „Programme werden langsamer, schneller als Hardware schneller wird“, und oft ist Neuschreiben einfacher als Reparieren.

> **Software-Engineering (Software engineering)**

Die Anwendung ingenieurmäßiger Ansätze auf Software umfasst Architektur, Forschung, Entwicklung, Test, Bereitstellung und Wartung. Die Branche nutzt Hilfspraktiken, um Produkte verlässlich genug zu machen, um Gewinn zu bringen, aber nicht so perfekt, dass keine neuen Versionen nötig wären.

„Die meisten Programme ähneln ägyptischen Pyramiden – Millionen Steine übereinander ohne strukturelle Geschlossenheit, bloß durch Kraft und unzählige Arbeiter errichtet.“ – Alan Kay

> **Programmierung (Programming)**

Programmierung ist die Kunst und das Ingenieurhandwerk, Aufgaben mit Rechentechnik zu lösen. Die Hardware beeinflusst stark, welche Paradigmen effizient sind – in Bezug sowohl auf Entwicklungsaufwand als auch auf Laufzeitressourcen.

> **Codierung (Coding)**

Beschränkt man sich auf das Schreiben von Quellcode nach einer fertigen Spezifikation, spricht man von **Codierung**. Entwicklung lässt sich in Entwurf und Codierung trennen; dennoch entsteht oft Code ohne Spezifikation – als Prototyp, MVP oder Pilot. Ihr Nutzen liegt in der Überprüfung von Hypothesen zu Anwendernutzen oder Wirtschaftlichkeit.

Programmierer verwechseln manchmal Prototyp und Produkt: Man erhält entweder einen Prototyp, der wie ein Produkt gepflegt werden muss, oder ein Produkt, das prototypisch zusammengestrickt ist. Die Branche lebt dennoch von Enthusiasten:

„Die meisten guten Programmierer programmieren nicht wegen Geld oder Anerkennung, sondern weil Programmieren Spaß macht.“ – Linus Torvalds

> **Entwickler vs. Programmierer**

Es gibt Befürworter für beide Bezeichnungen. Häufig ist die Selbstbezeichnung `Entwickler` oder `Programmierer` mit einem besonderen beruflichen Stolz verbunden, nicht selten sogar mit einer gewissen Überheblichkeit gegenüber den Anhängern der anderen Bezeichnung. Es wäre sinnvoll, diese Berufe ungefähr so zu unterscheiden, wie sich die Berufe von Fahrer und Kfz-Mechaniker unterscheiden haben. Natürlich kann der Mechaniker behaupten, dass Fahrer keine Ahnung von Fahrzeugen haben, aber im Alltag werden die Menschen von Fahrern transportiert.

Ähnlich ist es in der IT: Der Programmierer sollte sich auf Abstraktionen und die Entwicklung von Softwarekomponenten konzentrieren, während sich der Entwickler auf die Anwendung fertiger Komponenten zur Lösung konkreter Aufgaben spezialisiert. Das erfordert wiederum andere Kenntnisse und Fähigkeiten außerhalb der Programmierung.

> **Komplexität und Einfachheit**

Streben wir nach Programmen, die für Anwender und für uns als Entwickler einfach zu verstehen sind. Wenn wir unter Zeitdruck ineffizienten oder schwer verständlichen Code schreiben müssen, sollten wir eine Überarbeitung, ein Refactoring und eine Optimierung einplanen, bevor wir die Struktur vergessen oder unsere Ideen zur Verbesserung verblassen. Die Ansammlung solcher Probleme im Code nennt man **technische Schuld**. Sie macht Programme nicht nur unflexibler und schwerer verständlich, sondern sorgt auch dafür, dass neue Kollegen beim Lesen des Codes schlechte Praktiken übernehmen. Die Einfachheit in der Lösung komplexer Aufgaben ist das Ziel eines guten Programmierers, das Verbergen dieser Komplexität hinter Abstraktionen ist die Methode eines erfahrenen Ingenieurs.

„Ich habe mir immer gewünscht, mein Computer wäre so einfach zu bedienen wie mein Telefon. Mein Wunsch ist in Erfüllung gegangen: Jetzt weiß ich nicht mehr, wie ich mein Telefon bedienen soll.“ – Bjarne Stroustrup
