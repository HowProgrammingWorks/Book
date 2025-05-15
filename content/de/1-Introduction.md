## 1. Einführung

Die **ständige Reflexion über die eigene Tätigkeit** – selbst über scheinbar triviale Aufgaben – sollte eine _normale Gewohnheit_ eines jeden Ingenieurs sein und ihn sein ganzes Berufsleben begleiten. Die Angewohnheit, Gedanken **schriftlich festzuhalten** und Formulierungen immer wieder zu präzisieren, hilft dabei enorm.

Dieser Text entstand aus meinen verstreuten Notizen, die ich im Laufe der Jahre sammelte und **Dutzende Male kritisch überarbeitete**. Nicht selten widersprach ich mir selbst, sobald ein Abschnitt einige Zeit „ablag“ – also schrieb ich so lange um, bis ich nach längeren Reifephasen **vollständig hinter jeder Zeile** stehen konnte. Mein erklärtes Ziel war maximale **Kürze**: Ganze Passagen wurden mehrfach gekürzt, weil ich sie knapper ausdrücken konnte.

Eine erkennbare **Struktur** – Kapitelübersicht und Inhaltsverzeichnis – formte sich erst nach dem ersten Jahr meiner Lehrtätigkeit. Im zehnten Jahr fasste ich den Entschluss, das Material nicht mehr nur als frei zugängliche Video-Vorlesungen (wie schon etwa fünf Jahre zuvor), sondern zusätzlich als **Fließtext** zu veröffentlichen. Dadurch kann jede\*r aus der **Metarchia-Community** an der Entstehung des Buchs mitwirken, Tipp- und Sachfehler lassen sich dank der Leserschaft schnell finden, und vielen ist die Textform schlicht angenehmer.

Die jeweils **aktuelle Version** liegt unter  
<https://github.com/HowProgrammingWorks/Book>  
und wird fortlaufend ergänzt.  
_Bug-Reports_ oder Korrekturvorschläge bitte als **Issue** auf Englisch einreichen:  
<https://github.com/HowProgrammingWorks/Book/issues>  
Neue Ideen gern in den **Discussions** (beliebige Sprache):  
<https://github.com/HowProgrammingWorks/Book/discussions>  
Eigene Ergänzungen und Verbesserungen bitte als **Pull Request** an das Buch-Repository schicken.

> **Programmieren ist die Kunst und Ingenieurwissenschaft, Probleme mithilfe von Rechentechnik zu lösen.**

Es ist **Ingenieurwesen**, weil es vorhandenes Wissen nutzbar macht, und **Kunst**, weil Programmieren heute leider nicht allein auf Wissen basiert, sondern oft auf Intuition und schwer erklärbarer persönlicher Erfahrung beruht. Die Aufgabe einer*eines* Entwickler\*in besteht nicht darin, ein **einzig mathematisch korrektes** Ergebnis zu finden, sondern einen **allgemeinen Lösungsmechanismus**, der in begrenzter Zeit für eine möglichst große Klasse von Problemen **akzeptable Ergebnisse** liefert – kurz: eine abstrahierte **Klasse von Lösungen**.

Zwar setzen nicht alle **Programmierparadigmen** auf strikte Schrittfolgen, doch sowohl die **physische Realisierung** von Rechenmaschinen als auch die Natur menschlichen Denkens sind grundsätzlich **schrittweise**. Die Schwierigkeit liegt darin, dass sich viele dieser Schritte nicht auf reine CPU-Operationen reduzieren lassen, sondern externe **Ein-/Ausgabe** sowie Sensorik – und damit den äußeren Kosmos und den Menschen – einbeziehen. Diese Unwägbarkeiten verhindern einen lückenlos **mathematischen Beweis** für die Korrektheit beliebiger Lösungswege, geschweige denn deren Ableitung aus Axiomen, wie es für die exakten Wissenschaften typisch wäre. Einzelne **Algorithmen** jedoch _können und sollen_ analytisch hergeleitet werden, wenn sie sich auf **reine Funktionen** zurückführen lassen: Funktionen, die für dieselben Eingaben **immer** exakt dasselbe Ergebnis liefern, keinerlei **Zustand** besitzen und nur andere reine Funktionen aufrufen.

Von der Mathematik hat die Informatik die Fähigkeit geerbt, **exakte Lösungen** analytisch zu finden, und der Rechner selbst arbeitet strikt innerhalb eines **formalen mathematischen Apparats**. Doch das Schreiben von Code lässt sich nicht vollständig formalisieren; wir treffen Entscheidungen unter erheblicher Unsicherheit und konstruieren Software **ingenieurmäßig**. Entwickelnde sind zudem an **Projektzeiten** gebunden. Deshalb verringern wir Ungewissheit, indem wir **konstruktive Beschränkungen** einführen, die sich nicht streng aus der Aufgabe ableiten lassen, sondern auf Intuition und Erfahrung beruhen.

Fehlt ein optimaler Algorithmus, darf die*der* Programmierer\*in **jeden gangbaren Weg** wählen, der akzeptable Resultate in angemessener Zeit liefert **und** sich solange implementieren lässt, wie die Aufgabe relevant bleibt. Wir müssen daher nicht nur die Nähe zur optimalen Lösung bewerten, sondern ebenso **Kompetenz**, Werkzeugbeherrschung und sonstige Ressourcen berücksichtigen. Der Zugang zu Wissen und bestehenden Lösungen ist zudem durch **Urheberrecht, Lizenzmodelle** und proprietäre Dokumentation eingeschränkt – nicht nur bei Software, sondern auch bei Büchern, Videos und Kursmaterialien. Das alles bremst die Branche, doch der **Wissenszugang wächst unumkehrbar**: Durch Popularisierer, Enthusiasten und die Bewegung **Freier Software** sickern immer mehr Kenntnisse frei ins Netz.
