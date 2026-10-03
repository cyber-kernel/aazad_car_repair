# Azad Car Repair Workshop - 5-Page Production-Ready Static Website

This project is a complete, fully static, 5-page website for **Azad Car Repair Workshop** in Jaipur, Rajasthan. It requires **no build step, no Node/npm, no backend, no database, and no external dependencies**.

---

## 📁 Directory Structure

```
/
├── index.html                  <- Home Page (12 Sections)
├── services/index.html         <- Services Page (12 Sections)
├── about/index.html            <- About Us Page (12 Sections)
├── gallery/index.html          <- Gallery Page (Auto-Scanner & Lightbox App)
├── contact/index.html          <- Contact Page (Emergency Cards & Form)
├── 404.html                    <- Custom Error Page
├── logo.png                    <- Primary Brand Logo PNG
├── robots.txt                  <- SEO Crawl Settings
├── sitemap.xml                 <- XML Sitemap
├── site.webmanifest            <- PWA Manifest
├── _headers                    <- Netlify Security & Cache Headers
├── README.md                   <- Documentation
├── assets/
│   ├── css/
│   │   └── custom.css          <- Fallback CSS, Fluid Type & Lightbox Styles
│   ├── js/
│   │   ├── tailwind-config.js  <- Tailwind Design System Configuration
│   │   ├── site-config.js      <- CENTRAL CONFIGURATION (Edit details here!)
│   │   ├── components.js       <- Shared Header, Footer, FABs & SEO Injector
│   │   └── main.js             <- Scroll Reveal, Mobile Menu, Gallery & Form
│   └── img/
│       ├── logo.svg            <- Vector Brand Logo
│       ├── logo-mark.svg       <- Vector Emblem Icon
│       ├── favicon.svg         <- Vector Favicon
│       ├── og-cover.svg        <- Open Graph Social Preview Image
│       └── gallery/            <- Place gallery_1.jpeg, gallery_2.jpeg here
└── tools/
    └── domain-helper.html      <- 1-Click Sitemap & Robots Generator
```

---

## ⚡ Quick Start & Local Preview

Because all paths are **root-relative** (`/assets/...`, `/services/`, etc.), opening `index.html` by double-clicking in a browser window will not resolve asset paths correctly.

### Run with a local server:
- **VS Code:** Install "Live Server" extension, right-click `index.html` and click **"Open with Live Server"**.
- **Python:** Run `python3 -m http.server 8000` in the root folder, then open `http://localhost:8000`.
- **Node/npx:** Run `npx serve` in the project root folder.

---

## 🚀 How to Deploy on Netlify (Free Drag-and-Drop)

1. Select all files and folders in the project root directory.
2. Compress (ZIP) them so that `index.html` is at the top level inside the ZIP archive.
3. Go to [app.netlify.app/drop](https://app.netlify.app/drop).
4. Drag and drop your `.zip` file onto the upload region.
5. Your site is live immediately on a free `*.netlify.app` web address!

---

## ⚙️ One-File Configuration (`assets/js/site-config.js`)

All business details, phone numbers, addresses, ratings, promises, FAQs, and domain settings live in `assets/js/site-config.js`.

| What you want to change | Where to edit in `assets/js/site-config.js` |
| :--- | :--- |
| **Phone Number** | `contact.phoneDisplay` and `contact.phoneTel` |
| **WhatsApp Number** | `contact.whatsappNumber` |
| **Email Address** | `contact.email` |
| **Workshop Address** | `address.line1`, `address.area`, `address.landmark` |
| **Google Maps Link** | `address.mapsUrl` and `address.mapsEmbedUrl` |
| **Google Rating & Reviews**| `business.rating` and `business.reviewCount` |
| **30-Min Arrival Promise** | `promises.arrivalMinutes` and `promises.arrivalEnabled` |
| **30-Day Warranty** | `promises.warrantyDays` and `promises.warrantyEnabled` |
| **Custom Domain URL** | `seo.domain` (e.g. `"https://azadcarrepair.in"`) |

---

## 🌐 Custom Domain Setup Workflow

When you buy a custom domain (e.g., `https://azadcarrepair.in`):

1. Open `assets/js/site-config.js`.
2. Set `SITE.seo.domain = "https://azadcarrepair.in";`.
3. Open `tools/domain-helper.html` in your local web browser.
4. Click **"Copy sitemap.xml Content"** and paste it into `/sitemap.xml`.
5. Click **"Copy robots.txt Content"** and paste it into `/robots.txt`.
6. Redeploy the updated folder to Netlify.

---

## 🖼️ Adding Workshop Gallery Photos

To display photos in the Gallery page:
1. Resize your photos to approximately **1600px** on the long side and compress under **400 KB** each.
2. Save them as **lowercase** `.jpeg` files named sequentially:
   `gallery_1.jpeg`, `gallery_2.jpeg`, `gallery_3.jpeg`, `gallery_4.jpeg`...
3. Place them inside the `assets/img/gallery/` folder.
4. Redeploy. The site automatically detects and displays all photos without editing any HTML or JS code!

---

## 🎨 Bonus AI Logo Prompt

For generating alternative flat vector logo variations:

> Flat vector logo for a car repair workshop named "AZAD CAR REPAIR", white background, simple geometric emblem combining a car silhouette and an open end wrench shaped like the letter A, royal blue (#1D4ED8) main shape with a small safety orange (#F26A1B) spark accent, bold modern sans serif wordmark in deep navy (#14213D), small spaced subtitle "WORKSHOP · JAIPUR", clean minimal, balanced, professional, scalable, no gradients, no shadows, no 3D, no mockup, centred, vector style, high contrast, suitable for signboard and favicon
