/* ============================================================
   LATIN AMERICA REPRESENTATIVE — i18n.js
   Language switching system using translations.json
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'lar_lang';
  const DEFAULT_LANG = 'en';
  let translations = {};
  let currentLang = DEFAULT_LANG;

  /* ---- Load translations JSON ---- */
  async function loadTranslations() {
    try {
      const res = await fetch('translations.json');
      translations = await res.json();
    } catch (e) {
      console.error('Failed to load translations.json', e);
    }
  }

  /* ---- Apply translations to DOM ---- */
  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    currentLang = lang;

    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* html content (for elements that contain markup) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* Save preference */
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    /* Update lang button label */
    const labels = { en: 'EN', pt: 'PT', es: 'ES' };
    document.querySelectorAll('#langToggle').forEach(function (btn) {
      /* preserve the svg arrow, only update text node */
      const svg = btn.querySelector('svg');
      btn.childNodes[0].textContent = labels[lang] + ' ';
      if (svg) btn.appendChild(svg);
    });

    /* Update active state on dropdown buttons */
    document.querySelectorAll('.lang-dropdown button').forEach(function (btn) {
      const map = { 'English': 'en', 'Português': 'pt', 'Español': 'es' };
      btn.classList.toggle('lang-active', map[btn.textContent] === lang);
    });

    /* Update html lang attribute */
    const htmlLang = { en: 'en', pt: 'pt-BR', es: 'es' };
    document.documentElement.lang = htmlLang[lang] || lang;
  }

  /* ---- Init ---- */
  async function init() {
    await loadTranslations();

    /* Restore saved language */
    let saved = DEFAULT_LANG;
    try { saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; } catch (e) {}
    applyLang(saved);

    /* Wire up dropdown buttons */
    document.querySelectorAll('.lang-dropdown button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const map = { 'English': 'en', 'Português': 'pt', 'Español': 'es' };
        const lang = map[btn.textContent];
        if (lang) applyLang(lang);
      });
    });
  }

  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();