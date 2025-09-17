## 1.1. Přístup k výuce programování

Většina si myslí, že základní dovedností programátora je psaní kódu. Ve skutečnosti programátoři nejčastěji kód čtou a opravují ho. A hlavními kritérii kvality kódu jsou srozumitelnost, čitelnost a jednoduchost. Jak řekl Harold Abelson: "Programy musí být napsány pro lidi, kteří je budou číst, a stroje, které budou tyto programy spouštět, jsou vedlejší."

> Hlavní dovednosti programátora jsou čtení a úprava kódu

Každé téma obsahuje příklady dobrého a špatného kódu. Tyto příklady jsou převzaty z praxe programování a posuzování projektů. Speciálně připravené příklady špatného kódu budou funkční, ale jsou plné návrhových antivzorců a problémů, které je třeba identifikovat a opravit. Již první praktická práce v kurzu bude souviset s opravou kódu a zvýšením jeho čitelnosti. Jestli zadávat tradiční úkoly (napsat funkce podle signatury, algoritmu, třídy), začátečník to samozřejmě neimplementuje tím nejlepším způsobem, bude bránit svůj kód, protože je to první věc, kterou napsal. A pokud je úkolem "vzít si příklad cizího špatného kódu, najít problémy a opravit", nikoli nepřepisovat od nuly, ale vylepšovat v několika krocích, fixovat tyto kroky a uvědomovat si, pak se zapíná kritický přístup.

> Oprava špatného kódu je jedním z nejúčinnějších způsobů, jak se učit

Začátečník obdrží příklady kontroly kódu a analogicky se snaží opravit i svůj úkol. Takové iterace se mnohokrát opakují bez ztráty kritického postoje. Je velmi dobré mít mentora, který sleduje zlepšení a může korigovat a navrhovat. Mentor by ale v žádném případě neměl dělat práci za začátečníka, ale tlačit ho na to, jak o programování přemýšlet a kde hledat řešení.

> Mentor je nepostradatelný v jakékoli fázi profesního růstu

Dále budou úkoly psaní vlastního kódu. Důrazně doporučujeme začátečníkům, aby tato řešení vzájemně sdíleli za účelem křížové revize. Samozřejmě před tím musíte použít lintry a formátovače kódu, které analyzují syntaxi, najdou chyby a identifikují problémové oblasti pro velké množství šablon kódu. Je velmi důležité zajistit, aby kolega porozuměl vaší myšlence a neztrácel čas syntaxí a formátováním.

> Používejte přátelské code review, křížové kontroly, lintery a formátovače

Přecházíme ke cvičením zredukování zaháknutí mezi několika abstrakce, poté mezi moduly, tedy tak, abyste o datových strukturách jedné části programu věděli co nejméně od jiné jeho části. Snížení jazykového fanatismu je dosaženo paralelním učením několika programovacích jazyků od začátku a překlady z jednoho jazyka do druhého. Překlad z `JavaScript` do `Python` je velmi snadný. Co se týče `C`, je to o něco těžší, ale tyto tři jazyky, ať už jsou jakékoli, nelze z kurzu vynechat.

> Od prvních kroků nepřipouštějte žádný fanatismus: jazykový, rámcový, paradigmatický

Omezení frameworkového fanatismu – pro začátečníky to znamená zakáz používat knihovny a frameworky a místo toho se zaměřit na nativní kód bez závislostí. Redukce paradigmatického fanatismu je pokusem o spojení procedurálního, funkčního, OOP, reaktivního a automatického programování. Pokusíme se ukázat, jak nám tyto kombinace umožňují zjednodušit návrhové vzory a principy z GoF a SOLID.

Další důležitou součástí kurzu je studium antipatternů a refaktoringu. Nejprve si dáme přehled a poté si procvičíme na reálných příkladech kódu z živých projektů.
