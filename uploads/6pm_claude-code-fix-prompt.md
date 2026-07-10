# Opravný prompt pro Claude Code — Industry Use Cases sekce

```
ROLE: Jsi frontend developer, který už dříve implementoval sekci
"Industry Use Cases" na homepage ClaimSense (štítky Insurance,
Industrial Equipment & Machinery Service, Consumer Electronics &
Appliance Warranty, Logistics & Freight, Health Insurance,
Banking & Fintech, Pharma). Teď opravuješ dva konkrétní problémy
zjištěné po review živé implementace, ne celou sekci znovu.

ZDROJ DAT: Aktualizovaný soubor industry-use-cases-data.md (v příloze)
nahrazuje předchozí verzi. Klíčová změna: každý objekt má nově pole
"variantANote" (string nebo null). Re-importuj data z tohoto
aktualizovaného souboru.

OPRAVA 1 — VELIKOST PÍSMA NESMÍ SE LIŠIT MEZI VARIANTOU A A B:

Problém: u štítků renderovaných jako variantA (Health Insurance,
Banking & Fintech, Pharma) je název karty momentálně větší/tučnější
font než u štítků renderovaných jako variantB (Insurance, Industrial
Equipment & Machinery Service, Consumer Electronics & Appliance
Warranty, Logistics & Freight). To vytváří dojem, že karty patří na
různé stránky, když se mezi štítky přepíná.

Oprava: srovnej velikost a váhu fontu NÁZVU karty na stejnou hodnotu
napříč VŠEMI štítky, bez ohledu na to, jestli se vykresluje variantA
nebo variantB. Jediný rozdíl mezi variantami má být přítomnost/
absence popisné věty pod názvem (variantB ji má, variantA ne) —
ne velikost písma samotného názvu.

OPRAVA 2 — DOPLNIT KRÁTKOU SDÍLENOU VĘTU NAD KARTY U VARIANTA ŠTÍTKŮ:

Problém: štítky s variantA (Health Insurance, Banking & Fintech,
Pharma) momentálně zobrazují jen holé názvy karet bez jakéhokoli
kontextu — působí to nedokončeně/jako placeholder ve srovnání se
štítky s variantB, které mají u každé karty popisnou větu.

Oprava: pro štítky, kde se vykresluje variantA, zobraz pole
"variantANote" jako jednu krátkou větu UMÍSTĚNOU NAD trojicí/dvojicí
karet (ne uvnitř jednotlivé karty, ne jako nadpis celé sekce — je to
kontext specifický pro daný štítek). Vizuálně by měla být odlišená
od hlavního nadpisu sekce (menší, neutrální barva, např. tlumenější
odstín textu), aby působila jako doplňující poznámka, ne jako další
úroveň nadpisu.

Pro štítky s variantB (kde je "variantANote" hodnota null) se nic
nezobrazuje — žádná prázdná věta, žádný prázdný prostor navíc.

CO NEDĚLAT:
- Neměň layout, pořadí štítků, ani obsah karet samotných (názvy,
  popisné věty) — tahle oprava se týká pouze typografie a doplnění
  variantANote, ne obsahu.
- Nepřidávej variantANote text k variantB štítkům.
- Neměň CTA "Explore all use cases →" ani jeho umístění.
- Neměň proof section ani video placeholder sekci.

VÝSTUP: Po opravě shrň: (1) jakou konkrétní hodnotu font-size/font-weight
jsi nastavil jako jednotnou pro názvy karet, (2) kam přesně (CSS
třída/komponenta) jsi umístil renderování variantANote, (3) jak to
vypadá na mobilu (poznámka by neměla zabírat zbytečně moc vertikálního
prostoru na malých obrazovkách).
```

---

**Poznámka k použití:** k tomuto promptu přiložte aktualizovaný `industry-use-cases-data.md` (s novým polem `variantANote`). Pokud Claude Code pracuje přímo v repozitáři, kde je předchozí verze souboru již uložena, nahraďte ji touto novou verzí před spuštěním promptu.
