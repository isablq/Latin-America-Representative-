/* ============================================================
   LATIN AMERICA REPRESENTATIVE — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ---- NAVBAR: scroll class ---- */
  const navbar = document.getElementById('navbar');

  function onScroll() {
    if (window.scrollY > 8) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  /* ---- MOBILE MENU ---- */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });


  /* ---- LANGUAGE SWITCHER ---- */
  const langToggle   = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');

  langToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = langDropdown.classList.toggle('open');
    langToggle.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', function () {
    langDropdown.classList.remove('open');
    langToggle.setAttribute('aria-expanded', 'false');
  });

  langDropdown.addEventListener('click', function (e) {
    e.stopPropagation();
    const btn = e.target.closest('button');
    if (btn) {
      langToggle.childNodes[0].textContent = btn.textContent.slice(0, 2).toUpperCase();
      langDropdown.classList.remove('open');
      langToggle.setAttribute('aria-expanded', 'false');
    }
  });


  /* ---- CONTACT FORM ---- */
  const form        = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic HTML5 validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Show success message and reset
    formSuccess.classList.add('visible');
    form.reset();

    setTimeout(function () {
      formSuccess.classList.remove('visible');
    }, 5000);
  });


  /* ---- INTERSECTION OBSERVER: fade-up animations ---- */
  const animatables = document.querySelectorAll(
    '.service-card, .market-card, .product-card, .trust-card, .stat-card, .info-card, .about-card, .section__header'
  );

  animatables.forEach(function (el) {
    el.classList.add('fade-up');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    animatables.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    animatables.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  /* ---- STAGGERED GRID ANIMATION ---- */
  function staggerGrid(selector, delay) {
    const items = document.querySelectorAll(selector);
    const gridObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const idx = Array.from(items).indexOf(entry.target);
            entry.target.style.transitionDelay = (idx * delay) + 'ms';
            entry.target.classList.add('visible');
            gridObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    items.forEach(function (el) { gridObserver.observe(el); });
  }

  if ('IntersectionObserver' in window) {
    staggerGrid('.service-card', 80);
    staggerGrid('.market-card', 60);
    staggerGrid('.product-card', 50);
    staggerGrid('.trust-card', 100);
  }


  /* ---- SMOOTH ANCHOR SCROLL (with navbar offset) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

})();