/**
 * Azad Car Repair Workshop - Core Main JavaScript
 * Handles Scroll Reveal, Mobile Drawer, Accordions, Form Formatter,
 * Image Fallbacks, Stats Counter, and Interactive Touch/Swipe/Pinch-Zoom Gallery Lightbox.
 */

document.addEventListener("DOMContentLoaded", function() {

  // Image Fallback Handling across all <img> tags
  const rootPrefix = window.getRootPrefix ? window.getRootPrefix() : './';
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      if (!this.getAttribute('data-fallback-handled')) {
        this.setAttribute('data-fallback-handled', 'true');
        this.src = `${rootPrefix}assets/img/placeholder-car.svg`;
      }
    });
  });

  // 1. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 2. Mobile Drawer Navigation Controls
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
  const drawerClose = document.getElementById("mobile-drawer-close");

  if (menuBtn && drawer) {
    const openDrawer = () => {
      drawer.classList.remove("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    const closeDrawer = () => {
      drawer.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    menuBtn.addEventListener("click", openDrawer);
    if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !drawer.classList.contains("hidden")) {
        closeDrawer();
      }
    });

    // Close on nav link click
    drawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeDrawer);
    });
  }

  // 3. FAQ Accordion Controls
  const accordionBtns = document.querySelectorAll("[data-accordion-btn]");
  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".accordion-icon");
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      btn.setAttribute("aria-expanded", !isExpanded);
      if (!isExpanded) {
        content.classList.remove("hidden");
        if (icon) icon.style.transform = "rotate(180deg)";
      } else {
        content.classList.add("hidden");
        if (icon) icon.style.transform = "rotate(0deg)";
      }
    });
  });

  // 4. Contact Form to WhatsApp Formatter
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("form-name")?.value.trim() || "";
      const phone = document.getElementById("form-phone")?.value.trim() || "";
      const carModel = document.getElementById("form-car")?.value.trim() || "";
      const issue = document.getElementById("form-issue")?.value.trim() || "";
      const location = document.getElementById("form-location")?.value.trim() || "";

      if (!name || !phone || !issue) {
        alert("Please fill in your name, phone number, and car issue.");
        return;
      }

      let message = `Hello Azad Car Repair Workshop,\n\n`;
      message += `*New Enquiry from Website*\n`;
      message += `• *Name:* ${name}\n`;
      message += `• *Phone:* ${phone}\n`;
      if (carModel) message += `• *Car Model:* ${carModel}\n`;
      message += `• *Issue:* ${issue}\n`;
      if (location) message += `• *Location:* ${location}\n`;

      const whatsappUrl = `https://wa.me/${window.SITE.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Show fallback link below form
      const formFallback = document.getElementById("form-fallback");
      if (formFallback) {
        formFallback.innerHTML = `
          <div class="p-4 rounded-xl bg-successTint border border-whatsapp text-sm text-ink space-y-2">
            <p class="font-bold text-whatsapp flex items-center gap-2">
              <span>✓ Message Prepared!</span>
            </p>
            <p>If WhatsApp didn't open automatically, click the button below to send your request:</p>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-whatsapp text-white font-bold text-sm shadow-sm">
              Send on WhatsApp Now
            </a>
          </div>
        `;
        formFallback.classList.remove("hidden");
      }

      window.open(whatsappUrl, "_blank");
    });
  }

  // 5. Stats Number Count Up Animation
  const statNumbers = document.querySelectorAll("[data-count-target]");
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseFloat(entry.target.getAttribute("data-count-target"));
          const suffix = entry.target.getAttribute("data-count-suffix") || "";
          let current = 0;
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = (target % 1 === 0 ? target : target.toFixed(1)) + suffix;
              clearInterval(timer);
            } else {
              entry.target.textContent = (current % 1 === 0 ? Math.floor(current) : current.toFixed(1)) + suffix;
            }
          }, stepTime);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => countObserver.observe(num));
  }

  // 6. Interactive Gallery Auto-Scanner & Lightbox App Engine
  initGalleryEngine();
});

// Gallery Scanner & Touch Lightbox
function initGalleryEngine() {
  const galleryGrid = document.getElementById("gallery-grid");
  if (!galleryGrid) return;

  const rootPrefix = window.getRootPrefix ? window.getRootPrefix() : './';
  const cfg = window.SITE.gallery;
  const loadedPhotos = [];

  const renderPlaceholders = () => {
    galleryGrid.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      const tile = document.createElement("div");
      tile.className = "bg-surface border border-borderLine rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 aspect-square hover-lift shadow-card overflow-hidden";
      tile.innerHTML = `
        <img src="${rootPrefix}assets/img/placeholder-car.svg" alt="Photo ${i} Coming Soon" class="w-full h-32 object-cover rounded-xl" />
        <span class="font-heading font-bold text-sm text-ink">Photo ${i} Coming Soon</span>
      `;
      galleryGrid.appendChild(tile);
    }
  };

  let checkIndex = 1;
  const batchSize = 6;
  let scanning = true;

  function probeBatch() {
    if (!scanning || checkIndex > cfg.maxImages) {
      if (loadedPhotos.length === 0) renderPlaceholders();
      return;
    }

    let promises = [];
    for (let i = 0; i < batchSize; i++) {
      const num = checkIndex + i;
      if (num > cfg.maxImages) break;
      const imgPath = `${rootPrefix}${cfg.folder}${cfg.prefix}${num}.${cfg.extension}`;

      promises.push(new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ success: true, num, path: imgPath });
        img.onerror = () => resolve({ success: false, num, path: imgPath });
        img.src = imgPath;
      }));
    }

    Promise.all(promises).then(results => {
      let stopped = false;
      for (let res of results) {
        if (res.success) {
          const override = cfg.overrides[res.num] || {};
          loadedPhotos.push({
            num: res.num,
            src: res.path,
            alt: override.alt || `Car repair work at Azad Car Repair Workshop, Jaipur, photo ${res.num}`,
            caption: override.caption || `Workshop repair work photo #${res.num} - Azad Car Repair Workshop, Jaipur`,
            category: override.category || "General"
          });
          renderPhotoTile(loadedPhotos[loadedPhotos.length - 1], loadedPhotos.length - 1);
        } else {
          stopped = true;
          scanning = false;
          break;
        }
      }

      if (!stopped) {
        checkIndex += batchSize;
        probeBatch();
      } else if (loadedPhotos.length === 0) {
        renderPlaceholders();
      }
    });
  }

  function renderPhotoTile(photo, index) {
    if (galleryGrid.children.length === 1 && galleryGrid.firstElementChild.innerText.includes("Scanning")) {
      galleryGrid.innerHTML = "";
    }

    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "group relative rounded-2xl overflow-hidden bg-surfaceAlt border border-borderLine focus:outline-none focus:ring-2 focus:ring-accent aspect-4/3 text-left hover-lift";
    tile.setAttribute("aria-label", photo.alt);
    tile.innerHTML = `
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <p class="text-xs font-bold text-white truncate">${photo.caption}</p>
      </div>
    `;

    tile.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(tile);
  }

  probeBatch();

  // --- Lightbox Modal Engine ---
  let currentIndex = 0;
  let zoomScale = 1;
  let panX = 0, panY = 0;

  let lightboxEl = document.getElementById("gallery-lightbox");
  if (!lightboxEl) {
    lightboxEl = document.createElement("div");
    lightboxEl.id = "gallery-lightbox";
    lightboxEl.className = "gallery-lightbox";
    lightboxEl.setAttribute("role", "dialog");
    lightboxEl.setAttribute("aria-modal", "true");
    lightboxEl.innerHTML = `
      <div class="p-4 flex items-center justify-between bg-surface/90 backdrop-blur-sm border-b border-borderLine z-10">
        <div class="flex items-center gap-3">
          <span id="lb-counter" class="text-xs font-bold px-3 py-1 rounded-full bg-accent-tint text-accent">1 / 1</span>
          <span id="lb-caption" class="text-xs text-bodyText hidden sm:inline-block max-w-md truncate font-semibold"></span>
        </div>
        <div class="flex items-center gap-2">
          <button id="lb-zoom-in" type="button" aria-label="Zoom In" class="px-3 py-1.5 rounded-xl text-ink font-bold hover:bg-surfaceAlt">
            + Zoom
          </button>
          <button id="lb-zoom-out" type="button" aria-label="Zoom Out" class="px-3 py-1.5 rounded-xl text-ink font-bold hover:bg-surfaceAlt">
            - Zoom
          </button>
          <button id="lb-reset" type="button" aria-label="Reset Zoom" class="px-3 py-1.5 rounded-xl text-ink font-bold hover:bg-surfaceAlt">
            Reset
          </button>
          <button id="lb-close" type="button" aria-label="Close Lightbox" class="px-3.5 py-1.5 rounded-xl bg-accent text-white font-bold hover:bg-accent-hover ml-2">
            ✕ Close
          </button>
        </div>
      </div>

      <div id="lb-viewport" class="lightbox-viewport">
        <button id="lb-prev" type="button" aria-label="Previous Photo" class="absolute left-4 z-20 px-4 py-2 rounded-full bg-surface/90 text-ink shadow-md hover:bg-surface border border-borderLine font-bold">
          ← Prev
        </button>
        <div id="lb-wrapper" class="lightbox-img-wrapper">
          <img id="lb-img" class="lightbox-img" src="" alt="" />
        </div>
        <button id="lb-next" type="button" aria-label="Next Photo" class="absolute right-4 z-20 px-4 py-2 rounded-full bg-surface/90 text-ink shadow-md hover:bg-surface border border-borderLine font-bold">
          Next →
        </button>
      </div>
    `;
    document.body.appendChild(lightboxEl);
  }

  const lbImg = document.getElementById("lb-img");
  const lbWrapper = document.getElementById("lb-wrapper");
  const lbCounter = document.getElementById("lb-counter");
  const lbCaption = document.getElementById("lb-caption");

  function updateTransform() {
    if (lbWrapper) {
      lbWrapper.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${zoomScale})`;
    }
  }

  function resetZoom() {
    zoomScale = 1;
    panX = 0;
    panY = 0;
    updateTransform();
  }

  function openLightbox(index) {
    if (loadedPhotos.length === 0) return;
    currentIndex = index;
    lightboxEl.classList.add("is-open");
    document.body.style.overflow = "hidden";
    try {
      history.pushState({ lightboxOpen: true }, "");
    } catch(e) {}
    showPhoto(currentIndex);
  }

  function closeLightbox() {
    lightboxEl.classList.remove("is-open");
    document.body.style.overflow = "";
    resetZoom();
  }

  function showPhoto(idx) {
    resetZoom();
    const photo = loadedPhotos[idx];
    if (!photo) return;
    lbImg.src = photo.src;
    lbImg.alt = photo.alt;
    lbCounter.textContent = `${idx + 1} / ${loadedPhotos.length}`;
    if (lbCaption) lbCaption.textContent = photo.caption;
  }

  document.getElementById("lb-close")?.addEventListener("click", closeLightbox);
  document.getElementById("lb-prev")?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + loadedPhotos.length) % loadedPhotos.length;
    showPhoto(currentIndex);
  });
  document.getElementById("lb-next")?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % loadedPhotos.length;
    showPhoto(currentIndex);
  });

  document.getElementById("lb-zoom-in")?.addEventListener("click", () => {
    zoomScale = Math.min(zoomScale + 0.5, 5);
    updateTransform();
  });
  document.getElementById("lb-zoom-out")?.addEventListener("click", () => {
    zoomScale = Math.max(zoomScale - 0.5, 1);
    if (zoomScale === 1) panX = panY = 0;
    updateTransform();
  });
  document.getElementById("lb-reset")?.addEventListener("click", resetZoom);

  lbImg?.addEventListener("dblclick", () => {
    if (zoomScale > 1) {
      resetZoom();
    } else {
      zoomScale = 2.5;
      updateTransform();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightboxEl.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + loadedPhotos.length) % loadedPhotos.length;
      showPhoto(currentIndex);
    }
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % loadedPhotos.length;
      showPhoto(currentIndex);
    }
  });

  window.addEventListener("popstate", () => {
    if (lightboxEl.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
