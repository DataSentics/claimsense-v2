# ClaimSense — Features Page: Opravný prompt (v4)
> Vložte tento prompt do Cursor jako instrukci pro úpravu souboru `ClaimSense Features_dc.html`.

Proveď níže popsané změny přesně a v tomto pořadí. Neměň nic, co není explicitně uvedeno.

---

## PŘEHLED NOVÉ STRUKTURY STRÁNKY

Stránka má nyní **5 feature sekcí** v tomto pořadí:

| # | ID | Název sekce | Pozadí | Layout |
|---|---|---|---|---|
| 01 | `#ai-preprocessing` | Automated Case Pre-processing by AI Agents | `#ffffff` bílá | text vlevo, obraz vpravo |
| 02 | `#analytics-chat` | Chat Across All Cases & Interactive Claim Analytics | `#FFE4DF` teplá | obraz vlevo, text vpravo ← REVERSE |
| 03 | `#master-claims` | Master Claims, Specialist Workstreams & Agentic Workflows | `#002870` tmavá | text vlevo, obraz vpravo |
| 04 | `#claim-core` | Full Claim Core System | `#ffffff` bílá | obraz vlevo, text vpravo ← REVERSE |
| 05 | `#feature-05` | [název bude doplněn] | `#FFE4DF` teplá | text vlevo, obraz vpravo |

Logika barev: bílá → teplá → tmavá → bílá → teplá.
Na tmavé sekci 03 musí být veškerý text bílý nebo světlý.

---

## ZMĚNA 1 — Odstranění nadbytečných CTA tlačítek

Features page = edukace, ne konverze. Jediný CTA je na konci stránky.

**Odstraň (vyhledej podle textu):**
- `See it in action`
- `See how complex claims stay coordinated`
- Všechna opakování `Book a Demo` mimo finální CTA blok

**Ponech pouze:**
- Jediný `Book a Demo` button + text link `Explore the architecture →` v závěrečném CTA bloku

---

## ZMĚNA 2 — Odstranění Bull logo watermarku z pozadí

Najdi všechny výskyty Bull loga / tree monogramu jako `background-image`, opacity vrstvu nebo `::before`/`::after` pseudo-element v sekcích stránky. Odstraň celé — bez náhrady.

---

## ZMĚNA 3 — Přeuspořádání a obsah feature sekcí

### Sekce 01 — beze změny
```
id="ai-preprocessing"
Číslo: 01
Název: Automated Case Pre-processing by AI Agents
Obsah: beze změny
```

---

### Sekce 02 — NOVÁ na této pozici

```
id="analytics-chat"
Číslo: 02
Název: Chat Across All Cases & Interactive Claim Analytics
```

Perex:
> Ask questions across your entire claim portfolio in natural language. Instantly search documents, emails, call recordings, and notes — then drill into analytics dashboards that reveal patterns, bottlenecks, and satisfaction drivers. Management gets real-time interactive insights to steer operations.

Bullets:
- Natural language search across all case data
- Interactive dashboards with drill-down analytics
- Trend analysis by handler, segment, product & time
- AI monitoring — detect accuracy drift & trigger reviews

**Vizuál: interaktivní galerie s lightboxem — 5 screenshotů.**

Cesty a popisky:

| Soubor | Popisek (caption) |
|---|---|
| `assets/feature-02-a-workflow-definitions` | Workflow definitions with version history |
| `assets/feature-02-b-workflow-configuration` | Workflow configuration context and naming |
| `assets/feature-02-c-workflow-states-configuration` | Workflow states configuration |
| `assets/feature-02-d-workflow-resolution-templates` | Workflow resolution templates |
| `assets/feature-02-e-workflow-state-transition-rules` | Workflow state transition rules |

HTML galerie — vlož do `.feature-section__visual` sekce 02:

```html
<div class="feature-gallery" data-section="analytics-chat">
  <div class="feature-gallery__grid">

    <button class="feature-gallery__thumb" data-index="0"
            aria-label="Open: Workflow definitions with version history">
      <img src="assets/feature-02-a-workflow-definitions"
           alt="Workflow definitions with version history">
      <span class="feature-gallery__thumb-caption">Workflow definitions with version history</span>
    </button>

    <button class="feature-gallery__thumb" data-index="1"
            aria-label="Open: Workflow configuration context and naming">
      <img src="assets/feature-02-b-workflow-configuration"
           alt="Workflow configuration context and naming">
      <span class="feature-gallery__thumb-caption">Workflow configuration context and naming</span>
    </button>

    <button class="feature-gallery__thumb" data-index="2"
            aria-label="Open: Workflow states configuration">
      <img src="assets/feature-02-c-workflow-states-configuration"
           alt="Workflow states configuration">
      <span class="feature-gallery__thumb-caption">Workflow states configuration</span>
    </button>

    <button class="feature-gallery__thumb" data-index="3"
            aria-label="Open: Workflow resolution templates">
      <img src="assets/feature-02-d-workflow-resolution-templates"
           alt="Workflow resolution templates">
      <span class="feature-gallery__thumb-caption">Workflow resolution templates</span>
    </button>

    <button class="feature-gallery__thumb" data-index="4"
            aria-label="Open: Workflow state transition rules">
      <img src="assets/feature-02-e-workflow-state-transition-rules"
           alt="Workflow state transition rules">
      <span class="feature-gallery__thumb-caption">Workflow state transition rules</span>
    </button>

  </div>
</div>
```

---

### Sekce 03 — PŘESUNUTA z pozice 02

```
id="master-claims"
Číslo: 03
Název: Master Claims, Specialist Workstreams & Agentic Workflows
Obsah textu: beze změny, jen aktualizuj číslo 02 → 03
```

**Vizuál: jeden screenshot s možností rozkliku do lightboxu.**

Soubor: `assets/feature-03-master-claim`

Vlož do `.feature-section__visual` sekce 03:

```html
<button class="feature-single-thumb" data-src="assets/feature-03-master-claim"
        data-caption="Master Claim overview"
        aria-label="Open fullscreen: Master Claim overview">
  <img src="assets/feature-03-master-claim" alt="Master Claim overview">
  <span class="feature-single-thumb__hint">Click to enlarge</span>
</button>
```

CSS pro single thumb:

```css
.feature-single-thumb {
  position: relative;
  display: block;
  border: none;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  cursor: zoom-in;
  width: 100%;
  background: transparent;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.feature-single-thumb img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

.feature-single-thumb:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.22);
}

.feature-single-thumb__hint {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0,40,112,0.75);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.18s ease;
}

.feature-single-thumb:hover .feature-single-thumb__hint {
  opacity: 1;
}
```

JS pro single thumb — přidej do lightbox JS bloku (viz Změna 9):

```javascript
// Single thumb — sekce 03
document.querySelectorAll('.feature-single-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    openSingle(thumb.dataset.src, thumb.dataset.caption);
  });
});

function openSingle(src, caption) {
  lbImg.src = src;
  lbImg.alt = caption;
  lbCaption.textContent = caption;
  lbCounter.textContent = '';
  lbDots.innerHTML = '';
  btnPrev.style.display = 'none';
  btnNext.style.display = 'none';
  lb.setAttribute('aria-hidden', 'false');
  backdrop.setAttribute('data-open', '');
  document.body.style.overflow = 'hidden';
}
```

⚠️ Tato sekce má pozadí `#002870` — text musí být bílý:

```css
.feature-section--dark .feature-section__number { color: #FF5539; }
.feature-section--dark .feature-section__title  { color: #ffffff; }
.feature-section--dark .feature-section__intro  { color: rgba(255,255,255,0.85); }
.feature-section--dark .feature-section__bullets li { color: rgba(255,255,255,0.75); }
```

---

### Sekce 04 — beze změny obsahu
```
id="claim-core"
Číslo: 04
Název: Full Claim Core System
Obsah: beze změny
```

---

### Sekce 05 — placeholder
```
id="feature-05"
Číslo: 05
Název: [bude doplněn]
```
Vytvoř prázdnou sekci se stejnou HTML strukturou jako ostatní. Obsah a vizuál budou doplněny v dalším kroku.

---

## ZMĚNA 4 — Navigační pills (5 pills, hover only)

Pills reagují POUZE na CSS `:hover`. Žádný `is-active`. Žádný JavaScript pro stav pills. IntersectionObserver pro pills celý odstraň.

```css
.feature-nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 24px 0;
}

.feature-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1.5px solid #002870;
  background: transparent;
  color: #002870;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.feature-pill__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background-color: #002870;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
}

.feature-pill:hover {
  border-color: #FF5539;
  color: #FF5539;
}

.feature-pill:hover .feature-pill__number {
  background-color: #FF5539;
}
```

```html
<nav class="feature-nav">
  <a href="#ai-preprocessing" class="feature-pill">
    <span class="feature-pill__number">01</span>
    AI Pre-processing
  </a>
  <a href="#analytics-chat" class="feature-pill">
    <span class="feature-pill__number">02</span>
    Analytics & Chat
  </a>
  <a href="#master-claims" class="feature-pill">
    <span class="feature-pill__number">03</span>
    Master Claims
  </a>
  <a href="#claim-core" class="feature-pill">
    <span class="feature-pill__number">04</span>
    Claim Core System
  </a>
  <a href="#feature-05" class="feature-pill">
    <span class="feature-pill__number">05</span>
    [název bude doplněn]
  </a>
</nav>
```

---

## ZMĚNA 5 — Čísla sekcí: float pattern

Číslo floatuje vlevo, nadpis a perex ho obtékají zprava.

```css
.feature-section__header {
  overflow: hidden;
  margin-bottom: 32px;
}

.feature-section__number {
  float: left;
  font-family: 'Tosh A', sans-serif;
  font-weight: 900;
  font-size: clamp(80px, 12vw, 140px);
  line-height: 0.85;
  color: #FF5539;
  margin-right: 20px;
  margin-bottom: 8px;
}

.feature-section__title {
  font-family: 'Tosh A', sans-serif;
  font-weight: 500;
  font-size: clamp(24px, 3vw, 36px);
  color: #002870;
  margin: 0 0 16px 0;
  overflow: hidden;
}

.feature-section__intro {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  overflow: hidden;
  margin: 0;
}
```

HTML pattern (aplikuj na všechny sekce):

```html
<section class="feature-section" id="[id]">
  <div class="feature-section__header">
    <span class="feature-section__number">01</span>
    <h2 class="feature-section__title">Název sekce</h2>
    <p class="feature-section__intro">Perex...</p>
  </div>
  <div class="feature-section__content">
    <div class="feature-section__text"><!-- bullets --></div>
    <div class="feature-section__visual"><!-- screenshot / galerie --></div>
  </div>
</section>
```

---

## ZMĚNA 6 — Zig-zag layout + barevné pozadí sekcí

```css
.feature-section {
  padding: 80px 40px;
}

.feature-section__content {
  display: flex;
  align-items: flex-start;
  gap: 48px;
}

.feature-section--reverse .feature-section__content {
  flex-direction: row-reverse;
}

.feature-section__text,
.feature-section__visual { flex: 1; }

.feature-section--white { background-color: #ffffff; }
.feature-section--warm  { background-color: #FFE4DF; }
.feature-section--dark  { background-color: #002870; }

@media (max-width: 768px) {
  .feature-section__content,
  .feature-section--reverse .feature-section__content {
    flex-direction: column;
  }
}
```

Aplikuj třídy:

```html
<section class="feature-section feature-section--white" id="ai-preprocessing">
<section class="feature-section feature-section--warm feature-section--reverse" id="analytics-chat">
<section class="feature-section feature-section--dark" id="master-claims">
<section class="feature-section feature-section--white feature-section--reverse" id="claim-core">
<section class="feature-section feature-section--warm" id="feature-05">
```

---

## ZMĚNA 7 — Lightbox (sdílený pro galerii i single thumb)

Vlož těsně před `</body>`:

```html
<div class="cs-lightbox" id="cs-lightbox" role="dialog" aria-modal="true" aria-hidden="true">
  <button class="cs-lightbox__close" aria-label="Close">✕</button>
  <button class="cs-lightbox__prev" aria-label="Previous">‹</button>
  <button class="cs-lightbox__next" aria-label="Next">›</button>
  <div class="cs-lightbox__inner">
    <img class="cs-lightbox__img" src="" alt="">
    <p class="cs-lightbox__caption"></p>
  </div>
  <div class="cs-lightbox__footer">
    <span class="cs-lightbox__counter"></span>
    <div class="cs-lightbox__dots" role="list"></div>
  </div>
</div>
<div class="cs-lightbox__backdrop" id="cs-lightbox-backdrop"></div>
```

CSS:

```css
.cs-lightbox__backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.82);
  z-index: 1000;
}

.cs-lightbox__backdrop[data-open] { display: block; }

.cs-lightbox {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 1001;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px 24px;
}

.cs-lightbox[aria-hidden="false"] { display: flex; }

.cs-lightbox__inner {
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.cs-lightbox__img {
  max-height: 62vh;
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.5);
}

.cs-lightbox__caption {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgba(255,255,255,0.75);
  margin-top: 16px;
}

.cs-lightbox__prev,
.cs-lightbox__next {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.12);
  border: 1.5px solid rgba(255,255,255,0.25);
  color: #ffffff;
  font-size: 28px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;
}

.cs-lightbox__prev { left: 20px; }
.cs-lightbox__next { right: 20px; }

.cs-lightbox__prev:hover,
.cs-lightbox__next:hover {
  background: rgba(255,85,57,0.6);
  border-color: #FF5539;
}

.cs-lightbox__close {
  position: fixed;
  top: 20px;
  right: 24px;
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.7);
  font-size: 22px;
  cursor: pointer;
  transition: color 0.15s ease;
}

.cs-lightbox__close:hover { color: #FF5539; }

.cs-lightbox__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.cs-lightbox__counter {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.05em;
}

.cs-lightbox__dots {
  display: flex;
  gap: 8px;
}

.cs-lightbox__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease, transform 0.15s ease;
}

.cs-lightbox__dot.is-current {
  background: #FF5539;
  transform: scale(1.3);
}

/* Thumbnail grid — sekce 02 */
.feature-gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.feature-gallery__thumb {
  position: relative;
  border: none;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.feature-gallery__thumb img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

.feature-gallery__thumb:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}

.feature-gallery__thumb:hover img { filter: brightness(0.85); }

.feature-gallery__thumb-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 6px 10px;
  background: rgba(0,40,112,0.82);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  line-height: 1.3;
  opacity: 0;
  transition: opacity 0.18s ease;
  border-radius: 0 0 10px 10px;
}

.feature-gallery__thumb:hover .feature-gallery__thumb-caption { opacity: 1; }

/* Single thumb — sekce 03 */
.feature-single-thumb {
  position: relative;
  display: block;
  border: none;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  cursor: zoom-in;
  width: 100%;
  background: transparent;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.feature-single-thumb img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

.feature-single-thumb:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.22);
}

.feature-single-thumb__hint {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0,40,112,0.75);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.18s ease;
}

.feature-single-thumb:hover .feature-single-thumb__hint { opacity: 1; }
```

JavaScript — vlož těsně za lightbox HTML, před `</body>`:

```javascript
(function () {
  const GALLERY_IMAGES = [
    { src: 'assets/feature-02-a-workflow-definitions',            alt: 'Workflow definitions with version history' },
    { src: 'assets/feature-02-b-workflow-configuration',          alt: 'Workflow configuration context and naming' },
    { src: 'assets/feature-02-c-workflow-states-configuration',   alt: 'Workflow states configuration' },
    { src: 'assets/feature-02-d-workflow-resolution-templates',   alt: 'Workflow resolution templates' },
    { src: 'assets/feature-02-e-workflow-state-transition-rules', alt: 'Workflow state transition rules' },
  ];

  const lb        = document.getElementById('cs-lightbox');
  const backdrop  = document.getElementById('cs-lightbox-backdrop');
  const lbImg     = lb.querySelector('.cs-lightbox__img');
  const lbCaption = lb.querySelector('.cs-lightbox__caption');
  const lbCounter = lb.querySelector('.cs-lightbox__counter');
  const lbDots    = lb.querySelector('.cs-lightbox__dots');
  const btnClose  = lb.querySelector('.cs-lightbox__close');
  const btnPrev   = lb.querySelector('.cs-lightbox__prev');
  const btnNext   = lb.querySelector('.cs-lightbox__next');

  let current = 0;
  let mode = 'gallery'; // 'gallery' | 'single'

  // Vytvoř dots pro galerii
  GALLERY_IMAGES.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'cs-lightbox__dot';
    dot.setAttribute('role', 'listitem');
    dot.setAttribute('aria-label', `Image ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    lbDots.appendChild(dot);
  });

  function goTo(index) {
    current = (index + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    const item = GALLERY_IMAGES[current];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.alt;
    lbCounter.textContent = `${current + 1} / ${GALLERY_IMAGES.length}`;
    lbDots.querySelectorAll('.cs-lightbox__dot').forEach((d, i) => {
      d.classList.toggle('is-current', i === current);
    });
  }

  function openGallery(index) {
    mode = 'gallery';
    btnPrev.style.display = '';
    btnNext.style.display = '';
    lbDots.style.display = '';
    goTo(index);
    openLightbox();
  }

  function openSingle(src, caption) {
    mode = 'single';
    lbImg.src = src;
    lbImg.alt = caption;
    lbCaption.textContent = caption;
    lbCounter.textContent = '';
    lbDots.style.display = 'none';
    btnPrev.style.display = 'none';
    btnNext.style.display = 'none';
    openLightbox();
  }

  function openLightbox() {
    lb.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('data-open', '');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function close() {
    lb.setAttribute('aria-hidden', 'true');
    backdrop.removeAttribute('data-open');
    document.body.style.overflow = '';
    // Reset šipek pro případ návratu ke galerii
    btnPrev.style.display = '';
    btnNext.style.display = '';
    lbDots.style.display = '';
  }

  // Thumbnaily galerie (sekce 02)
  document.querySelectorAll('.feature-gallery__thumb').forEach(thumb => {
    thumb.addEventListener('click', () => openGallery(Number(thumb.dataset.index)));
  });

  // Single thumb (sekce 03)
  document.querySelectorAll('.feature-single-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => openSingle(thumb.dataset.src, thumb.dataset.caption));
  });

  btnClose.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  btnPrev.addEventListener('click', () => { if (mode === 'gallery') goTo(current - 1); });
  btnNext.addEventListener('click', () => { if (mode === 'gallery') goTo(current + 1); });

  document.addEventListener('keydown', e => {
    if (lb.getAttribute('aria-hidden') === 'true') return;
    if (e.key === 'Escape')                          close();
    if (e.key === 'ArrowLeft'  && mode === 'gallery') goTo(current - 1);
    if (e.key === 'ArrowRight' && mode === 'gallery') goTo(current + 1);
  });
})();
```

---

## ZMĚNA 8 — "Continue exploring Product" blok

Nahraď stávající Explore more sekci. Architecture = tmavá plná šířka, Use Cases + Implementation = bílé 50/50 pod ní.

```css
.explore-more { background: #FFE4DF; padding: 0; }

.explore-more__heading {
  font-family: 'Tosh A', sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: #002870;
  padding: 48px 40px 24px;
  margin: 0;
}

.explore-card--architecture {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  background-color: #002870;
  border-radius: 16px;
  padding: 36px 40px;
  margin: 0 40px 16px;
  text-decoration: none;
}

.explore-card--architecture .explore-card__label {
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7788F9;
  margin-bottom: 8px;
  display: block;
}

.explore-card--architecture .explore-card__title {
  font-family: 'Tosh A', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 8px;
}

.explore-card--architecture .explore-card__desc {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: rgba(255,255,255,0.75);
  line-height: 1.5;
  max-width: 560px;
}

.explore-card--architecture .explore-card__cta {
  flex-shrink: 0;
  background-color: #FF5539;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.explore-card--architecture .explore-card__cta:hover { background-color: #FF7761; }

.explore-more__secondary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 40px 48px;
}

.explore-card--secondary {
  background: #ffffff;
  border-radius: 12px;
  padding: 28px 24px;
  border-left: 4px solid transparent;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.explore-card--secondary:hover {
  border-left-color: #FF5539;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.explore-card--secondary .explore-card__title {
  font-family: 'Tosh A', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #002870;
  margin-bottom: 8px;
}

.explore-card--secondary .explore-card__desc {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
  margin-bottom: 16px;
}

.explore-card--secondary .explore-card__link {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FF5539;
}

@media (max-width: 768px) {
  .explore-card--architecture {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 16px 12px;
  }
  .explore-more__secondary {
    grid-template-columns: 1fr;
    padding: 0 16px 32px;
  }
}
```

```html
<section class="explore-more">
  <p class="explore-more__heading">Continue exploring Product</p>

  <a href="/architecture" class="explore-card--architecture">
    <div>
      <span class="explore-card__label">Architecture</span>
      <p class="explore-card__title">European Data Sovereignty</p>
      <p class="explore-card__desc">
        ClaimSense is deployed into your selected cloud or on-prem environment
        and designed for enterprise governance, traceability and AI transparency.
        Built by DataSentics, part of the Bull group.
      </p>
    </div>
    <span class="explore-card__cta">Explore the architecture →</span>
  </a>

  <div class="explore-more__secondary">
    <a href="/use-cases" class="explore-card--secondary">
      <p class="explore-card__title">Use Cases</p>
      <p class="explore-card__desc">Real-world scenarios across insurance lines — motor, property, liability and beyond.</p>
      <span class="explore-card__link">See use cases →</span>
    </a>
    <a href="/implementation" class="explore-card--secondary">
      <p class="explore-card__title">Implementation</p>
      <p class="explore-card__desc">From kickoff to go-live. Understand what deployment looks like in your environment.</p>
      <span class="explore-card__link">See implementation →</span>
    </a>
  </div>
</section>
```

---

## ZMĚNA 9 — Stripped footer

```html
<footer class="footer-stripped">
  <img src="assets/logos/Bull/Bull Logo/SVG/BULL_LOGO_COLOR_RGB.svg" alt="Bull" height="28">
  <p>© 2025 DataSentics, a Bull company · <a href="/privacy">Privacy Policy</a></p>
</footer>
```

```css
.footer-stripped {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;
  border-top: 1px solid #E5E5E5;
  background: #ffffff;
}
.footer-stripped p {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #666666;
  margin: 0;
}
.footer-stripped a { color: #666666; text-decoration: underline; }
```

---

## VÝSLEDNÁ STRUKTURA STRÁNKY

```
[Hero — headline + 5 navigačních pills (hover only, žádný is-active)]

[01 — AI Pre-processing    | bílá  | text vlevo,  obraz vpravo]
[02 — Analytics & Chat     | teplá | obraz vlevo, text vpravo ← REVERSE | galerie 5 fotek + lightbox carousel]
[03 — Master Claims        | tmavá | text vlevo,  obraz vpravo | 1 fotka + lightbox single]
[04 — Claim Core System    | bílá  | obraz vlevo, text vpravo ← REVERSE]
[05 — [TBD]                | teplá | text vlevo,  obraz vpravo]

[Finální CTA blok — Book a Demo + Explore the architecture text link]

[Continue exploring Product]
  [Architecture — tmavě modrá, plná šířka]
  [Use Cases | Implementation — bílé, 50/50]

[Stripped footer]
```
