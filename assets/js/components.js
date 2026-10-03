/**
 * Azad Car Repair Workshop - Shared Web Components (Enterprise SVG Icons & Indian Automotive Theme)
 */

// Enterprise SVG Vector Icon Library
window.getIconSvg = function(name, extraClass = "w-5 h-5") {
  const icons = {
    "phone": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    "whatsapp": `<svg class="${extraClass}" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.296-.883-.647-1.479-1.446-1.652-1.743-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.633.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
    "location-pin": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    "clock": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    "star-filled": `<svg class="${extraClass}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
    "wrench": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    "battery": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/><line x1="5" y1="10" x2="5" y2="14"/><line x1="9" y1="10" x2="9" y2="14"/><line x1="13" y1="10" x2="13" y2="14"/></svg>`,
    "gauge": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10M12 12l4-4"/><path d="M12 22a10 10 0 0 1-10-10"/></svg>`,
    "shield-check": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    "chevron-right": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    "chevron-left": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    "chevron-down": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    "close-x": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    "menu": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    "arrow-right": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    "mail": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    "check-circle": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    "cross-circle": `<svg class="${extraClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
  };
  return icons[name] || icons["wrench"];
};

// Helper for resolving page target link for HTTP vs local file://
function resolvePageLink(itemHref) {
  const rootPrefix = window.getRootPrefix ? window.getRootPrefix() : './';
  if (itemHref === '/') return `${rootPrefix}index.html`;
  return `${rootPrefix}${itemHref.replace(/^\//, '')}${itemHref.endsWith('/') ? 'index.html' : ''}`;
}

// Render Shared Header
window.renderHeader = function(activePath = "/") {
  const headerEl = document.getElementById("site-header");
  if (!headerEl) return;

  const rootPrefix = window.getRootPrefix ? window.getRootPrefix() : './';

  const navItems = window.SITE.navigation.map(item => {
    const isActive = (item.href === "/" && activePath === "/") || (item.href !== "/" && activePath.startsWith(item.href));
    const linkUrl = resolvePageLink(item.href);
    return `
      <a href="${linkUrl}"
         class="transition-all duration-200 ${isActive ? 'nav-tab-active font-extrabold bg-red-600 text-white px-4 py-2 rounded-xl shadow-md' : 'font-bold text-slate-700 hover:text-red-600 px-3 py-2'}"
         ${isActive ? 'aria-current="page"' : ''}>
        ${item.label}
      </a>
    `;
  }).join("");

  headerEl.innerHTML = `
    <!-- Top Thin Announcement Bar (Mobile Clean Centered Alignment) -->
    <div class="bg-slate-100 border-b border-slate-200 py-2 px-3 text-xs sm:text-sm text-slate-700">
      <div class="container-custom flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div class="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] sm:text-xs font-extrabold border border-red-200">
            <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            ${window.SITE.business.hoursText}
          </span>
          <span class="inline-flex items-center gap-1 text-slate-900 font-bold text-[11px] sm:text-xs">
            ${getIconSvg("location-pin", "w-3.5 h-3.5 text-red-600 shrink-0")}
            <span>${window.SITE.address.landmark}, ${window.SITE.address.area}</span>
          </span>
        </div>
        <div class="flex items-center justify-center">
          <a href="tel:${window.SITE.contact.phoneTel}" class="font-extrabold text-red-600 hover:text-red-700 flex items-center gap-1 text-xs sm:text-sm">
            ${getIconSvg("phone", "w-3.5 h-3.5 text-red-600 shrink-0")}
            <span>Call: ${window.SITE.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Header Navbar -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
      <div class="container-custom flex items-center justify-between h-20">
        <!-- Logo Left -->
        <a href="${resolvePageLink('/')}" class="flex items-center gap-3 group focus:outline-none">
          <img src="${rootPrefix}logo.png" alt="${window.SITE.business.name} Logo" class="h-12 w-auto object-contain rounded" width="48" height="48" />
          <div class="flex flex-col">
            <span class="font-heading font-extrabold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight group-hover:text-red-600 transition-colors">
              AZAD CAR REPAIR
            </span>
            <span class="text-xs font-extrabold text-amber-600 tracking-widest uppercase">
              WORKSHOP · JAIPUR
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Centre -->
        <nav class="hidden lg:flex items-center gap-4" aria-label="Main Navigation">
          ${navItems}
        </nav>

        <!-- Right Header CTA Button (Solid Visible Red) -->
        <div class="hidden sm:flex items-center gap-3">
          <a href="tel:${window.SITE.contact.phoneTel}"
             class="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-md active:scale-98 transition-all">
            ${getIconSvg("phone", "w-4 h-4 text-white")}
            <span>Call 096806 54099</span>
          </a>
        </div>

        <!-- Mobile Drawer Menu Toggle -->
        <button id="mobile-menu-btn"
                type="button"
                aria-expanded="false"
                aria-controls="mobile-drawer"
                aria-label="Open Navigation Menu"
                class="lg:hidden p-2.5 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-100 focus:outline-none flex items-center gap-1.5">
          ${getIconSvg("menu", "w-6 h-6 text-slate-900")}
        </button>
      </div>
    </header>

    <!-- Mobile Navigation Drawer Overlay (Document-Level Overlay) -->
    <div id="mobile-drawer" class="fixed inset-0 z-50 lg:hidden hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div id="mobile-drawer-backdrop" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"></div>
      <div class="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50 border-l border-slate-200">
        <div>
          <div class="flex items-center justify-between pb-6 border-b border-slate-200">
            <a href="${resolvePageLink('/')}" class="flex items-center gap-2">
              <img src="${rootPrefix}logo.png" alt="${window.SITE.business.name}" class="h-10 w-auto" width="40" height="40" />
              <span class="font-heading font-extrabold text-base text-slate-900">AZAD CAR REPAIR</span>
            </a>
            <button id="mobile-drawer-close" type="button" aria-label="Close Navigation Menu" class="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              ${getIconSvg("close-x", "w-6 h-6 text-slate-900")}
            </button>
          </div>
          <nav class="flex flex-col gap-2.5 py-6" aria-label="Mobile Navigation Links">
            ${window.SITE.navigation.map(item => `
              <a href="${resolvePageLink(item.href)}" class="flex items-center justify-between px-4 py-3 rounded-xl font-extrabold text-slate-900 bg-slate-50 hover:bg-red-50 hover:text-red-600 transition-colors border border-slate-200">
                <span>${item.label}</span>
                ${getIconSvg("chevron-right", "w-4 h-4 text-slate-400")}
              </a>
            `).join("")}
          </nav>
        </div>

        <!-- Drawer Action Buttons -->
        <div class="pt-6 border-t border-slate-200 flex flex-col gap-3">
          <a href="tel:${window.SITE.contact.phoneTel}" class="btn-shimmer w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-600 text-white font-extrabold text-base shadow-md hover:bg-red-700">
            ${getIconSvg("phone", "w-5 h-5 text-white")}
            <span>Call 096806 54099</span>
          </a>
          <a href="https://wa.me/${window.SITE.contact.whatsappNumber}?text=${encodeURIComponent(window.SITE.contact.whatsappDefaultMessage)}" class="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 text-white font-extrabold text-base shadow-md hover:bg-emerald-700">
            ${getIconSvg("whatsapp", "w-5 h-5 text-white")}
            <span>WhatsApp Emergency Chat</span>
          </a>
          <p class="text-xs text-center text-slate-600 mt-2 font-extrabold">
            📍 Shop No 2, MI Road, near Natha Arts, Jaipur
          </p>
        </div>
      </div>
    </div>
  `;
};

// Render Shared Light Footer
window.renderFooter = function() {
  const footerEl = document.getElementById("site-footer");
  if (!footerEl) return;

  const rootPrefix = window.getRootPrefix ? window.getRootPrefix() : './';
  const currentYear = new Date().getFullYear();

  footerEl.innerHTML = `
    <footer class="bg-slate-50 border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">

          <!-- Column 1: Brand Info -->
          <div class="space-y-4">
            <a href="${resolvePageLink('/')}" class="flex items-center gap-3 focus:outline-none">
              <img src="${rootPrefix}logo.png" alt="${window.SITE.business.name}" class="h-12 w-auto object-contain rounded" width="48" height="48" />
              <div>
                <span class="font-heading font-extrabold text-lg text-slate-900 block leading-tight">AZAD CAR REPAIR</span>
                <span class="text-xs font-extrabold text-amber-600 tracking-wider uppercase">${window.SITE.business.hindiName}</span>
              </div>
            </a>
            <p class="text-sm leading-relaxed">
              ${window.SITE.business.shortDescription}
            </p>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900">
              <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              ${window.SITE.business.hoursText}
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="space-y-3">
            <h3 class="font-heading font-bold text-base text-slate-900 tracking-tight uppercase">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              ${window.SITE.navigation.map(nav => `
                <li>
                  <a href="${resolvePageLink(nav.href)}" class="hover:text-red-600 hover:underline transition-colors inline-block py-0.5 font-bold">
                    ${nav.label}
                  </a>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Column 3: Workshop Services -->
          <div class="space-y-3">
            <h3 class="font-heading font-bold text-base text-slate-900 tracking-tight uppercase">Our Services</h3>
            <ul class="space-y-2 text-sm font-bold">
              <li><a href="${resolvePageLink('/services/')}#battery-jumpstart" class="hover:text-red-600 hover:underline">Battery Jump Start &amp; Fitting</a></li>
              <li><a href="${resolvePageLink('/services/')}#car-not-starting" class="hover:text-red-600 hover:underline">Car Not Starting Diagnosis</a></li>
              <li><a href="${resolvePageLink('/services/')}#suspension-work" class="hover:text-red-600 hover:underline">Suspension &amp; Steering Repairs</a></li>
              <li><a href="${resolvePageLink('/services/')}#silencer-exhaust" class="hover:text-red-600 hover:underline">Silencer &amp; Exhaust Pipe Welding</a></li>
              <li><a href="${resolvePageLink('/services/')}#power-windows" class="hover:text-red-600 hover:underline">Power Windows &amp; Electrical Work</a></li>
              <li><a href="${resolvePageLink('/services/')}#night-breakdown" class="hover:text-red-600 hover:underline">Night &amp; Highway Breakdown Help</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Location -->
          <div class="space-y-3">
            <h3 class="font-heading font-bold text-base text-slate-900 tracking-tight uppercase">Contact Workshop</h3>
            <ul class="space-y-2.5 text-sm font-semibold">
              <li class="flex items-start gap-2.5">
                ${getIconSvg("location-pin", "w-5 h-5 text-red-600 shrink-0 mt-0.5")}
                <span>${window.SITE.address.fullAddress}</span>
              </li>
              <li class="flex items-center gap-2.5">
                ${getIconSvg("phone", "w-5 h-5 text-red-600 shrink-0")}
                <a href="tel:${window.SITE.contact.phoneTel}" class="font-extrabold text-slate-900 hover:text-red-600">
                  ${window.SITE.contact.phoneDisplay}
                </a>
              </li>
              <li class="flex items-center gap-2.5">
                ${getIconSvg("whatsapp", "w-5 h-5 text-emerald-600 shrink-0")}
                <a href="https://wa.me/${window.SITE.contact.whatsappNumber}" class="font-extrabold text-slate-900 hover:text-red-600">
                  WhatsApp: ${window.SITE.contact.phoneDisplay}
                </a>
              </li>
              <li class="flex items-center gap-2.5">
                ${getIconSvg("mail", "w-5 h-5 text-red-600 shrink-0")}
                <a href="mailto:${window.SITE.contact.email}" class="hover:text-red-600">
                  ${window.SITE.contact.email}
                </a>
              </li>
            </ul>
            <div class="pt-2">
              <a href="${window.SITE.address.mapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 hover:underline">
                <span>Open Google Maps Location</span>
                ${getIconSvg("arrow-right", "w-3.5 h-3.5 text-red-600")}
              </a>
            </div>
          </div>

        </div>

        <!-- Footer Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© ${currentYear} ${window.SITE.business.name}. All rights reserved.</p>
          <div class="flex items-center gap-2 text-xs font-extrabold">
            <span class="inline-flex items-center gap-1 text-amber-600">
              ${getIconSvg("star-filled", "w-4 h-4 text-amber-500")}
              ${window.SITE.business.rating} / 5.0
            </span>
            <span>(${window.SITE.business.reviewCount} Google Reviews)</span>
            <span class="text-slate-300">•</span>
            <span>Reviews shown are from Google</span>
          </div>
        </div>
      </div>
    </footer>
  `;
};

// Render Dual Floating Action Buttons (Solid Call Red & Solid WhatsApp Green)
window.renderFloatingButtons = function(pageName = "Home") {
  let floatContainer = document.getElementById("floating-buttons");
  if (!floatContainer) {
    floatContainer = document.createElement("div");
    floatContainer.id = "floating-buttons";
    document.body.appendChild(floatContainer);
  }

  const customMsg = `Hello Azad Car Repair, I need car help on your ${pageName} page in Jaipur.`;
  const badgeCount = window.SITE.notification || 1;

  floatContainer.innerHTML = `
    <!-- Floating Call Button (Bottom Left - Solid Red) -->
    <div class="fixed z-50 bottom-4 left-4 sm:bottom-6 sm:left-6 group">
      <a href="tel:${window.SITE.contact.phoneTel}"
         aria-label="Call Azad Car Repair Workshop Emergency Line"
         class="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white shadow-2xl pulse-call hover:scale-105 active:scale-95 transition-transform focus:outline-none">
        ${getIconSvg("phone", "w-7 h-7 text-white")}

        <!-- Red Notification Badge -->
        <span class="absolute -top-1 -right-1 flex items-center justify-center min-w-[22px] h-[22px] px-1 text-xs font-extrabold text-white bg-red-500 rounded-full border-2 border-white animate-badge shadow-sm">
          ${badgeCount}
        </span>
      </a>
      <span class="hidden sm:block absolute left-20 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
        Call 096806 54099
      </span>
    </div>

    <!-- Floating WhatsApp Button (Bottom Right - Solid Emerald Green) -->
    <div class="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 group">
      <a href="https://wa.me/${window.SITE.contact.whatsappNumber}?text=${encodeURIComponent(customMsg)}"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Chat with Azad Car Repair Workshop on WhatsApp"
         class="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 text-white shadow-2xl pulse-wa hover:scale-105 active:scale-95 transition-transform focus:outline-none">
        ${getIconSvg("whatsapp", "w-7 h-7 text-white")}

        <!-- Red Notification Badge -->
        <span class="absolute -top-1 -right-1 flex items-center justify-center min-w-[22px] h-[22px] px-1 text-xs font-extrabold text-white bg-red-500 rounded-full border-2 border-white animate-badge shadow-sm">
          ${badgeCount}
        </span>
      </a>
      <span class="hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
        WhatsApp Emergency Chat
      </span>
    </div>
  `;
};

// Render Reusable CTA Band
window.renderCtaBand = function(containerId, heading = "Stuck on the road or planning a car repair in Jaipur?", body = "Call us right now or send a message on WhatsApp. We reach you within 30 minutes for emergencies or welcome you to our MI Road workshop.") {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `
    <section class="cta-band bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 border-y border-slate-800">
      <div class="container-custom text-center max-w-3xl space-y-6">
        <span class="inline-block px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 text-xs font-extrabold uppercase tracking-wider border border-red-500/30">
          ⚡ 24/7 Car Breakdown Help in Jaipur
        </span>
        <h2 class="text-fluid-h2 font-heading font-extrabold text-white leading-tight">
          ${heading}
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          ${body}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="tel:${window.SITE.contact.phoneTel}" class="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-base shadow-xl active:scale-98 transition-all">
            ${getIconSvg("phone", "w-5 h-5 text-white")}
            <span>Call 096806 54099 Now</span>
          </a>
          <a href="https://wa.me/${window.SITE.contact.whatsappNumber}?text=${encodeURIComponent(window.SITE.contact.whatsappDefaultMessage)}" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-xl active:scale-98 transition-all">
            ${getIconSvg("whatsapp", "w-5 h-5 text-white")}
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  `;
};

// SEO Head Dynamic Helper
window.injectSeoHead = function(title, description, path = "/") {
  const rootPrefix = window.getRootPrefix ? window.getRootPrefix() : './';
  const domain = (window.SITE.seo.domain && window.SITE.seo.domain.trim() !== '')
    ? window.SITE.seo.domain.replace(/\/$/, '')
    : (window.location.origin && window.location.origin !== 'null' ? window.location.origin : '');

  const pageUrl = domain ? `${domain}${path}` : `${rootPrefix}${path.replace(/^\//, '')}`;
  const ogImage = domain ? `${domain}/${window.SITE.seo.defaultOgImage}` : `${rootPrefix}${window.SITE.seo.defaultOgImage}`;

  // Update Page Title and Meta Description
  if (title) document.title = title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  if (description) metaDesc.content = description;

  // Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = pageUrl;

  // Open Graph Tags Helper
  const setMeta = (property, content) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.content = content;
  };

  setMeta("og:title", title);
  setMeta("og:description", description);
  setMeta("og:url", pageUrl);
  setMeta("og:image", ogImage);
  setMeta("og:type", "website");
  setMeta("og:site_name", window.SITE.business.name);
  setMeta("og:locale", window.SITE.seo.locale);

  // Schema.org AutoRepair JSON-LD
  let schemaScript = document.getElementById("json-ld-schema");
  if (!schemaScript) {
    schemaScript = document.createElement("script");
    schemaScript.id = "json-ld-schema";
    schemaScript.type = "application/ld+json";
    document.head.appendChild(schemaScript);
  }

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${pageUrl}#workshop`,
    "name": window.SITE.business.name,
    "alternateName": window.SITE.business.hindiName,
    "description": window.SITE.business.shortDescription,
    "url": pageUrl,
    "telephone": window.SITE.contact.phoneTel,
    "email": window.SITE.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": window.SITE.address.line1,
      "addressLocality": window.SITE.address.city,
      "addressRegion": window.SITE.address.state,
      "postalCode": window.SITE.address.pin,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": window.SITE.address.lat,
      "longitude": window.SITE.address.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": window.SITE.business.rating.toString(),
      "reviewCount": window.SITE.business.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasMap": window.SITE.address.mapsUrl,
    "sameAs": [window.SITE.address.mapsUrl],
    "areaServed": window.SITE.areas.map(area => ({
      "@type": "AdministrativeArea",
      "name": `${area}, Jaipur`
    }))
  };

  schemaScript.textContent = JSON.stringify(jsonLdData);
};
