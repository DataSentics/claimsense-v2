# ClaimSense — Features Page: Korekční prompt (v5)
> Opravuje konkrétní chyby po implementaci v4. Proveď změny přesně v tomto pořadí.

---

## OPRAVA 1 — Vertikální vzduch mezi perexem a obsahem sekce

Mezi `.feature-section__header` (číslo + nadpis + perex) a `.feature-section__content` (bullets + foto) je nedostatečná mezera. Zdvojnásob ji.

```css
/* BYLO: */
.feature-section__header {
  margin-bottom: 32px;
}

/* MÁ BÝT: */
.feature-section__header {
  margin-bottom: 64px;
}
```

Pokud je mezera řešena jinak (padding, gap), zdvojnásob aktuální hodnotu.

---

## OPRAVA 2 — Bullets vertikálně zarovnané se středem fotky

```css
/* BYLO: */
.feature-section__content {
  align-items: flex-start;
}

/* MÁ BÝT: */
.feature-section__content {
  align-items: center;
}
```

---

## OPRAVA 3 — Sekce 03: zobraz jen první thumbnail, carousel se spustí po kliknutí

V sekci 03 (`#master-claims`) odstraň celý `.feature-gallery__grid` s pěti thumbnaily. Nahraď ho jediným single thumbem. Po kliknutí se otevře carousel lightbox se všemi 5 fotkami — uživatel to pozná z hint textu.

Nahraď HTML vizuálu sekce 03:

```html
<button class="feature-single-thumb"
        data-gallery="master-claims"
        aria-label="View all 5 workflow screens">
  <img src="assets/feature-02-a-workflow-definitions"
       alt="Workflow definitions with version history">
  <span class="feature-single-thumb__hint">Click any tile to view full size · 5 workflow screens</span>
</button>
```

Uprav JavaScript — single thumb nově otevírá gallery carousel (ne single mode), výběr správného image setu řídí atribut `data-gallery`:

```javascript
// Nahraď původní GALLERY_IMAGES konstantu tímto objektem:
const GALLERIES = {
  'master-claims': [
    { src: 'assets/feature-02-a-workflow-definitions',            alt: 'Workflow definitions with version history' },
    { src: 'assets/feature-02-b-workflow-configuration',          alt: 'Workflow configuration context and naming' },
    { src: 'assets/feature-02-c-workflow-states-configuration',   alt: 'Workflow states configuration' },
    { src: 'assets/feature-02-d-workflow-resolution-templates',   alt: 'Workflow resolution templates' },
    { src: 'assets/feature-02-e-workflow-state-transition-rules', alt: 'Workflow state transition rules' },
  ],
  'claim-core': [
    { src: 'assets/feature-05-a-full-linear-history',  alt: 'Full linear history with complete audit trail' },
    { src: 'assets/feature-05-b-document-extraction',  alt: 'Document extraction and field matching records' },
  ],
};

// Proměnná pro aktuální sadu obrázků v lightboxu:
let currentImages = [];
let current = 0;

function goTo(index) {
  current = (index + currentImages.length) % currentImages.length;
  const item = currentImages[current];
  lbImg.src = item.src;
  lbImg.alt = item.alt;
  lbCaption.textContent = item.alt;
  lbCounter.textContent = `${current + 1} / ${currentImages.length}`;
  lbDots.querySelectorAll('.cs-lightbox__dot').forEach((d, i) => {
    d.classList.toggle('is-current', i === current);
  });
}

function buildDots(images) {
  lbDots.innerHTML = '';
  images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'cs-lightbox__dot';
    dot.setAttribute('aria-label', `Image ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    lbDots.appendChild(dot);
  });
}

function openGallery(index, galleryKey) {
  currentImages = GALLERIES[galleryKey] || [];
  buildDots(currentImages);
  btnPrev.style.display = '';
  btnNext.style.display = '';
  lbDots.style.display = '';
  lbCounter.style.display = '';
  goTo(index);
  openLightbox();
}

function openSingle(src, caption) {
  currentImages = [{ src, alt: caption }];
  lbImg.src = src;
  lbImg.alt = caption;
  lbCaption.textContent = caption;
  lbCounter.textContent = '';
  lbDots.innerHTML = '';
  lbDots.style.display = 'none';
  btnPrev.style.display = 'none';
  btnNext.style.display = 'none';
  openLightbox();
}

// Single thumbs — otevřou gallery nebo single podle data-gallery atributu:
document.querySelectorAll('.feature-single-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const galleryKey = thumb.dataset.gallery;
    if (galleryKey && GALLERIES[galleryKey]) {
      openGallery(0, galleryKey);
    } else {
      openSingle(thumb.dataset.src, thumb.dataset.caption);
    }
  });
});

// Šipky a klávesy:
btnPrev.addEventListener('click', () => goTo(current - 1));
btnNext.addEventListener('click', () => goTo(current + 1));
document.addEventListener('keydown', e => {
  if (lb.getAttribute('aria-hidden') === 'true') return;
  if (e.key === 'Escape')      close();
  if (e.key === 'ArrowLeft')   goTo(current - 1);
  if (e.key === 'ArrowRight')  goTo(current + 1);
});
```

---

## OPRAVA 4 — Přesunutí sekcí: 04 = Analytics & Chat, 05 = Claim Core System

V HTML přesuň sekce tak, aby odpovídaly tomuto pořadí:

```
01 — AI Pre-processing
02 — Master Claims
03 — [stávající sekce 03 beze změny]
04 — Chat Across All Cases & Interactive Claim Analytics  ← přesunout sem
05 — Full Claim Core System                              ← přesunout sem
```

### Sekce 04 — Chat Across All Cases & Interactive Claim Analytics

```html
<section class="feature-section feature-section--white feature-section--reverse" id="analytics-chat">
  <div class="feature-section__header">
    <span class="feature-section__number">04</span>
    <h2 class="feature-section__title">Chat Across All Cases &amp; Interactive Claim Analytics</h2>
    <p class="feature-section__intro">Ask questions across your entire claim portfolio in natural
    language. Instantly search documents, emails, call recordings, and notes — then drill into
    analytics dashboards that reveal patterns, bottlenecks, and satisfaction drivers. Management
    gets real-time interactive insights to steer operations.</p>
  </div>
  <div class="feature-section__content">
    <div class="feature-section__text">
      <ul class="feature-section__bullets">
        <li>Natural language search across all case data</li>
        <li>Interactive dashboards with drill-down analytics</li>
        <li>Trend analysis by handler, segment, product &amp; time</li>
        <li>AI monitoring — detect accuracy drift &amp; trigger reviews</li>
      </ul>
    </div>
    <div class="feature-section__visual">
      <button class="feature-single-thumb"
              data-src="assets/feature-04-analytics-data-assistant"
              data-caption="Analytics Data Assistant with natural language queries"
              aria-label="Open fullscreen: Analytics Data Assistant">
        <img src="assets/feature-04-analytics-data-assistant"
             alt="Analytics Data Assistant with natural language queries">
        <span class="feature-single-thumb__hint">Click to enlarge</span>
      </button>
    </div>
  </div>
</section>
```

### Sekce 05 — Full Claim Core System

```html
<section class="feature-section feature-section--warm" id="claim-core">
  <div class="feature-section__header">
    <span class="feature-section__number">05</span>
    <h2 class="feature-section__title">Full Claim Core System</h2>
    <p class="feature-section__intro">The platform acts as a full claim management core, securely
    storing claim data and all processing actions. Complete audit trails, activity logging, and
    role-based access control ensure compliance and transparency. Enterprise-grade security
    standards protect all data and system access.</p>
  </div>
  <div class="feature-section__content">
    <div class="feature-section__text">
      <ul class="feature-section__bullets">
        <li>Enterprise-grade security &amp; encryption</li>
        <li>Complete audit trails &amp; activity logging</li>
        <li>Role-based access control (RBAC)</li>
        <li>Compliance-ready architecture</li>
        <li>Parent-child claim relationships with traceable state history</li>
        <li>Access-controlled sharing of common case information across linked workstreams</li>
      </ul>
    </div>
    <div class="feature-section__visual">
      <button class="feature-single-thumb"
              data-gallery="claim-core"
              aria-label="View audit trail and document extraction screens">
        <img src="assets/feature-05-a-full-linear-history"
             alt="Full linear history with complete audit trail">
        <span class="feature-single-thumb__hint">Click to view · 2 screens</span>
      </button>
    </div>
  </div>
</section>
```

---

## OPRAVA 5 — Navigační pills: hover nefunguje

Pravděpodobná příčina: specificity konflikt nebo `border` je deklarován jako `outline` / `box-shadow`. Přepiš celý `.feature-pill` blok takto — explicitní border properties místo shorthand:

```css
.feature-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 999px;
  border-width: 1.5px;
  border-style: solid;
  border-color: #002870;
  background: transparent;
  color: #002870;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.feature-pill:hover {
  border-color: #FF5539;
  color: #FF5539;
}

.feature-pill:hover .feature-pill__number {
  background-color: #FF5539;
}
```

Ověř také: odstraň jakékoliv `.feature-pill.is-active` pravidlo pokud v CSS stále existuje — přebíjí hover.

Aktualizuj pills na 5 položek ve správném pořadí:

```html
<nav class="feature-nav">
  <a href="#ai-preprocessing" class="feature-pill">
    <span class="feature-pill__number">01</span>AI Pre-processing
  </a>
  <a href="#master-claims" class="feature-pill">
    <span class="feature-pill__number">02</span>Master Claims
  </a>
  <a href="#[id-sekce-03]" class="feature-pill">
    <span class="feature-pill__number">03</span>[název sekce 03]
  </a>
  <a href="#analytics-chat" class="feature-pill">
    <span class="feature-pill__number">04</span>Analytics &amp; Chat
  </a>
  <a href="#claim-core" class="feature-pill">
    <span class="feature-pill__number">05</span>Claim Core System
  </a>
</nav>
```

---

## OPRAVA 6 — Architecture karta: CTA pod textem (Varianta A)

Aktuální `justify-content: space-between` vytváří na desktopu obrovský prázdný prostor mezi textem a tlačítkem. Přepni na `display: block` — CTA jde přirozeně pod text, funguje na všech šířkách bez media query.

```css
/* BYLO: */
.explore-card--architecture {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

/* MÁ BÝT: */
.explore-card--architecture {
  display: block;
}

.explore-card--architecture .explore-card__cta {
  display: inline-block;
  margin-top: 24px;
}
```

HTML beze změny — žádné přesuny elementů nejsou potřeba.

---

## PŘEHLED VÝSLEDNÉHO STAVU PO OPRAVÁCH

```
[Hero — headline + 5 pills (hover only, žádný is-active)]

[01 — AI Pre-processing     | bílá  | text vlevo,  foto vpravo  | single foto]
[02 — Master Claims         | teplá | foto vlevo,  text vpravo← | 1 thumb → carousel 5 fotek]
[03 — [stávající sekce]     | tmavá | text vlevo,  foto vpravo]
[04 — Analytics & Chat      | bílá  | foto vlevo,  text vpravo← | single thumb + lightbox]
[05 — Full Claim Core       | teplá | text vlevo,  foto vpravo  | 1 thumb → carousel 2 fotky]

[Finální CTA blok — Book a Demo + Explore the architecture text link]

[Continue exploring Product]
  [Architecture — block layout, CTA pod textem]
  [Use Cases | Implementation — bílé, 50/50]

[Stripped footer]
```
