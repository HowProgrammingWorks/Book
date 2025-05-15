## 1.7 Überblick über Programmierparadigmen

Ein **Mathematiker** betrachtet ein Programm als **Funktion**, die sich in einfachere Funktionen **dekomponieren** lässt, sodass das Gesamtprogramm eine **Komposition** dieser Teilfunktionen bildet. Vereinfacht gesagt ist ein Programm dann eine komplexe Formel – ein **Daten-Transformator**, der am Eingang die Aufgabenparameter erhält und am Ausgang die Lösung liefert. Nicht jeder Entwickler kennt diese Sichtweise; sie ist nicht perfekt, aber nützlich, um das eigene Tun neu zu reflektieren.

Verbreiteter ist die gegenteilige Perspektive, die sich direkt aus der **Praxis des Programmierens** ergibt. Hier entwickelt man Anwendungen ausgehend von den Bedürfnissen der **Benutzer**, von **UI-Mock-ups** sowie von den verfügbaren Werkzeugen, Sprachen, Plattformen und Bibliotheken. Das Ergebnis ist weniger eine Programm-Funktion als vielmehr ein großes **Zustandssystem**, in dem eine **kombinatorische Explosion** von Übergängen entsteht und dessen Verhalten selbst für die Autorin oder den Autor schwer vorherzusagen ist – geschweige denn für den Nutzer.

Diesen scheinbar problematischen Ansatz darf man jedoch nicht vorschnell verwerfen. Sein konstruktiver Kern liegt darin, dass sich nicht jedes Programm in absehbarer Zeit als reine **funk­tionale Daten­transformation** realisieren lässt. Darüber hinaus besteht menschliches Handeln aus **Schritten** und der Veränderung des Zustands unserer Umgebung durch **schrittweise Manipulation** – eine Darstellung als reine Funktionen wäre für unser Denken unnatürlich.

Ein **Paradigma** definiert einen Satz von Ideen und Begriffen, Annahmen und Einschränkungen, Konzepten, Prinzipien, Postulaten, Mustern und Techniken, die wir zum Lösen von Aufgaben auf einem Rechner heranziehen.

In diesem Abschnitt skizzieren wir einige Paradigmen; weiter hinten im Buch folgt für jedes eine eigene, ausführlichere Kapitel. Manche **Programmiersprachen** unterstützen nur ein Paradigma, andere sind **multiparadigmatisch**. Wir betrachten verschiedene Sprachen und wie sie die Paradigmen konkret umsetzen.

Für Menschen ist es intuitiv, jede Tätigkeit als **Abfolge von Schritten** – also als **Algorithmus** – zu sehen: das ist der **imperative Ansatz**. Diese Schritte können linear sein oder per **Verzweigung** zu einem anderen Teilplan führen. Der Entscheidungs­vorgang besteht für die Maschine in einem **Vergleichs­operator**, der meist zwei Alternativen eröffnet.

Aktionen lassen sich grob in **interne** und **externe** unterteilen.

- **Interne Operationen** betreffen ausschließlich Prozessor und Speicher; sie sind sofort abgeschlossen und ihr Ergebnis steht im nächsten Algorithmus­schritt bereit.
- **Externe Operationen** richten sich an **Ein-/Ausgabe-Geräte** (Netzwerk, Festplatten, Sensoren usw.) und erfordern das Warten auf eine Reaktion – deren Dauer ist im Voraus meist unbekannt.

Wir senden also ein Steuersignal an ein Peripheriegerät und übermitteln die nötigen Daten. Anschließend haben wir zwei Möglichkeiten:

1. Wir **warten** auf das Ergebnis (**blockierender I/O**), oder
2. wir fahren mit dem nächsten Algorithmus­schritt fort, ohne das Ergebnis abzuwarten (**nicht­blockierender I/O**).

Diese Unterscheidung ist den großen Laufzeitunterschieden zwischen internen und externen Aktionen geschuldet. Externe Vorgänge gehen oft mit **physischen** oder sogar **analogen** Prozessen einher (etwa Funksignal, Plattenzugriff, Sensorablesung), die zusätzliche Daten­umwandlung, **Übergangsvorgänge** oder ein bestimmtes Gerät­signal abwarten. Viele Geräte besitzen eigene **Controller**, auf denen ein separater Befehlsstrom läuft; die Abstimmung zwischen **CPU** und Peripherie kostet Zeit und kann scheitern.

Ein Paradigma liefert somit ein **abstraktes Modell** zur Problemlösung, einen charakteristischen **Stil**, Beispiele guter und schlechter Lösungen sowie erprobte **Pattern**, die beim Schreiben von Code Anwendung finden.
