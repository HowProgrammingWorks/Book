## 1.4. Algoritmus, program, syntaxe, jazyk

Existuje mnoho termínů souvisejících s programováním. Pro jistotu bychom měli zjistit rozdíl mezi nimi. Je lepší zaměřit se na neformální porozumění než na formální definici. Nejstarším pojmem je zde algoritmus, který si všichni pamatujeme ze školního kurzu matematiky. Například Euklidův algoritmus pro nalezení největšího společného dělitele dvou celých čísel.

> Algoritmus

Algoritmus ještě není program, je to nápad na řešení problému, popsaný formálně. Tak, aby to bylo pro ostatní srozumitelné, ověřitelné a realizovatelné. Algoritmus nelze spustit, lze jej převést do kódu v některém programovacím jazyce. Algoritmus obsahuje popis operací a může být zapsán různými způsoby: vzorcem, vývojovým diagramem, seznamem akcí v lidské řeči. Vždy se omezuje na určitou třídu problémů, které řeší v konečném čase. Zúžením třídy problémů často můžeme zjednodušit a optimalizovat algoritmus. Například přechodem ze sčítání součtu celých a zlomkových čísel ke sčítání součtu pouze celých čísel můžeme provést efektivnější implementaci. Lze také rozšířit i třídu problémů pro tento příklad, což umožní rovněž zadávaní do vstupu řetězcové reprezentace čísel. Díky tomu bude algoritmus všestrannější, ale méně účinný. Musíme si vybrat, co přesně optimalizujeme. V tomto případě je lepší rozdělit algoritmus na dva, jeden převede všechna čísla na požadovaný datový typ a druhý bude sčítat.

> Příklad implementace algoritmu NSD

Euklidův algoritmus pro nalezení NSD (největšího společného dělitele) v `JavaScript` lse zapsat následovně:

```js
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
```

Nebo ještě kratší formou, ale nebude to o nic méně jasné, pokud porovnáte tyto dvě možnosti a zkontrolujete, které konstrukce jsou nahrazeny:

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```

Tento jednoduchý algoritmus je rekurzivní, tzn. zavolá sám sebe, aby vypočítal další krok, a skončí, když `b` dosáhne `0`. U algoritmů můžeme určit výpočetní náročnost, klasifikovat je podle zdrojů procesorového času a paměti potřebných k řešení problému.

> Program

V předchozím příkladu jsme se zabývali funkcí, ta je součástí programu, ale aby fungovala, je třeba funkci zavolat a předat jí data. Programový kód a data, spojené do jednoho celku, tvoří program. Niklaus Wirth, autor mnoha jazyků včetně Pascalu, má knihu s názvem "Algoritmy + Datové struktury = Programy". Její název obsahuje velmi důležitou pravdu, hluboce vtisknutou nejen do světonázoru čtenářů, ale i do názvů kurzů předních univerzit a dokonce i do pohovorů, kde se od uchazeče vyžaduje, aby se na tyto dvě věci soustředil. V prvních 50 letech softwarového průmyslu se ukázalo, že datové struktury jsou stejně důležité jako algoritmy. Mnoho profesionálních programátorů věnuje strukturám více času. Linus Torvalds k tomu má trefnou poznámku: "Špatní programátoři si dělají starosti s kódem. Dobří programátoři se starají o datové struktury a vztahy mezi nimi." Faktem je, že výběr datových struktur do značné míry určuje, jaký bude algoritmus, omezuje jej v rámci výpočetní náročnosti a sémantiky úlohy, kterou programátor rozumí prostřednictvím dat rozložených v paměti mnohem lépe než pomocí sledu operací.

Eric Raymond to vyjádřil takto: "Inteligentní datové struktury a hloupý kód fungují mnohem lépe než naopak."

> Kód umožňuje najít společný jazyk

Ten samý Linus Torvalds nám však také řekl: "Klábosení nestojí za nic. Ukaž mi kód." To není v rozporu s tím, co bylo řečeno výše. Myslím, že zde měl na mysli to, že programový kód nepřipouští dvojznačnost. Programový kód je univerzální metoda, která pomáhá programátorům najít společnou řeč právě tehdy, když tomu přirozené jazyky svou nejednoznačností zabraňují, pak se stačí na kód podívat.

> Inženýrství

Využití dostupných zdrojů prostřednictvím vědy, technologie, různých metodik, organizační struktury, technik a znalostí je další úroveň neboli inženýrství.

Pamatuji si, jak pro mě v prvních letech učení programování bylo důležité, aby můj kód používali lidé, zlepšoval jejich život a žil dlouho. Olympiáda se mi zdála nezajímavá, studijní úkoly byly příliš vymyšlené, chtěl jsem se soustředit na to, co budou lidé každý den provozovat na svých počítačích: databázové aplikace, formuláře a tabulky, síťové a komunikační aplikace, programy pro ovládání zařízení, práce se senzory a mnoho nástrojů pro samotné programátory.

Stejně jako v jiných inženýrských oborech je i v programování velmi důležitý přínos pro člověka a ne správnost nebo harmonie konceptu. Inženýrství je povoláno k využívání vědeckých úspěchů, a tam, kde dnes dostupné vědecké poznatky jsou nedostačující, inženýrství uplatňuje intuici, inženýrskou kulturu, pokusy a omyly, využívání nevědomých zkušeností a zkušeností, které nemají dostatečné vědecké porozumění.

To je výhoda i nevýhoda inženýrství. Máme mnoho různých a kontroverzních řešení stejného problému, ne vždy víme, proč něco nefunguje, ale to je v pořádku, občas se divíme, proč něco funguje. Tento přístup vede k hromadění špatných postupů v projektech a takovému prolínání dobrých a špatných praktik, že je velmi obtížné je oddělit a často naše úsilí vynakládáno opakovaně na již vyřešené úkoly. Niklaus Wirth řekl: "Programy se stávají pomalejšími rychlejí, než hardware se stává rychlejším" a často považujeme, že je snazší program přepsat, než v něm opravovat chyby.

> Softwarové inženýrství

Aplikace inženýrství v softwarovém průmyslu zahrnuje architekturu, výzkum, vývoj, testování, nasazení a údržbu softwaru.

Softwarový průmysl se vyvinul do silného průmyslu, přerostlého podpůrnými technologickými postupy, které snižují dopad jeho již výše uvedených nedostatků a činí konečný produkt dostatečně spolehlivým, aby přinášel zisk, ale ne dostatečně kvalitní, aby mohly být vydávány další a další verze.

"Většina softwaru je dnes jako egyptské pyramidy z milionu cihel na sobě a bez strukturální integrity – jsou postaveny jen hrubou silou a tisíci otroků" // Alan Kay

> Programování

Programování je tedy umění a inženýrství řešení problémů pomocí počítačů. Zde je důležité poznamenat, že výpočetní technika výrazně ovlivňuje to, jak programujeme, určuje, která paradigmata a přístupy budou fungovat efektivněji, a poskytne výsledek, který máme k dispozici, a to jak z hlediska zdrojů vynaložených na programování, tak z hlediska výpočetních zdrojů potřebných ke spuštění vytvořených programů.

> Kódování

Pokud od programování oddělíme pouze psaní zdrojového kódu programu pomocí určité syntaxe (jazyka), stylu a paradigmatu podle hotového technického úkolu (TÚ), pak toto nazýváme kódování, i když slovo lze považovat za zastaralé.

Vývoj lze rozdělit na návrh a kódování, což z dlouhodobého hlediska poskytuje efektivnější uplatnění sil, ale často musíte začít programovat bez TÚ a bez předběžného návrhu. Takto vyvinuté systémy se nazývají prototypy, MVP (minimum viable product), pilotní systémy nebo stojany. Jejich přínos spočívá v testování hypotéz o užitečnosti pro spotřebitele či ekonomické efektivitě jejich použití.

Programátor si ne vždy uvědomuje, co dělá, prototyp nebo produkt, a nakonec dostaneme prototyp, který je skoro stejně dobrý jako hotový produkt, nebo hotový produkt vyrobený jako dočasné řešení. Jsou však nadšenci, kteří svou práci milují, a právě na nich se toto odvětví drží, kontroverzní a plné problémů.

"Většina dobrých programátorů nedělá svou práci proto, že očekávají, že dostanou zaplaceno nebo uznání, ale protože je baví programování." // Linus Torvalds

> Vývojář vs programátor

Každé z jmen profesí má své příznivce, často sebejmenování vývojář nebo programátor je spojeno se zvláštní profesní hrdostí až arogantním přístupem k příznivcům jiného jména profese. Bylo by dobré tyto profese oddělit zhruba stejně, jako se rozdělovaly profese řidiče a automechanika. Automechanik samozřejmě může říct, že řidiči nerozumí autům, ale právě řidiči masově vozí lidi. Podobně v IT se programátor musí soustředit na abstrakce a tvorbu softwarových komponent, zatímco vývojář by se měl zaměřit na použití hotových komponent k řešení úkolu, který vyžaduje jiné znalosti a dovednosti než programování.

Rozdíl mezi programátorem a vývojářem lze ukázat na příkladu tvorby informačních systémů (IS). Ve světě je potřeba, aby masová výroba IS uspokojila potřeby průmyslu, dopravy, služeb, logistiky, obchodu, medicíny atd. Informační systémy (IS) jsou však nyní drahým potěšením a pro jejich vývoj je zapotřebí vysoce kvalifikovaný personál. IS jako třída systémů zahrnuje databáze, uživatelská rozhraní a obchodní logiku. Téměř vždy je potřeba IS integrovat s ostatními IS. Vývoj IS tedy vyžaduje znalost SŘBD (SQL nebo noSQL), front-endu (formuláře, UX/UI), back-endu (aplikační server) a API. Proto mají IS vysoké náklady na vlastnictví a provoz je spojen s vysokými riziky. Vždyť IS jsou vytvářeny univerzálními softwarovými inženýry, kteří píší spoustu systémového kódu pro každý IS z nuly. Pokud oddělíme aplikované programování a systémové do dvou různých specializací a využijeme výhody vysokoúrovňové platformy, kterou vytvořili systémoví programátoři, pak můžeme znovu použít až 80% kódu v různých systémech. Aplikační programátoři (tedy vývojáři) se pak budou moci soustředit pouze na úkoly související se specifikou předmětné oblasti. To výrazně snižuje nároky na vývojáře aplikací a využití principů svobodného softwaru umožňuje spojit úsilí o vytvoření platformy a eliminovat rizika spojená s vlastnictvím platformy. `Open source` licence brání prodejcům svévolně měnit své politiky vůči spotřebitelům a systémovým integrátorům, protože nemají blokující kontrolu nad platformou a mohou být nahrazeni konkurenty.

Tento přístup byl již opakovaně použit a výrazně zvýšil dostupnost účetního a kancelářského softwaru, tvorby webových stránek, dokonce ani počítačové hry se dnes nepíší od nuly, ale využívají platformy, na kterých mohou i začátečníci rychle ukázat působivé výsledky.

Abychom takový přístup pro IS zavedli, potřebujeme nové profese, nový systém školení, nový přístup ke stanovení cílů, dokonce i zákazník takového IS by o nich měl přemýšlet úplně jinak. Stávající poptávka by se měla výrazně změnit, řádově se zvýšít díky tomu, že nyní budou specializované IS dostupné mnohem širšímu spektru spotřebitelů a již nebudou luxusem.

> Složitost a jednoduchost

Snažme se, aby naše programy byly jednoduché jak pro uživatele, tak pro nás samotné, jako lidi, kteří je budou mnohokrát upravovat a neustále narážet na řešení, která jsme do nich vložili při prvotním vývoji. A pokud jsme časově omezeni a nuceni psát neefektivní nebo obskurní kód, pak bychom měli naplánovat jeho zpracování, refaktoring a optimalizaci, než zapomeneme na jeho strukturu a všechny nápady na vylepšení zmizí. Hromadění problémů v kódu se nazývá "technický dluh" a vede nejen k tomu, že se programy stávají méně flexibilními a srozumitelnými, ale také k tomu, že naši mladší kolegové, napojení na projekty, čtou a vstřebávají ne úplně ty nejlepší pracovní postupy a praktiky a asimilují naší přetechnizovanost (over-engineering). Jednoduchost při řešení složitých problémů je cílem dobrého programátora a skrýt složitost za softwarové abstrakce je metodou zkušeného inženýra.

"Vždycky jsem snil o tom, že můj počítač lze používat stejně snadno jako telefon; můj sen se stal skutečností: už nemůžu přijít na to, jak používat svůj telefon." // Björn Stroustrup
