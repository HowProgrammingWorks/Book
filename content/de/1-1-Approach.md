## 1.1. Lernansätze beim Programmieren

Viele denken, dass die wichtigste Fähigkeit eines Programmierers das Schreiben von Code ist. Tatsächlich lesen und korrigieren Programmierer jedoch viel öfter Code. Die Hauptkriterien für qualitativ hochwertigen Code sind Verständlichkeit, Lesbarkeit und Einfachheit. Wie Harold Abelson sagte: „Programme sollten für Menschen geschrieben werden, die sie lesen, nicht für Maschinen, die sie ausführen.“

> Die wichtigsten Fähigkeiten eines Programmierers sind das Lesen und Korrigieren von Code.

Jedes Thema enthält Beispiele für guten und schlechten Code. Diese Beispiele stammen aus der Programmierpraxis und der Projektüberprüfung. Die absichtlich vorbereiteten schlechten Codebeispiele funktionieren zwar, sind aber voller Anti-Patterns und Probleme, die erkannt und behoben werden müssen. Bereits die allererste praktische Aufgabe im Kurs besteht darin, Code zu verbessern und seine Lesbarkeit zu erhöhen. Gibt man Anfängern klassische Aufgaben (z. B. eine Funktion, einen Algorithmus oder eine Klasse nach Vorgabe zu schreiben), setzen sie diese meist nicht optimal um, verteidigen ihren Code aber, weil es das erste ist, was sie geschrieben haben. Ist die Aufgabe jedoch, „fremden schlechten Code zu nehmen, Probleme zu finden und sie zu beheben“, also den Code nicht von Grund auf neu zu schreiben, sondern schrittweise zu verbessern und diese Schritte bewusst nachzuvollziehen, wird ein kritischer Denkprozess angestoßen.

> Schlechten Code zu korrigieren ist eine der effektivsten Lernmethoden.

Einsteiger erhalten Beispiele für Code-Reviews und versuchen anschließend, ihre eigenen Aufgaben analog zu verbessern. Solche Iterationen wiederholen sich häufig und fördern dauerhaft eine kritische Herangehensweise. Ideal ist es, wenn ein Mentor die Verbesserungen beobachtet und gezielt korrigierend eingreifen oder Hinweise geben kann. Der Mentor sollte jedoch keinesfalls die Arbeit für den Anfänger erledigen, sondern ihn vielmehr dazu anregen, wie man über Programmierung nachdenken und nach Lösungen suchen sollte.

> Ein Mentor ist ein unverzichtbarer Begleiter bei der beruflichen Weiterentwicklung.

Anschließend folgen Aufgaben, bei denen der eigene Code geschrieben wird. Wir empfehlen Anfängern ausdrücklich, ihre Lösungen untereinander auszutauschen, um Peer-Reviews durchzuführen. Zuvor sollten jedoch Linters und Formatierer eingesetzt werden, um den Code syntaktisch zu analysieren, Fehler zu finden und problematische Stellen anhand vieler Codevorlagen aufzudecken. Ziel ist es, dass der Kollege den Gedankengang versteht – und keine Zeit mit Syntax oder Formatierung verliert.

> Nutzt freundliches Code-Review, Peer-Review, Linters und Formatierer.

Im nächsten Schritt folgen Übungen zur Entkopplung verschiedener Abstraktionsebenen und anschließend von Modulen. Ziel ist es, dass möglichst wenig Wissen über Datenstrukturen eines Programmteils in einem anderen notwendig ist. Sprachfanatismus wird reduziert, indem von Anfang an mehrere Programmiersprachen parallel erlernt und gegenseitig übersetzt werden. Zwischen `JavaScript` und `Python` ist dies sehr einfach, bei `C` etwas schwieriger – aber auf diese drei Sprachen darf im Kurs keinesfalls verzichtet werden.

> Vermeidet von Anfang an jeglichen Fanatismus: sprachlich, framework-basiert oder paradigmenbezogen.

Framework-Fanatismus wird reduziert, indem Anfängern die Nutzung von Bibliotheken und Frameworks untersagt und der Fokus auf möglichst nativen, abhängigkeitfreien Code gelegt wird. Paradigmenfanatismus wird reduziert, indem versucht wird, prozedurale, funktionale, objektorientierte, reaktive und zustandsbasierte Programmierung zu kombinieren. Wir werden zeigen, wie diese Kombinationen helfen, Muster und Prinzipien aus GoF und SOLID zu vereinfachen.

Ein weiterer wichtiger Bestandteil des Kurses ist das Studium von Anti-Patterns und Refactoring. Zunächst geben wir einen Überblick, anschließend wird mit echten Codebeispielen aus realen Projekten geübt.
