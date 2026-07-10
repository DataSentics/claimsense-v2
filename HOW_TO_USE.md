# ClaimSense — How to Use This Project

## Přehled
Projekt obsahuje 12 stránek webové prezentace ClaimSense, všechny jako samostatné soubory typu `.dc.html` (Design Components). Každá stránka se otevírá přímo v prohlížeči — žádné buildování, žádné závislosti.

## Struktura projektu

```
ClaimSense-Homepage-Redesign/
├── ClaimSense Homepage.dc.html          (Úvodní stránka)
├── ClaimSense Features.dc.html          (Vlastnosti produktu)
├── ClaimSense Architecture.dc.html      (Technická architektura)
├── ClaimSense Use Cases.dc.html         (Případy použití)
├── ClaimSense Implementation.dc.html    (Implementace)
├── ClaimSense Pricing.dc.html           (Ceník)
├── ClaimSense Business Case.dc.html     (Business case / ROI kalkulátor)
├── ClaimSense FAQ.dc.html               (Časté otázky)
├── ClaimSense Partners.dc.html          (Program partnerů)
├── ClaimSense Careers.dc.html           (Pracovní místa)
├── ClaimSense Our Story.dc.html         (O nás)
├── ClaimSense Help.dc.html              (Nápověda & podpora)
├── ClaimSense (standalone).html         (Standalone verze bez editace)
│
├── industry-use-cases.js                (Data pro Industry Use Cases sekci)
├── support.js                           (Runtime podpora pro Design Components)
│
├── assets/
│   ├── logos/                           (Loga ClaimSense, Bull, DataSentics, Tuito, Pillow)
│   ├── bull/                            (Bull loga a symboly)
│   ├── ds/                              (DataSentics loga)
│   └── screenshots/                     (Product demo snímky)
│
└── designs/                             (Dokumentace per stránka)
```

## Jak otevřít konkrétní stránku

### Příklad: Homepage

1. **Rozbal ZIP** do libovolné složky na svém počítači.
2. **Otevři soubor** `ClaimSense Homepage.dc.html` v jakémkoli prohlížeči (Chrome, Firefox, Safari, Edge).
   - Klikni na něj dvakrát nebo táhni do prohlížeče.
3. Stránka se **ihned načte** — všechny stylů, loga a data jsou vložené přímo do souboru.

### Ostatní stránky — stejný postup:
- Features: `ClaimSense Features.dc.html`
- Pricing: `ClaimSense Pricing.dc.html`
- FAQ: `ClaimSense FAQ.dc.html`
- atd.

## Navigace mezi stránkami

Na každé stránce najdeš **aktivní odkazy** v horním menu a patičce:
- **Horní menu**: Product (dropdown → Features, Architecture, Use Cases, Implementation), Our Story, Pricing, Business Case
- **Patička**: Careers, Partners, FAQ, Help, Our Story

Kliknutí na odkaz **automaticky přejde** na vybranou stránku — stačí mít projekt rozbalený a všechny `.dc.html` soubory v **stejné složce**.

## Úpravy a edity

Soubory jsou HTML — **lze je editovat v libovolném textovém editoru** (VS Code, Notepad++, Sublime Text, atd.):

1. Klikni pravým tlačítkem na soubor (např. `ClaimSense Homepage.dc.html`)
2. Vyber **"Open with" → tvůj editor**
3. Najdi text, který chceš změnit, a uprav ho
4. **Ulož soubor** (Ctrl+S / Cmd+S)
5. **Obnov si stránku v prohlížeči** (F5 nebo Cmd+R) — změny se okamžitě projeví

### Příklad: Změna headline na homepage

1. Otevři `ClaimSense Homepage.dc.html` v editoru
2. Najdi text: `"Put AI into claims without unpredictable"`
3. Uprav jej na: `"Put AI into claims without risk"`
4. Ulož a obnov v prohlížeči ✓

## Důležité poznámky

- **Nepleť si soubory**: `.dc.html` soubory jsou editovatelné zdrojové kódy. `(standalone).html` verze jsou jen pro prohlížení — jsou self-contained, ale těžší na editaci.
- **Vše v jednom souboru**: Na homepagea patří ALL obsah (všechny sekce, styling, data). Není potřeba nic dalšího v dodatečných souborech — jen ať jsou ve stejné složce.
- **Assets**: Složky `assets/` a `industry-use-cases.js` musí být **ve stejné složce** jako `.dc.html` soubory, aby se obrázky a data načetly správně.
- **Mobile preview**: Všechny stránky jsou plně responzivní. Otevři si je v mobilu nebo zmenši okno prohlížeče (F12 → Device Emulation).

## Základní cheat sheet

| Co chceš dělat | Jak na to |
|---|---|
| Otevřít homepage | Dvakrát klikni na `ClaimSense Homepage.dc.html` |
| Jít na jinou stránku | Klikni na odkaz v menu nebo patičce |
| Změnit text | Otevři soubor v editoru (Notepad, VS Code...), upravit, Save, F5 |
| Změnit barvu | V editoru najdi hex kód (např. `#FF5539`) a změň ho |
| Vidět změny | Ulož soubor (Ctrl+S) a obnov stránku v prohlížeči (F5) |

## Když se něco pokazí

- **Stránka se nenačítá**: Ověř, že všechny `.dc.html` soubory jsou ve **stejné složce**. Chybí `industry-use-cases.js`?
- **Obrázky se nezobrazují**: Zkontroluj, že složka `assets/` je **v téže složce** jako HTML soubory.
- **Při editaci se nic nezmění**: Ujisti se, že jsi **uložil soubor** (Ctrl+S) a **obnovil prohlížeč** (F5).

## Technické detaily (pokud zajímá)

- Projekt je postaven na **Design Components** (`.dc.html`) — vlastní formát, který kombinuje HTML, CSS a JavaScript v jednom souboru.
- Soubor `support.js` zapewňuje runtime funkčnost — musí být ve stejné složce.
- Modul `industry-use-cases.js` obsahuje data pro "Industry Use Cases" sekci.
- Všechny externos zdroje (loga, screenshoty) jsou v `assets/`.

---

**Pokud máš otázku nebo něco nefunguje, dej vědět.**
