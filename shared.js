/* ================================================================
   PLUG CITY RECORDS — shared.js
   Demo Navigation Bar + Mobile Sidebar Toggle
   ================================================================ */
(function () {
  'use strict';

  // ── Detect current page ───────────────────────────────────────
  const rawPage = window.location.pathname.split('/').pop();
  const page = rawPage || 'index.html';

  // ── Page manifest for Plug City Records ──────────────────────
  const pages = [
    { id: 'index.html',  label: '🌐 Public Site' },
    { id: 'app.html',    label: '🎵 Fan App'      },
    { id: 'artist.html', label: '🎤 Artist'       },
    { id: 'admin.html',  label: '⚙️ Admin OS'     },
  ];

  // ── Build Demo Nav Bar ────────────────────────────────────────
  const nav = document.createElement('div');
  nav.id = 'demo-nav';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Demo navigation');

  nav.innerHTML =
    '<div class="demo-nav-inner">' +
      '<span class="demo-nav-label">Plug City</span>' +
      '<div class="demo-nav-pages">' +
        pages.map(function (p) {
          var cls = 'demo-nav-btn' + (p.id === page ? ' active' : '');
          return '<a href="' + p.id + '" class="' + cls + '">' + p.label + '</a>';
        }).join('') +
      '</div>' +
      '<button class="demo-nav-close" aria-label="Close demo bar" ' +
        'onclick="document.getElementById(\'demo-nav\').style.display=\'none\'">✕</button>' +
    '</div>';

  document.body.appendChild(nav);

  // ── Mobile Sidebar Toggle ─────────────────────────────────────
  var sidebar = document.querySelector('.sidebar');

  // Landing page (index.html) has no sidebar — add mobile hamburger for the top nav instead
  if (!sidebar) {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    var ham = document.createElement('button');
    ham.className = 'hamburger';
    ham.id = 'hamburger-btn';
    ham.setAttribute('aria-label', 'Toggle navigation menu');
    ham.setAttribute('aria-expanded', 'false');
    ham.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(ham);

    ham.addEventListener('click', function () {
      var open = navLinks.classList.toggle('mobile-nav-open');
      ham.setAttribute('aria-expanded', String(open));
      ham.classList.toggle('open', open);
    });

    // Close when any nav link is tapped
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('mobile-nav-open');
        ham.setAttribute('aria-expanded', 'false');
        ham.classList.remove('open');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navLinks.classList.remove('mobile-nav-open');
        ham.setAttribute('aria-expanded', 'false');
        ham.classList.remove('open');
      }
    });

    return;
  }

  // Hamburger button
  var ham = document.createElement('button');
  ham.className = 'hamburger';
  ham.id = 'hamburger-btn';
  ham.setAttribute('aria-label', 'Open navigation menu');
  ham.setAttribute('aria-expanded', 'false');
  ham.innerHTML = '<span></span><span></span><span></span>';
  document.body.appendChild(ham);

  // Backdrop overlay
  var overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  document.body.appendChild(overlay);

  function openSidebar() {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
    ham.setAttribute('aria-expanded', 'true');
    ham.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
    ham.setAttribute('aria-expanded', 'false');
    ham.classList.remove('open');
    document.body.style.overflow = '';
  }

  ham.addEventListener('click', function () {
    sidebar.classList.contains('mobile-open') ? closeSidebar() : openSidebar();
  });

  overlay.addEventListener('click', closeSidebar);

  // Auto-close when a nav item is tapped on mobile
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (window.innerWidth <= 768) closeSidebar();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

}());
