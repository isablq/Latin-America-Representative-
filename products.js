/* ============================================================
   PRODUCTS PAGE — products.js
   ============================================================ */

(function () {
  'use strict';

  /* ---- STICKY NAV ---- */
  const stickyNav = document.createElement('nav');
  stickyNav.className = 'prod-nav-sticky';
  stickyNav.id = 'prodNavSticky';

  const inner = document.createElement('div');
  inner.className = 'prod-nav-sticky__inner';

  /* Read categories directly from the hero pills (already have data-i18n) */
  const heroPills = document.querySelectorAll('.prod-nav__pill');
  heroPills.forEach(function (pill) {
    const a = document.createElement('a');
    a.href = pill.getAttribute('href');
    a.className = 'prod-nav-sticky__pill';
    /* Copy data-i18n so i18n.js can update this pill too */
    var key = pill.getAttribute('data-i18n');
    if (key) a.setAttribute('data-i18n', key);
    a.textContent = pill.textContent;
    inner.appendChild(a);
  });

  stickyNav.appendChild(inner);
  document.body.insertBefore(stickyNav, document.body.firstChild.nextSibling);

  /* ---- SHOW/HIDE STICKY NAV on scroll ---- */
  const hero   = document.querySelector('.prod-hero');
  const navbar = document.getElementById('navbar');

  function onScroll() {
    if (!hero) return;
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom < 68) {
      stickyNav.classList.add('visible');
    } else {
      stickyNav.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- ACTIVE SECTION HIGHLIGHT ---- */
  const sections    = document.querySelectorAll('.cat-section');
  const stickyPills = inner.querySelectorAll('.prod-nav-sticky__pill');

  function setActive(id) {
    heroPills.forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('href') === '#' + id);
    });
    stickyPills.forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('href') === '#' + id);
    });
  }

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (sec) { io.observe(sec); });

  /* ---- SMOOTH SCROLL for all anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = (navbar ? navbar.offsetHeight : 68) + 60;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ---- FADE-UP animations ---- */
  const animEl = document.querySelectorAll('.prod-card, .cat-header, .prod-bottom-cta__inner');
  animEl.forEach(function (el) { el.classList.add('fade-up'); });

  const fadeObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i % 4 * 80) + 'ms';
        entry.target.classList.add('visible');
        fadeObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animEl.forEach(function (el) { fadeObs.observe(el); });

})();