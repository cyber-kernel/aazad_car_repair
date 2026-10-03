# MASTER PROMPT: Azad Car Repair Workshop, Jaipur (5 page static website + logo)

Copy everything below the line into your AI coding assistant. Fill the `[FILL]` items in section 2 first if you know them, otherwise leave them and the assistant will use the safe defaults written there.

---

## 0. ROLE

You are a senior front end engineer, local SEO specialist and human copywriter working together. You are building a complete, production ready, fully static website for a real car repair workshop in Jaipur. The output must be a folder I can zip and drag onto Netlify (or any free static host such as Cloudflare Pages or GitHub Pages) and it must work immediately, with a custom domain connected afterwards. No build step, no Node, no backend, no database, no paid service, no API keys.

Before writing any code, read this whole brief, then reply with a short plan (file tree, design tokens, section list per page). Then build everything. If something in the brief is truly impossible or contradictory, ask me one short question. Otherwise do not stop to ask.

---

## 1. BUSINESS FACTS (single source of truth, never invent beyond these)

- Name: Azad Car Repair Workshop
- Hindi name: आजाद कार रिपेयर वर्कशॉप
- Type: car repair workshop with 24 hour emergency breakdown help (Google lists it under a wrong category, treat it as an auto repair shop)
- Address: Shop No 2, Mirza Ismail Rd, near Natha Arts, Pink City, Jaipur, Rajasthan 302001
- Plus code: WR94+43 Jaipur, Rajasthan
- Map coordinates: 26.9177539, 75.8051532
- Google Maps listing: https://www.google.com/maps/place/Azad+Car+Repair+workshop/@26.9177539,75.8051532,17z
- Phone and WhatsApp (same number): 096806 54099. Use `tel:+919680654099` and `https://wa.me/919680654099`
- Email: yk9680654099@gmail.com (use everywhere an email is needed)
- Hours: open 24 hours, every day
- Google rating: 4.9 from 622 reviews
- Domain: not bought yet. Leave it empty in config (`domain: ""`). The site must work perfectly on a free `*.netlify.app` address and switch to the real domain by editing that one value later (see section 4).
- Experience: 10+ years in car repair. Show it as "10+ years" and drive it from one config value (`business.experienceText: "10+ years"`).
- **No people on the site.** Never mention an owner name, staff name, mechanic name, "our team", "meet the team", "our mechanics", "founder" or any team section or team photo anywhere. Write in the first person plural ("we") or about "the workshop". Customer reviewer names stay (they are the reviewers). Do not use any review whose text names a staff member (for example "Yamin bhai" or "Javed ji"); pick the reviews that do not.

### What real customers say (use this as research, paraphrase it into content)
- People call at night, early morning, Sundays, festival days and Diwali, and someone picks up and comes.
- Many mention help arriving in roughly 5 to 20 minutes for battery and no start problems. Use this as supporting proof next to the arrival promise below, worded as "customers often tell us".
- Places named by customers where help arrived: C Scheme, Ajmeri Gate, Tripolia Bazaar, Tonk Road, Khasa Kothi flyover, hotels for travellers, and highway trouble for people travelling between Jaipur and Delhi.
- Jobs named: battery jump start and replacement, car not starting, silencer repair, suspension and power window work on a Honda Accord, spark plug misfire on a Hyundai i20, general repairs done the same day.
- Trust points named: fair price, no hidden charges, genuine parts, customer can buy parts and pay only labour, photo updates and part purchase details shared during the job, polite and humble behaviour, explains the issue before starting.
- Keep all review quotes exactly as written, with first name and "Google review". Never edit a real review to make it better.

### Do NOT
- No fixed prices, no discounts, no "cheapest", no certifications, no awards, no staff count, no brand tie ups unless I give them.
- No fake countdowns or fake "only 2 slots left" messages.

### Promises (these ARE allowed, driven from config so I can edit them)
- Experience: 10+ years.
- Arrival promise for emergency calls inside Jaipur city: "We reach you within 30 minutes of your call, or tell us and we will make it right." Config: `promises.arrivalMinutes: 30`, `promises.arrivalText`, `promises.arrivalFinePrint: "Inside Jaipur city limits, once your location is shared. Heavy traffic or road closures can add time and we will tell you honestly on the call."` Highway calls get the line "Distance decides, we give you an honest time on the phone."
- Workmanship warranty: "30 days warranty on our repair work" with the fine print "Covers the labour we did. Parts carry their own manufacturer warranty where it applies. Misuse and new damage are not covered." Config: `promises.warrantyDays: 30`, `promises.warrantyText`, `promises.warrantyFinePrint`.
- Show these promises on Home (hero chip and trust strip), Services (billing and warranty section), About (promise list), Gallery (reminder strip) and Contact, always with the fine print reachable (small text under the promise or an expandable "terms" line). Each promise has `enabled: true/false` in config so I can switch it off in one place.
- These values are placeholders I will confirm with the workshop. Do not write any claim stronger than the config text.

---

## 2. CONFIG DEFAULTS FOR ANYTHING I DID NOT FILL

- Languages: English only (Indian English spelling: colour, labour, tyre, centre).
- Gallery photos: I will add them later as `gallery_1.jpeg`, `gallery_2.jpeg`, `gallery_3.jpeg` and so on. Build the gallery to pick them up automatically (see section 7.4).
- Services list: use the list in section 8. Mark optional ones with `enabled: true/false` in config.
- Service area: Jaipur city and nearby highways (Delhi road, Ajmer road, Tonk road, Agra road).

---

## 3. NON NEGOTIABLE TECH RULES

1. Plain HTML, CSS and vanilla JavaScript only. Tailwind CSS through the official Play CDN script (`https://cdn.tailwindcss.com`) with the config object placed in one shared file `assets/js/tailwind-config.js` loaded before it. Add a short README note explaining the optional step of compiling Tailwind later for slightly faster loads.
2. No frameworks, no bundlers, no npm, no external JS except Tailwind CDN. Google Fonts allowed, loaded with `preconnect` and `display=swap`.
3. Folder structure with clean URLs that work on every static host, one folder per page:

```
/index.html
/services/index.html
/about/index.html
/gallery/index.html
/contact/index.html
/404.html
/robots.txt
/sitemap.xml
/site.webmanifest
/_headers
/README.md
/assets/css/custom.css
/assets/js/site-config.js        <- THE ONLY FILE I EDIT FOR DETAILS
/assets/js/tailwind-config.js
/assets/js/components.js         <- header, footer, floating buttons, CTA blocks
/assets/js/main.js               <- menu, reveal on scroll, FAQ, lightbox, form
/assets/img/ (logo.svg, favicon.svg, og-cover.svg, placeholders)
/assets/img/gallery/             <- gallery_1.jpeg, gallery_2.jpeg, gallery_3.jpeg ... I add these later
/tools/domain-helper.html        <- one click sitemap.xml and robots.txt generator (noindex)
```

4. All asset links are root relative (`/assets/...`) and all internal links are `/services/`, `/about/` and so on. In the README tell me to preview with a tiny local server (for example `npx serve` or VS Code Live Server) because root paths do not work when double clicking a file.
5. Main page content (headings, paragraphs, FAQs, reviews, service text) must be real static HTML inside each page so search engines read it without running JS. Only the shared parts (header, footer, floating buttons, repeated CTA bands, phone and email values) are injected by `components.js`. Add a `<noscript>` block on every page with the phone number, WhatsApp link, address and a short note so nothing is lost without JS.
6. No localStorage dependence for anything important. No cookies. No tracking scripts by default (leave a commented, clearly labelled spot for Google Analytics in the README only).
7. Must work on Netlify drag and drop, Cloudflare Pages, GitHub Pages and Vercel static. No Netlify only features as a requirement. Netlify Forms may be mentioned as optional only.

---

## 4. ONE FILE EDITING (site-config.js)

Create `assets/js/site-config.js` exposing `window.SITE`. Everything below lives there and nowhere else:

- business: name, hindiName, tagline, shortDescription, rating (4.9), reviewCount (622), hoursText, is24x7, experienceText ("10+ years")
- promises: arrivalMinutes, arrivalText, arrivalFinePrint, warrantyDays, warrantyText, warrantyFinePrint, each with `enabled`
- contact: phoneDisplay "096806 54099", phoneTel "+919680654099", whatsappNumber "919680654099", whatsappDefaultMessage, email "yk9680654099@gmail.com"
- address: line1, area, city, state, pin, mapsUrl, mapsEmbedUrl, lat, lng, plusCode, landmark
- social: googleMapsReviewsUrl, others empty (components hide any link whose value is empty)
- seo: domain (empty for now), siteName, defaultOgImage, locale "en_IN"
- navigation: array of {label, href}
- services: array of {id, title, shortText, icon, group ("emergency" | "workshop"), enabled}
- areas: array of locality names
- reviews: array of {name, text, source, featured}
- faq: grouped by page
- gallery: { folder: "/assets/img/gallery/", prefix: "gallery_", extension: "jpeg", maxImages: 200, overrides: { 3: { alt, caption, category } } } (overrides are optional, see 7.4)
- notification: badge count shown on floating buttons (default 1)

Binding system: any element with `data-site="contact.phoneDisplay"` gets its text filled; `data-site-href="tel"`, `"whatsapp"`, `"mail"`, `"maps"` set the href; `data-site-whatsapp-text="..."` allows a custom prefilled message per button. Write this as a small, well commented function, and handle missing keys silently (never print "undefined" to the page).

I must be able to change the phone number, email, address, hours or rating in this one file and see it update on all five pages, the footer, the floating buttons, the contact form target and the JSON-LD.

README must contain a table: "What you want to change / Which line in site-config.js".

### Domain: ONE place only
I have no domain yet. I will buy one later and must only change `seo.domain` in `site-config.js`, for example `"https://azadcarrepair.in"`.
- If `seo.domain` is empty, use `window.location.origin` automatically, so the site is fully correct on the free netlify.app address and on the real domain with zero edits. Normalise the value (add `https://` if missing, strip a trailing slash).
- Canonical tag, `og:url`, `og:image`, JSON-LD (`url`, `@id`, `image`, `sameAs`), breadcrumb URLs and any absolute link are all built in JS from this one value. Every page also keeps a static `<link rel="canonical">` using only its own root relative path as a fallback. Never write a placeholder domain like `YOUR-DOMAIN.com` anywhere in the pages.
- `sitemap.xml` and `robots.txt` are plain text files and cannot read JS. So build `/tools/domain-helper.html` (marked `noindex`): it reads `SITE.seo.domain` (or the current origin), shows the ready sitemap.xml and robots.txt text, and has buttons to copy or download both. Ship a starter `robots.txt` that allows everything with no Sitemap line, and a starter `sitemap.xml` that is an empty but valid `urlset`. README explains the complete domain switch: change `seo.domain`, open the helper, download the two files, replace the old ones, redeploy.
- Be upfront in the README about one limit: WhatsApp and Facebook link previews do not run JavaScript, so the preview image for shared links is fully reliable only after the real domain is set and the helper step is done. Google itself reads the JS generated values fine.

---

## 5. DESIGN SYSTEM (white theme only, must look human designed)

**Hard rule: no dark theme, no dark sections, no dark footer, no dark hero, anywhere.** Page background is white or a very light tint. Dark colour is used only for text and small details. No gradients that look like default AI landing pages (no purple to blue hero gradients, no glowing blobs, no glassmorphism cards stacked everywhere).

Palette (put as CSS variables and in Tailwind config):
- Ink (text): `#14213D`
- Body text: `#44506A`
- Primary, trust blue: `#1D4ED8`, hover `#1740B5`, tint `#EAF0FE`
- Accent, signal orange (emergency, CTAs): `#F26A1B`, hover `#D95A10`, tint `#FFF1E7`
- Surface alt: `#F6F8FB`, border `#E3E8F0`
- WhatsApp green `#25D366`, call blue `#1D4ED8`, notification red `#E5322D`
- Success tint `#E8F7EE`

Typography (not Inter, not Poppins, not Roboto):
- Headings: **Bricolage Grotesque** (600 to 800)
- Body: **Instrument Sans** (400 to 600)
- Fluid type scale with `clamp()`, body 16 to 18px, line height 1.65, max line length about 70 characters.

Layout language:
- 12 column grid, container max 1200px, generous vertical rhythm (section padding 72px mobile / 112px desktop).
- Sections alternate between white and `#F6F8FB` to make scrolling feel structured.
- Rounded corners 14 to 20px, soft layered shadows, thin borders, small orange "eyebrow" labels above headings.
- A signature graphic idea used consistently: a subtle road dashed line divider and small wrench or spark plug line icons (inline SVG, 1.75 stroke, rounded). No emoji as icons.
- Icons: hand written inline SVG set inside `components.js` or a sprite. No icon CDN.
- Buttons: primary orange, secondary outline blue, 52px minimum height, clear focus rings, press state (scale 0.98).

Motion (smooth but restrained):
- Scroll reveal with IntersectionObserver (fade and 16px rise, staggered 60ms), one time only.
- Hover lift on cards, underline slide on links, animated FAQ accordion with `grid-template-rows` transition.
- Everything respects `prefers-reduced-motion`.

---

## 6. SHARED COMPONENTS (in components.js, reusable, zero duplication)

1. **Header**: sticky, white with subtle blur, logo left, nav centre, "Call Now" button right. Top thin info bar with "Open 24 hours" and phone (hidden on small screens). Mobile: hamburger opens a light slide in drawer with large tap rows, call and WhatsApp buttons inside, body scroll lock, closes on link click, Escape key and outside tap. Active page highlighted using `aria-current`.
2. **Footer** (light, `#F6F8FB`, never dark): logo and short text, quick links, services links, contact block (address, phone, email, hours), mini map link, copyright with current year from JS, small note "Reviews shown are from Google". Also repeats the 24 hour line.
3. **Floating buttons** on every page:
   - Call button fixed bottom **left**, WhatsApp button fixed bottom **right**.
   - 60px circles on mobile, 64px desktop, with `env(safe-area-inset-bottom)` padding so they never hide behind phone gesture bars.
   - Soft pulse ring animation, gentle float, hover scale with tooltip label on desktop ("Call us", "Chat on WhatsApp"), press feedback on touch.
   - Red notification badge (top right of each circle, `#E5322D`, white number from `SITE.notification`, small pop in animation every few seconds). It is a visual attention cue only.
   - Clicking opens `tel:` or the WhatsApp link with a prefilled message that mentions the page the visitor was on.
   - Accessible: real `<a>` elements, `aria-label`, visible focus, not covering the footer text (add bottom padding to body equal to button size).
4. **CTA band**: reusable block ("Stuck on the road or planning a repair?") with call and WhatsApp buttons, light blue tint background.
5. **Section heading** helper, **review card**, **service card**, **FAQ item**, **breadcrumb**.
6. **SEO head helper** in `components.js`: titles and meta descriptions stay static in each page `<head>`. Canonical, `og:url`, `og:image`, Twitter image and JSON-LD are filled from `SITE.seo.domain` (or the current origin) as described in section 4, so the domain lives in one place.

---

## 7. PAGES: every page must be long, with 8 to 12 distinct sections so visitors keep scrolling

General rules for all pages: exactly one H1, logical H2 and H3 order, each section has an eyebrow, heading, intro line and varied layout (do not repeat the same card grid five times). Mix: split image and text, icon grids, numbered steps, timeline, stat tiles, review wall, tabs, accordion, chips, comparison table, map block. Every page ends with the CTA band and footer. Internal links between pages inside the text where natural.

### 7.1 HOME `/`
Title target: Car Repair in Jaipur | 24 Hour Breakdown Help | Azad Car Repair Workshop
Primary keywords: car repair Jaipur, car mechanic Jaipur, 24 hour car repair Jaipur, car breakdown service Jaipur.
Sections:
1. Hero: H1, two line promise covering both the workshop and the 24 hour breakdown help, call and WhatsApp buttons, rating chip "4.9 on Google, 622 reviews", "Open 24 hours" chip, "10+ years" chip, the arrival promise line, hero visual (illustrated SVG or placeholder, no stock photo of strangers).
2. Trust strip: five small facts (10+ years, 24 hours, Google 4.9, arrival promise, 30 day work warranty), each linking to its fine print.
3. Two ways we help (equal balance): split cards "Stuck on the road" and "Need your car repaired", each with 4 bullet jobs and its own button.
4. Services preview: 8 cards linking to the Services page anchors.
5. How a call works: 4 numbered steps (you call, we ask location and problem, we reach you or you drive in, fix and share updates).
6. Why people trust us: 6 reasons built from the review research, written in plain words.
7. Numbers band (light): 10+ years, 4.9 rating, 622 reviews, 24 hours a day. Count up animation once.
8. Problems we fix often: chips and short descriptions (car will not start, flat battery, noisy silencer, bumpy suspension, power windows, misfiring engine).
9. Review wall: 8 real reviews in a masonry style grid, with a button to the Google listing.
10. Areas we reach: locality chips (Pink City, C Scheme, Ajmeri Gate, Tripolia Bazaar, Tonk Road, Khasa Kothi, MI Road and highways) plus honest note about distance and traffic.
11. FAQ: 7 questions with FAQPage schema.
12. CTA band.

### 7.2 SERVICES `/services/`
Title target: Car Repair Services in Jaipur | Battery, Breakdown, Suspension | Azad Car Repair
Sections:
1. Page hero with breadcrumb and anchor chips to every group.
2. Two group intro (Emergency help / Workshop repair) with a "which one do I need" helper.
3. Emergency: battery jump start, battery replacement, car not starting diagnosis, night and early morning breakdown, help for travellers in hotels or on highways. Each as a detailed block with "what happens", "good to know" and a call button.
4. Workshop: general repair and diagnosis, suspension work, power window and electrical faults, silencer and exhaust, spark plugs and misfire, oil and fluid change, brake check, AC check (flagged `enabled` in config so I can switch off what I do not offer).
5. Step by step repair process with photo updates and parts clarity.
6. Parts, billing and warranty explained: genuine parts, option to bring your own, labour clearly separate, no hidden charges, ask for the bill breakdown, the 30 day work warranty with its fine print, and the arrival promise with its fine print. Plain honest wording.
7. Car brands we regularly see (generic list, no logos, no claims of authorisation).
8. "Tell us this when you call" checklist (location, model, what happened, warning lights).
9. Comparison table: Emergency visit vs Workshop visit (what to expect, time, what to bring).
10. Mini review row focused on service quality.
11. Services FAQ (6 to 8 questions, accordion).
12. CTA band.
Add `Service` JSON-LD items for the main services.

### 7.3 ABOUT `/about/`
Title target: About Azad Car Repair Workshop | Trusted Jaipur Car Mechanic
Sections:
1. Hero with a human, short opening paragraph.
2. Our story: 10+ years of fixing cars in Jaipur, why night calls matter, how we work, what the years taught us. Do not invent dates, names, places or events beyond the facts above. No people named, no team mention.
3. What we believe: 4 values phrased as habits, not slogans (turn up when called, explain before fixing, show the parts, charge fairly).
4. A day and a night at the workshop: two column timeline (day workshop work, night emergency calls).
5. What customers notice: 3 grouped themes from reviews with 1 real quote each.
6. Stats tiles (rating, reviews, hours).
7. Our promise list: 10+ years of experience, arrival promise, 30 day work warranty (each with fine print), plus what we will not do.
8. Where to find us: address block, landmark directions, embedded map.
9. How we check and explain a repair: inspection, photo updates, parts shown, bill breakdown, warranty, written as the workshop's habits. No team or people section of any kind.
10. Review highlights strip.
11. About FAQ (4 questions).
12. CTA band.

### 7.4 GALLERY `/gallery/`
Title target: Workshop Photos and Repair Work | Azad Car Repair Jaipur
Image files: I will add photos later in `/assets/img/gallery/` named exactly `gallery_1.jpeg`, `gallery_2.jpeg`, `gallery_3.jpeg`, `gallery_4.jpeg` and so on, with no gaps. I must never have to edit HTML or JS to show a new photo.

Auto loading rules (in `main.js`, driven by `SITE.gallery`):
- Probe the files in order (`gallery_1.jpeg`, `gallery_2.jpeg`, ...) with `Image()` preloading, in small parallel batches, and stop at the first number that does not exist (or at `maxImages`). Render tiles as they are found so the page never waits for the full scan.
- Default alt text: "Car repair work at Azad Car Repair Workshop, Jaipur, photo N". Optional per photo overrides by number in `SITE.gallery.overrides` (alt, caption, category). If at least two photos have a category, show the filter tabs, otherwise hide the tabs.
- If no photo exists yet, show 12 neat branded placeholder tiles labelled "Photo coming soon" and a small note, never a broken image icon.
- README gives the exact steps: save photos as `gallery_N.jpeg`, resize to about 1600px on the long side and under 400 KB each, put them in `assets/img/gallery/`, redeploy. A different extension needs `gallery.extension` changed in config.
- Use `loading="lazy"`, `decoding="async"` and `aspect-ratio` placeholders so the layout does not jump. Responsive masonry: 1 column at 320px, 2 on mobile, 3 on tablet, 4 on desktop.

Image viewer modal (must feel like a phone gallery app):
- Opens on tap or Enter, full screen on a light overlay (white at about 96 percent, no dark overlay), photo centred with caption and a "3 / 24" counter.
- **Swipe left and right** to change photo on touch, with a drag follow animation and a snap back if the swipe is short. Arrow buttons on desktop, left and right keys, Home and End keys, Escape to close.
- **Zoom:** pinch to zoom on touch, double tap or double click to toggle zoom (1x to 2.5x), mouse wheel and trackpad zoom, plus visible zoom in, zoom out and reset buttons. When zoomed, drag to pan with bounds so the photo never leaves the screen. Swiping to change photo is disabled while zoomed, and zoom resets when the photo changes. Zoom range 1x to 5x, transform based smooth animation only.
- Preload the next and previous photo. Small spinner while a photo loads. A failed photo shows the placeholder.
- Close button and arrows at least 48px, safe area padding, focus trap, `role="dialog"`, `aria-modal`, focus returns to the tile that opened it, body scroll locked while open, the browser Back button closes the modal (use `history.pushState`).
- `touch-action` set correctly so pinch and pan are not hijacked by the page. `prefers-reduced-motion` respected.

Sections:
1. Hero.
2. Filter tabs (only when categories exist).
3. The photo grid described above (the viewer opens from here).
4. "How we share progress" explainer (photo updates on WhatsApp during the job).
5. Optional video block (README explains how to add a video file or a Google Maps video link later).
6. Before you visit: what to photograph and send on WhatsApp for faster help.
7. A note that more photos and customer photos are on the Google Maps listing, with a button.
8. Warranty and arrival promise reminder strip.
9. Short FAQ about photos and progress updates.
10. CTA band.

### 7.5 CONTACT `/contact/`
Title target: Contact Azad Car Repair Jaipur | Call or WhatsApp 24 Hours
Sections:
1. Hero with giant tap to call number and WhatsApp button.
2. Three contact cards (Call, WhatsApp, Email) with tap targets.
3. Quick message form (name, phone, car model, problem, optional location). No backend: on submit validate, then open WhatsApp with a neatly formatted prefilled message, with a secondary "send by email" link built with `mailto:`. Inline validation, friendly errors, disabled double submit, works without JS by falling back to plain links in `<noscript>`.
4. Embedded Google Map (`iframe`, lazy, title attribute) plus "Get directions" button.
5. Address and how to find us: landmark based directions, plus code.
6. Hours: "Open 24 hours, every day" with the line that festivals and late nights are covered, no fake guarantees.
7. "Faster help" checklist: share live location on WhatsApp, send a photo of the problem, tell car model and fuel type.
8. Emergency do and don't list (switch on hazard lights, move aside safely, do not keep cranking a dead battery).
9. Contact FAQ (5 questions).
10. CTA band.

---

## 8. SERVICE LIST (config defaults)

Emergency group: Battery jump start, Battery replacement, Car not starting, Night and early morning breakdown, Highway and hotel pickup support.
Workshop group: General repair and diagnosis, Suspension, Power windows and electrical, Silencer and exhaust, Spark plugs and engine misfire, Oil and fluid service, Brake check, AC check.

---

## 9. CONTENT AND WRITING RULES (most important)

The text must read like a real Jaipur workshop owner and a good local writer made it, after genuinely researching what car owners worry about.

- Voice: first person plural ("we"), calm, direct, a little warm. Short and medium sentences mixed. Occasional one line paragraph. Real examples (a dead battery near a hotel at 2 am, a silencer that breaks the day after Diwali).
- **Punctuation ban:** no em dashes, no en dashes used as dashes, no double hyphens `--`, no ellipses used for effect, no semicolon chains, no excessive colons in headings, no emoji, no "not just X but Y" constructions, no rhetorical question openers on every section, no lists of exactly three adjectives.
- **Word ban:** seamless, elevate, unleash, robust, cutting edge, state of the art, game changer, leverage, navigate, tapestry, realm, delve, "in today's fast paced world", "look no further", "whether you are", "your trusted partner", "one stop solution", "top notch", "world class".
- Use plain words a driver uses: dead battery, jump start, silencer, tyre, starter, check engine light.
- No repeated sentence structure in consecutive paragraphs. No generic filler. Every paragraph must give a useful fact, an example or a clear next step.
- Each page has 900 to 1500 words of visible, useful text (Home 1400+, Services 1600+). Headings include natural keywords, never stuffed.
- Local flavour with accuracy: only mention landmarks and areas given in this brief.
- Honesty: arrival time and warranty claims use only the config promise text and fine print. Never state exact prices. Where price matters, say that the cost depends on the car and the part and that we explain it before we start. Review based speed claims stay phrased as "customers tell us".
- No person names, no "our team", no "our mechanics" anywhere. Use "we" or "the workshop".
- CTA wording varies by section (Call now, Message us on WhatsApp, Send your car details, See what we fix).
- All images need descriptive alt text. All buttons and links need descriptive text.

---

## 10. SEO REQUIREMENTS

Per page: unique static `<title>` (under 60 characters), static meta description (140 to 155 characters), canonical, `lang="en-IN"`, viewport with `viewport-fit=cover`, theme-color `#FFFFFF`, Open Graph and Twitter tags with `og-cover` image (1200x630 SVG or PNG), favicon set, manifest link. Every URL value comes from the single domain setting in section 4.

Structured data (JSON-LD, valid):
- `AutoRepair` (LocalBusiness) with name, alternateName (Hindi), telephone, email, address, geo, `openingHoursSpecification` for all days 00:00 to 23:59, `aggregateRating` 4.9 / 622, `hasMap`, `sameAs` Google Maps URL, `areaServed`. Do not invent a `foundingDate`, and never put staff or owner names in the schema.
- `BreadcrumbList` on inner pages.
- `FAQPage` on Home, Services and Contact (questions must match visible text).
- `Service` items on Services.

Also: `sitemap.xml` and `robots.txt` produced through the domain helper in section 4, internal linking, descriptive anchor text, no orphan pages, no duplicate H1, `loading="lazy"` below the fold, `fetchpriority="high"` for the hero image, preload the heading font, no layout shift. Target Lighthouse 95+ in Performance, Accessibility, Best Practices and SEO on mobile.

---

## 11. MOBILE FIRST, NATIVE APP FEEL

- Design at 360px first, then scale up. Test widths 320, 360, 390, 768, 1024, 1440. No horizontal scroll at any width.
- Minimum tap target 48px, spacing between tap targets 8px or more, text never below 16px in inputs (prevents iOS zoom).
- Use `100svh` for hero, `env(safe-area-inset-*)`, `overscroll-behavior`, `-webkit-tap-highlight-color: transparent`, smooth scroll, instant `:active` states.
- Sticky header shrinks slightly on scroll. Drawer menu animates with transform only.
- Images and cards use `aspect-ratio`, `object-fit`, fluid sizes. Long words and long names wrap safely.
- `site.webmanifest` so "Add to Home Screen" shows the logo and name (display standalone, white background).

---

## 12. EDGE AND EXCEPTION CASES TO HANDLE

- JS disabled or blocked: header, footer and floating buttons are missing, so `<noscript>` provides a minimal static header link row, phone, WhatsApp and address.
- Tailwind CDN slow or offline: `custom.css` contains a small critical fallback (font, background, container, buttons) so the page is still readable.
- Config value missing or empty: element hides itself, no "undefined".
- Phone shown in multiple formats: display "096806 54099", link uses E.164.
- Very small phones (320px), very large screens (2560px), landscape phones, browser zoom 200%, large system font size.
- Keyboard only navigation, screen readers (landmarks, skip link, `aria-expanded` on menu and accordions, focus management in drawer and lightbox).
- Slow 3G: fonts have fallbacks, images lazy, no render blocking extras.
- Gallery: no images yet, one image only, 100 images, a gap in the number sequence (scan stops there, README warns), failed image load, portrait and landscape mixed, very large files, uppercase `.JPEG` names (README: use lowercase `.jpeg`), swipe versus vertical page scroll, pinch while the browser also zooms the page, device rotated while the modal is open, Back button pressed while the modal is open.
- Domain empty, with and without trailing slash, without `https://`, with `www`.
- Promise switched off in config: every mention of it disappears cleanly.
- Form: empty fields, spaces only, invalid phone, very long text, double click, popup blocked on WhatsApp open (show a visible fallback link after submit).
- `prefers-reduced-motion`, `prefers-color-scheme: dark` (the site stays white on purpose, set `color-scheme: light`).
- Broken URL: styled 404 page with call and WhatsApp buttons and links to all pages.
- Trailing slash and no trailing slash both fine.
- Floating buttons must not overlap form submit buttons or cookie style elements on small screens (page bottom padding).
- Print: contact details friendly print stylesheet (optional, short).

---

## 13. SECURITY AND HOSTING FILES

- `_headers` (Netlify compatible): security headers (X-Content-Type-Options, Referrer-Policy, X-Frame-Options SAMEORIGIN, Permissions-Policy), long cache for `/assets/*`, short cache for HTML. Do not set a strict CSP that would break the Tailwind CDN or Google Fonts, or set one that explicitly allows them.
- `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `tools/domain-helper.html` included.
- README with: how to preview locally, how to zip and drag onto Netlify (zip so that `index.html` is at the top level of the folder you upload), how to go live first on the free netlify.app address, how to buy and connect a domain later on Netlify and on Cloudflare Pages, how to force HTTPS, the exact domain switch (change `seo.domain`, run the domain helper, replace the two files, redeploy), how to add gallery photos named `gallery_N.jpeg`, how to edit or switch off the arrival and warranty promises, how to change contact details, how to submit the sitemap in Google Search Console, and how to claim and link the Google Business Profile.

---

## 14. LOGO (create it as part of this project)

Deliver `assets/img/logo.svg` (horizontal logo), `logo-mark.svg` (icon only), `favicon.svg` and an `og-cover.svg`, all hand coded as clean SVG, light background friendly, text converted to paths or using a web safe fallback so it renders everywhere. Use the palette above (blue `#1D4ED8`, orange `#F26A1B`, ink `#14213D`). No black filled backgrounds.

Concept: a bold rounded mark that combines a simple car front or side silhouette with an open end wrench forming the letter A, with a small orange spark or lightning accent to hint at battery and fast help. Wordmark: "AZAD" in heavy Bricolage Grotesque style capitals, "CAR REPAIR WORKSHOP" smaller with wide letter spacing underneath, and optionally the Hindi line "आजाद कार रिपेयर वर्कशॉप" in a small size. It must stay readable at 32px height.

Also give me this **text to image prompt** for an AI image generator as a bonus, in the README:

> Flat vector logo for a car repair workshop named "AZAD CAR REPAIR", white background, simple geometric emblem combining a car silhouette and an open end wrench shaped like the letter A, royal blue (#1D4ED8) main shape with a small safety orange (#F26A1B) spark accent, bold modern sans serif wordmark in deep navy (#14213D), small spaced subtitle "WORKSHOP · JAIPUR", clean minimal, balanced, professional, scalable, no gradients, no shadows, no 3D, no mockup, centred, vector style, high contrast, suitable for signboard and favicon

---

## 15. DELIVERY FORMAT

1. First reply: the plan only (file tree, design tokens, list of sections per page, anything you assumed). Keep it short.
2. Then output every file in full, one after another, each preceded by its path in a heading. No "rest remains the same", no "...", no TODOs, no lorem ipsum. If the answer is too long for one message, continue file by file when I say "next" and keep the file order: config, tailwind-config, custom.css, components.js, main.js, logo files, index, services, about, gallery, contact, 404, robots, sitemap, manifest, _headers, README.
3. At the end give a QA checklist of what you verified and a "first 15 minutes after going live" list (replace domain, test call and WhatsApp on a real phone, submit sitemap, check Lighthouse mobile).

---

## 16. FINAL SELF CHECK BEFORE ANSWERING

- Is there any dark background anywhere? Remove it.
- Does any text contain an em dash, double hyphen, banned word or emoji? Rewrite it.
- Does changing one value in `site-config.js` update header, footer, floating buttons, contact page and structured data?
- Does every page have at least 8 clearly different sections?
- Do the call button (left) and WhatsApp button (right) with red badge appear on all 5 pages and the 404?
- Can the folder be zipped and uploaded with no build step?
- Are all claims limited to the facts and config promises in section 1?
- Is there any owner name, staff name, "our team" or team section left anywhere, including alt text, schema and README? Remove it.
- Does the site, canonical, Open Graph and JSON-LD work with `seo.domain` empty and update after changing only that one value?
- Do `gallery_1.jpeg`, `gallery_2.jpeg` and so on appear automatically, and does the viewer support swipe, pinch zoom, double tap zoom, buttons, keyboard and pan?
