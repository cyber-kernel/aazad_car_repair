// Tailwind CSS configuration for Azad Car Repair Workshop (Indian Automotive Theme)
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        bodyText: '#334155',
        primary: {
          DEFAULT: '#1E293B',
          hover: '#0F172A',
          tint: '#F1F5F9',
        },
        accent: {
          DEFAULT: '#DC2626',
          hover: '#B91C1C',
          tint: '#FEF2F2',
        },
        saffron: {
          DEFAULT: '#D97706',
          hover: '#B45309',
          tint: '#FFFBEB',
        },
        surfaceAlt: '#F8FAFC',
        borderLine: '#E2E8F0',
        whatsapp: '#25D366',
        callRed: '#DC2626',
        badgeRed: '#EF4444',
        successTint: '#ECFDF5',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        cardHover: '0 20px 35px -5px rgba(220, 38, 38, 0.12), 0 8px 15px -3px rgba(30, 41, 59, 0.08)',
        floating: '0 10px 30px rgba(220, 38, 38, 0.3)',
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
      }
    }
  }
};
