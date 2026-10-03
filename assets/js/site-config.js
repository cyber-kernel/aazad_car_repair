/**
 * Azad Car Repair Workshop - Central Site Configuration
 * Single source of truth for business information, contact details,
 * services list, FAQs, reviews, and domain management.
 */

window.getRootPrefix = function() {
  const path = (window.location.pathname || "").replace(/\\/g, '/');
  if (path.includes('/services/') || path.includes('/about/') || path.includes('/gallery/') || path.includes('/contact/') || path.includes('/tools/')) {
    return '../';
  }
  return './';
};

window.SITE = {
  business: {
    name: "Azad Car Repair Workshop",
    hindiName: "आजाद कार रिपेयर वर्कशॉप",
    tagline: "24 Hour Car Breakdown & Repair Service in Jaipur",
    shortDescription: "Trusted car repair workshop on MI Road, Jaipur providing 24x7 emergency breakdown help, battery replacement, suspension, and complete car diagnostics with 10+ years experience.",
    rating: 4.9,
    reviewCount: 622,
    hoursText: "Open 24 hours, every day",
    is24x7: true,
    experienceText: "10+ years"
  },

  promises: {
    arrivalMinutes: 30,
    arrivalText: "We reach you within 30 minutes of your call, or tell us and we will make it right.",
    arrivalFinePrint: "Inside Jaipur city limits, once your location is shared. Heavy traffic or road closures can add time and we will tell you honestly on the call.",
    arrivalEnabled: true,

    warrantyDays: 30,
    warrantyText: "30 days warranty on our repair work",
    warrantyFinePrint: "Covers the labour we did. Parts carry their own manufacturer warranty where it applies. Misuse and new damage are not covered.",
    warrantyEnabled: true
  },

  contact: {
    phoneDisplay: "096806 54099",
    phoneTel: "+919680654099",
    whatsappNumber: "919680654099",
    whatsappDefaultMessage: "Hello Azad Car Repair, I need car help in Jaipur.",
    email: "yk9680654099@gmail.com"
  },

  address: {
    line1: "Shop No 2, Mirza Ismail Rd, near Natha Arts",
    area: "Pink City",
    city: "Jaipur",
    state: "Rajasthan",
    pin: "302001",
    fullAddress: "Shop No 2, Mirza Ismail Rd, near Natha Arts, Pink City, Jaipur, Rajasthan 302001",
    mapsUrl: "https://www.google.com/maps/place/Azad+Car+Repair+workshop/@26.9177539,75.8051532,17z/data=!4m6!3m5!1s0x396db589d6035dd3:0x24432a126a8552df!8m2!3d26.9177539!4d75.8051532!16s%2Fg%2F11p77922sm?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.518174092049!2d75.80257827632662!3d26.917758659145624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e472652b1b%3A0xb35a5ef062b3390c!2sAzad%20Car%20Repair%20workshop!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    lat: 26.9177539,
    lng: 75.8051532,
    plusCode: "WR94+43 Jaipur, Rajasthan",
    landmark: "Near Natha Arts, MI Road"
  },

  social: {
    googleMapsReviewsUrl: "https://www.google.com/maps/place/Azad+Car+Repair+workshop/@26.9177539,75.8051532,17z/data=!4m6!3m5!1s0x396db589d6035dd3:0x24432a126a8552df!8m2!3d26.9177539!4d75.8051532!16s%2Fg%2F11p77922sm?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    facebook: "",
    instagram: "",
    youtube: ""
  },

  seo: {
    domain: "", // Empty by default. Leave empty to auto-detect origin or set e.g. "https://azadcarrepair.in"
    siteName: "Azad Car Repair Workshop",
    defaultOgImage: "assets/img/og-cover.svg",
    locale: "en_IN"
  },

  navigation: [
    { label: "Home", href: "/", file: "index.html" },
    { label: "Services", href: "/services/", file: "services/index.html" },
    { label: "About Us", href: "/about/", file: "about/index.html" },
    { label: "Gallery", href: "/gallery/", file: "gallery/index.html" },
    { label: "Contact", href: "/contact/", file: "contact/index.html" }
  ],

  notification: 1,

  services: [
    {
      id: "battery-jumpstart",
      title: "Battery Jump Start",
      shortText: "Quick arrival across Jaipur for dead battery starting issues. We bring heavy jumper leads and boost packs.",
      icon: "battery-charging",
      group: "emergency",
      enabled: true
    },
    {
      id: "battery-replacement",
      title: "Battery Replacement",
      shortText: "On-site delivery and fitting of fresh genuine batteries with full manufacturer warranty registration.",
      icon: "battery-full",
      group: "emergency",
      enabled: true
    },
    {
      id: "car-not-starting",
      title: "Car Not Starting Diagnosis",
      shortText: "Fast electrical and starter check when your engine cranks slowly or stays silent.",
      icon: "key",
      group: "emergency",
      enabled: true
    },
    {
      id: "night-breakdown",
      title: "Night & Holiday Breakdown Help",
      shortText: "Round-the-clock emergency assistance inside Jaipur city, on festival days, and late nights.",
      icon: "moon",
      group: "emergency",
      enabled: true
    },
    {
      id: "highway-support",
      title: "Highway & Hotel Pickup Support",
      shortText: "Direct breakdown assistance for travellers stranded near hotel hubs or connecting highways.",
      icon: "navigation",
      group: "emergency",
      enabled: true
    },
    {
      id: "general-repair",
      title: "General Repair & Engine Diagnostics",
      shortText: "Complete mechanical check, spark plug misfire fixes, starter motor repair, and engine tuning.",
      icon: "wrench",
      group: "workshop",
      enabled: true
    },
    {
      id: "suspension-work",
      title: "Suspension & Steering Repair",
      shortText: "Shock absorber replacement, lower arm bushes, steering rack fixes, and noise elimination.",
      icon: "sliders",
      group: "workshop",
      enabled: true
    },
    {
      id: "power-windows",
      title: "Power Windows & Electrical Work",
      shortText: "Window glass mechanism repair, door lock actuators, wiring shorts, and fuse checks.",
      icon: "zap",
      group: "workshop",
      enabled: true
    },
    {
      id: "silencer-exhaust",
      title: "Silencer & Exhaust System Repair",
      shortText: "Exhaust pipe welding, silencer gasket replacement, manifold leakage, and clatter fixes.",
      icon: "disc",
      group: "workshop",
      enabled: true
    },
    {
      id: "spark-misfire",
      title: "Spark Plugs & Misfire Fixes",
      shortText: "Ignition coil replacement, spark plug cleaning, injector check, and smooth idling setup.",
      icon: "activity",
      group: "workshop",
      enabled: true
    },
    {
      id: "oil-service",
      title: "Oil & Fluid Maintenance",
      shortText: "Engine oil change, oil filter replacement, coolant flush, gear oil, and brake fluid top-up.",
      icon: "droplet",
      group: "workshop",
      enabled: true
    },
    {
      id: "brake-check",
      title: "Brake System Check & Pad Replacement",
      shortText: "Brake pad replacement, brake disc resurfacing, fluid bleed, and handbrake cable adjustment.",
      icon: "shield",
      group: "workshop",
      enabled: true
    },
    {
      id: "ac-check",
      title: "Car Air Conditioning Check",
      shortText: "AC gas recharge, cabin filter replacement, leak inspection, and cooling performance check.",
      icon: "wind",
      group: "workshop",
      enabled: true
    }
  ],

  areas: [
    "Pink City",
    "Mirza Ismail Rd (MI Road)",
    "C Scheme",
    "Ajmeri Gate",
    "Tripolia Bazaar",
    "Tonk Road",
    "Khasa Kothi Flyover",
    "Jaipur-Delhi Highway",
    "Ajmer Road",
    "Agra Road"
  ],

  reviews: [
    {
      name: "Rahul Sharma",
      text: "My car battery completely drained near C Scheme at 11 PM. I called Azad Car Repair and help arrived within 20 minutes. Very honest work and fair charges.",
      source: "Google review",
      featured: true
    },
    {
      name: "Vikram Singh",
      text: "Car was misfiring on Tonk Road while travelling with family. Reached out to this workshop and they diagnosed a bad spark plug quickly. Transparent pricing with genuine parts.",
      source: "Google review",
      featured: true
    },
    {
      name: "Aniti Verma",
      text: "Excellent service on MI Road. Fixed my Honda Accord power window mechanism in just two hours. Polite behavior and clear explanation before starting the job.",
      source: "Google review",
      featured: true
    },
    {
      name: "Deepak Agarwal",
      text: "Silencer noise broke out near Khasa Kothi flyover early morning. They welded it cleanly on the spot. Great 24-hour service in Jaipur.",
      source: "Google review",
      featured: true
    },
    {
      name: "Mahesh Khandelwal",
      text: "Drove to Jaipur from Delhi for a weekend stay. Car refused to start at hotel parking. Received prompt battery jump start assistance. Highly recommended.",
      source: "Google review",
      featured: true
    },
    {
      name: "Sanjay Joshi",
      text: "They let me buy original spare parts directly while only charging for workshop labour. Complete transparency and no hidden charges at all.",
      source: "Google review",
      featured: true
    },
    {
      name: "Pooja Mehta",
      text: "Fast suspension work done on my Swift. Photo updates were shared on WhatsApp during the job. Very respectful and professional approach.",
      source: "Google review",
      featured: true
    },
    {
      name: "Rajesh Saini",
      text: "Called on Diwali day when most shops were closed. Received help in 15 minutes for a starter motor fault. Best emergency repair in Pink City.",
      source: "Google review",
      featured: true
    }
  ],

  faq: {
    home: [
      {
        question: "How fast do you reach emergency breakdown locations in Jaipur?",
        answer: "Inside Jaipur city limits, we reach your location within 30 minutes of your call once location is shared on WhatsApp. Distance and heavy traffic can add time, and we inform you honestly on the phone."
      },
      {
        question: "Are your car repair services available 24 hours including festivals?",
        answer: "Yes, our workshop line operates 24 hours a day, 7 days a week, including late nights, early mornings, Sundays, and major festival days like Diwali."
      },
      {
        question: "Where is Azad Car Repair Workshop located?",
        answer: "We are located at Shop No 2, Mirza Ismail Rd, near Natha Arts, Pink City, Jaipur, Rajasthan 302001."
      },
      {
        question: "Do you fix cars on the spot or bring them to the workshop?",
        answer: "Battery jump starts, minor electrical fixes, and tyre or starter issues are handled on the spot. Complex suspension work, silencer welding, and major engine repairs are handled at our MI Road workshop."
      },
      {
        question: "What is your repair warranty policy?",
        answer: "We offer a 30 days warranty on our repair work. This covers the labour performed by our workshop. Spare parts carry their own manufacturer warranty where applicable."
      },
      {
        question: "Can I buy my own spare parts and pay only for labour?",
        answer: "Yes, you are always welcome to purchase genuine spare parts yourself from authorized dealers, and we will install them with clear, transparent labour charges."
      },
      {
        question: "Which car models and brands do you repair?",
        answer: "We repair all major Indian and international passenger car brands including Maruti Suzuki, Hyundai, Honda, Tata, Mahindra, Toyota, Ford, Volkswagen, and Kia."
      }
    ],
    services: [
      {
        question: "How do you charge for emergency breakdown visits?",
        answer: "Breakdown visits inside Jaipur city limits have transparent visit and diagnosis charges which are communicated upfront when you call us."
      },
      {
        question: "Will you send photo updates during workshop repairs?",
        answer: "Yes, we send photo updates and part purchase receipts directly on WhatsApp so you stay informed at every step of the repair process."
      },
      {
        question: "What should I tell you when I call for an emergency breakdown?",
        answer: "Please tell us your exact landmark or WhatsApp live location, car make and model, fuel type, and a short description of what happened or warning lights shown."
      },
      {
        question: "Do you provide original spare parts for replacement?",
        answer: "We use genuine spare parts from authorized brand distributors. We present old replaced parts and original part bills to you upon completion."
      },
      {
        question: "Is silencer welding performed at the workshop?",
        answer: "Yes, we perform silencer pipe welding, gasket replacements, and exhaust noise fixes directly at our workshop on MI Road."
      },
      {
        question: "How does the 30 day warranty work?",
        answer: "If any issue reoccurs regarding the specific labour we performed within 30 days, bring the vehicle back and we will rectify it without additional labour cost."
      }
    ],
    about: [
      {
        question: "How long has Azad Car Repair Workshop been operating in Jaipur?",
        answer: "Our workshop has been serving car owners in Jaipur for over 10 years with a strong track record of over 622 Google reviews and a 4.9 rating."
      },
      {
        question: "What makes your workshop different from authorized service centers?",
        answer: "We provide 24-hour response, lower labour overheads, direct mechanical explanation without hidden charges, and freedom for customers to bring their own parts."
      },
      {
        question: "Why do you emphasize honest arrival times?",
        answer: "We value your time and safety. If traffic or distance requires 35 minutes instead of 20, we tell you accurately on the call so you can wait in comfort."
      },
      {
        question: "Can out-of-station travellers rely on your workshop?",
        answer: "Yes, many of our clients are tourists and business travellers stranded near hotel hubs on MI Road, C Scheme, or nearby highways between Jaipur and Delhi."
      }
    ],
    gallery: [
      {
        question: "Are the photos on this site from actual repair work?",
        answer: "Yes, our gallery displays real repair jobs, workshop setups, and diagnostic work carried out at Azad Car Repair Workshop in Jaipur."
      },
      {
        question: "How can I see more photos of recent workshop repairs?",
        answer: "You can view additional customer photos and workshop updates directly on our official Google Maps listing."
      },
      {
        question: "Can I send photos of my car's damaged part on WhatsApp before visiting?",
        answer: "Yes, sending photos or a short video of the problem on WhatsApp helps us assess parts required and give you an accurate estimate before you arrive."
      }
    ],
    contact: [
      {
        question: "What is the fastest way to request emergency help?",
        answer: "Calling us directly on 096806 54099 is the fastest way. For non-urgent enquiries, messaging us on WhatsApp works great."
      },
      {
        question: "What if I break down late at night on a weekend?",
        answer: "Simply call 096806 54099. Our emergency line is active 24 hours every single day including weekends and holidays."
      },
      {
        question: "Where can I share my live location?",
        answer: "You can send your live location directly to our WhatsApp number 919680654099 after placing a quick call."
      },
      {
        question: "What details should I bring when dropping my car at the workshop?",
        answer: "Bring your car keys, registration certificate copy, and let us know any specific symptoms or sounds you noticed."
      },
      {
        question: "How do I reach the workshop on MI Road?",
        answer: "We are located near Natha Arts on Mirza Ismail Road in Pink City, Jaipur. You can click 'Get Directions' on our Contact page to open Google Maps navigation."
      }
    ]
  },

  gallery: {
    folder: "assets/img/gallery/",
    prefix: "gallery_",
    extension: "jpeg",
    maxImages: 200,
    overrides: {}
  }
};

/**
 * Data binding helper function.
 * Fills DOM elements with data-site, data-site-href, data-site-whatsapp-text attributes.
 * Safely handles missing keys without outputting undefined.
 */
window.bindSiteData = function() {
  const rootPrefix = window.getRootPrefix();

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : null, obj);
  };

  const domain = (window.SITE.seo.domain && window.SITE.seo.domain.trim() !== '')
    ? window.SITE.seo.domain.replace(/\/$/, '')
    : (window.location.origin && window.location.origin !== 'null' ? window.location.origin : '');

  // Bind Text Content
  document.querySelectorAll('[data-site]').forEach(el => {
    const key = el.getAttribute('data-site');
    const val = getNestedValue(window.SITE, key);
    if (val !== null && val !== undefined) {
      el.textContent = val;
    }
  });

  // Bind Href Links
  document.querySelectorAll('[data-site-href]').forEach(el => {
    const type = el.getAttribute('data-site-href');
    if (type === 'tel') {
      el.href = `tel:${window.SITE.contact.phoneTel}`;
    } else if (type === 'whatsapp') {
      const msg = el.getAttribute('data-site-whatsapp-text') || window.SITE.contact.whatsappDefaultMessage;
      el.href = `https://wa.me/${window.SITE.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    } else if (type === 'mail') {
      el.href = `mailto:${window.SITE.contact.email}`;
    } else if (type === 'maps') {
      el.href = window.SITE.address.mapsUrl;
    } else if (type === 'domain') {
      const path = el.getAttribute('data-path') || '';
      el.href = domain ? `${domain}${path}` : `${rootPrefix}${path.replace(/^\//, '')}`;
    }
  });
};

// Auto-bind on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.bindSiteData);
} else {
  window.bindSiteData();
}
