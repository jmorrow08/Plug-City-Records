/* ================================================================
   PLUG CITY RECORDS — tour.js
   Guided Walkthrough Tour Engine
   One file covers all 4 pages: index, app, artist, admin
   ================================================================ */
(function () {
  'use strict';

  /* ── Tour step definitions per page ─────────────────────────── */
  var page = window.location.pathname.split('/').pop() || 'index.html';

  var TOURS = {

    /* ─── PUBLIC LANDING PAGE ──────────────────────────────────── */
    'index.html': [
      { sel: '#hero',       pos: 'bottom', title: '🎵 Welcome to Plug City Records',    desc: 'The official platform for Murkemz and Plug City Records — built to turn fan energy into real revenue. This hero section is the first thing visitors see.' },
      { sel: '#phx',        pos: 'bottom', title: '📡 PHX is Climbing',               desc: 'The song PHX is gaining traction across all platforms. This live counter updates in real time as new streams come in — social proof that builds credibility.' },
      { sel: '#music',      pos: 'top',    title: '🎶 The Catalog',                   desc: 'Six-track player with the full Plug City roster. Fans can stream right here without leaving the site — removing the barrier between discovery and fandom.' },
      { sel: '#platform',   pos: 'top',    title: '💡 Why Build a Platform?',         desc: 'This section makes the case: streaming platforms keep 70% of fan dollars. Plug City is built to reverse that — keeping revenue inside the ecosystem.' },
      { sel: '#plans',      pos: 'top',    title: '🎟️ Murk Pass Tiers',              desc: 'Three fan subscription tiers: Explorer ($7), Native ($15), Insider ($29). Each unlocks more exclusive content, perks, and access to Murkemz himself.' },
      { sel: '#plat-preview', pos: 'top', title: '📱 Platform Preview — Interactive', desc: 'Toggle between Fan App, Artist View, and Label Admin to see exactly what each user type experiences. This is live demo mode.' },
      { sel: '.pv-tab.active', pos: 'bottom', title: '🎵 Fan App View',              desc: 'The fan dashboard shows the subscriber\'s catalog access, active perks, and Murk Pass tier — a full music + loyalty experience.' },
      { sel: '#radio',      pos: 'top',    title: '📻 Murk Radio',                   desc: 'Artist-owned. Algorithm-free. Fans stream Murkemz and the full Plug City roster directly — no Spotify middleman, no skips, no ads.' },
      { sel: '#artists',    pos: 'top',    title: '🎤 The Roster',                   desc: 'Artists on Plug City Records are featured here with links to their individual artist pages. Each artist gets their own fan pass and revenue stream.' },
      { sel: '#store',      pos: 'top',    title: '👕 Merch Integration',             desc: 'Direct link to murkmerch.com product catalog. Items live here on the platform so fans shop without leaving the experience.' },
      { sel: '#calculator', pos: 'top',    title: '💰 Revenue Calculator',            desc: 'Interactive slider shows Murkemz and Bryce exactly what monthly revenue looks like at different subscriber counts. Great for investor conversations.' },
      { sel: '#app-cta',    pos: 'top',    title: '📲 Install as App (PWA)',          desc: 'Fans can add Plug City to their home screen like a native app — no App Store required. Instant push notifications and offline access.' },
      { sel: 'footer',      pos: 'top',    title: '✅ Full Ecosystem',                desc: 'From the landing page through subscription, merch, and events — every dollar stays inside the Plug City ecosystem. This is what independence looks like.' },
    ],

    /* ─── FAN APP DASHBOARD ────────────────────────────────────── */
    'app.html': [
      { sel: '.sidebar',       pos: 'right', title: '🏠 Navigation Sidebar',          desc: 'Ten sections of content: Home, Discover, Events, Eats, Music, Podcasts, Drops, Barbershops, My Pass, and Profile. All your city culture in one place.' },
      { sel: '.pass-chip',     pos: 'right', title: '🎟️ Your Murk Pass',             desc: 'This chip shows your current tier (Explorer / Native / Insider), your name, and your next billing date. It follows you on every screen.' },
      { sel: '.topbar',        pos: 'bottom', title: '📍 City Feed Header',           desc: 'The topbar shows your current view and gives you quick access to notifications. The city pulse is always visible at the top.' },
      { sel: '#view-home',     pos: 'right', title: '🏙️ City Feed — Home',            desc: 'Four KPI cards show your activity: streams this month, events attended, perks redeemed, and your current streak. Scroll down for the live city feed.' },
      { sel: '#view-music',    pos: 'right', title: '🎵 Music Player',                desc: 'Full-screen player with the complete Plug City catalog. PHX, Against All Odds, Hadouken RMX — stream and skip. Insider tracks are gated by tier.' },
      { sel: '.mini-player',   pos: 'top',   title: '🎧 Persistent Mini Player',      desc: 'Music keeps playing as you navigate between sections. The mini player sits at the bottom so you never have to stop the vibe.' },
      { sel: '#view-events',   pos: 'right', title: '📅 Events Feed',                 desc: 'All Phoenix events, venues, and ticket links in one place. Filter by genre, venue, or date. Pass holders get early access to select shows.' },
      { sel: '#view-eats',     pos: 'right', title: '🍽️ Eats + Perks',               desc: 'Partner restaurants listed with their active PHX Pass perks. Walk in, show your pass, get the discount — no coupon codes, no Groupon deal-hunting.' },
      { sel: '#view-drops',    pos: 'right', title: '👗 Fashion Drops',               desc: 'Countdown timers on limited drops from PHX fashion brands. Pass holders get notified and often get first access before the public.' },
      { sel: '#view-cuts',     pos: 'right', title: '💈 Barbershop Booking',          desc: 'Book your barber right from the app. Select a shop, pick a time, pay a deposit to hold your appointment — all without calling or texting.' },
      { sel: '#view-mypass',   pos: 'right', title: '🪪 Digital Pass Card',           desc: 'Your official PHX Pass membership card. Add to Apple Wallet or Google Wallet for quick tap-and-show at any partner location.' },
      { sel: '#view-podcasts', pos: 'right', title: '🎙️ Podcasts',                   desc: 'Six Phoenix-based podcasts: Murk Report, 602 Sports Talk, Desert Table, Shop Talk, RoRo Sessions, and PHX Hustle — all local voices.' },
      { sel: '#view-profile',  pos: 'right', title: '👤 Profile + Activity',          desc: 'Your member profile, streaming history, and a Chart.js bar graph showing your monthly platform activity — how engaged are you with the city?' },
    ],

    /* ─── ARTIST DASHBOARD ─────────────────────────────────────── */
    'artist.html': [
      { sel: '.sidebar',       pos: 'right', title: '🎤 Artist Command Center',        desc: 'The artist dashboard gives Murkemz and any signed artist full visibility into their platform performance. Overview, music, fans, events, merch, analytics, wallet, and label portal.' },
      { sel: '.artist-chip',   pos: 'right', title: '✅ Verified Artist Chip',         desc: 'Shows the artist\'s name, verification badge, and current tier — Murkemz is marked as Label Owner which gives him admin-level permissions.' },
      { sel: '#view-overview', pos: 'right', title: '📊 Revenue Overview',             desc: 'The top KPI row shows total subscribers, monthly revenue, streams, and retention rate — the four numbers that tell you if the platform is working.' },
      { sel: '#view-music',    pos: 'right', title: '🎵 Track Management',             desc: 'Upload and manage tracks. Set which tracks are free, which require Explorer tier, which require Insider. Control your catalog access tier by tier.' },
      { sel: '#view-fans',     pos: 'right', title: '👥 Fan Roster',                   desc: 'A list of every subscriber with their tier, join date, and engagement score. Filter by tier or activity level. These are your real fans.' },
      { sel: '#view-events',   pos: 'right', title: '📅 Event Management',             desc: 'Create and manage your events. Set ticket prices, upload flyers, enable Insider early access, and track how many tickets are sold in real time.' },
      { sel: '#view-merch',    pos: 'right', title: '👕 Merch Management',             desc: 'Sync with murkmerch.com or manage products directly. Set member-exclusive discounts for each pass tier — fans get a reason to stay subscribed.' },
      { sel: '#view-analytics',pos: 'right', title: '📈 Deep Analytics',              desc: 'Stream counts by track, subscriber growth chart, geographic distribution, and top fan segments. Know exactly who\'s listening and where they are.' },
      { sel: '#view-wallet',   pos: 'right', title: '💳 Artist Wallet',               desc: 'Every dollar earned, every payout issued. The wallet shows gross revenue, platform fee (20%), and net to artist — fully transparent, no surprises.' },
      { sel: '#view-label',    pos: 'right', title: '🏷️ Label Portal',               desc: 'Communication channel between the artist and Plug City Records management (Murkemz + Bryce). Contracts, splits, and announcements all in one place.' },
    ],

    /* ─── LABEL ADMIN DASHBOARD ────────────────────────────────── */
    'admin.html': [
      { sel: '.sidebar',        pos: 'right', title: '⚙️ Label Operations Center',    desc: 'The admin dashboard gives Murkemz and Bryce full control over the entire platform. Everything from revenue to artist management to push notifications.' },
      { sel: '.admin-chip',     pos: 'right', title: '👑 Admin Access — Both Owners', desc: 'Shows Murkemz + Bryce as co-admins. This chip confirms you\'re in the highest-permission view of the platform.' },
      { sel: '#view-command',   pos: 'right', title: '🖥️ Command Center',             desc: 'Six live KPI cards, a revenue bar chart, revenue mix doughnut, and a live alert feed that updates every 5 seconds. This is real-time platform pulse.' },
      { sel: '#view-revenue',   pos: 'right', title: '💰 Revenue OS',                 desc: 'The full 10-stream P&L table showing gross revenue, 20% platform fee, and net to artists. A growth line chart and revenue-by-stream breakdown.' },
      { sel: '#view-members',   pos: 'right', title: '👥 Member Intelligence',         desc: 'Total subscriber count by tier, churn rate, new sign-ups this month, and average revenue per user — the metrics that predict platform longevity.' },
      { sel: '#view-partners',  pos: 'right', title: '🤝 Partner Management',          desc: 'All business and creator partner applications, approval status, and active roster. Track which Founding Partners have completed their 3 social posts.' },
      { sel: '#view-events',    pos: 'right', title: '📅 Platform Events',             desc: 'Every event listed across all artists on the platform. Monitor ticket sales, flag capacity issues, and feature events on the landing page.' },
      { sel: '#view-feed',      pos: 'right', title: '📰 Content Feed',               desc: 'Approve, pin, or remove community posts. Flag content, feature artist announcements, and control what rises to the top of the city feed.' },
      { sel: '#view-push',      pos: 'right', title: '📣 Push Notifications',          desc: 'Send targeted blasts to all members or by tier. 84% average open rate. Use for new drops, events, exclusive announcements, and merch launches.' },
      { sel: '#view-verticals', pos: 'right', title: '📊 Vertical Health',            desc: 'A health score for all 8 platform verticals — music, eats, events, fashion, podcasts, barbershops, art, and sports. See where to push growth next.' },
      { sel: '#view-reports',   pos: 'right', title: '📋 P&L Reports + Projections',  desc: 'Monthly P&L summary and a 12-month projection chart showing conservative vs optimistic revenue scenarios. This is what you show investors.' },
      { sel: '#view-settings',  pos: 'right', title: '⚙️ Platform Settings',          desc: 'Global settings: platform fee rate, tier pricing, notification preferences, and API integrations. Full control over how the platform operates.' },
    ],
  };

  /* ── Tour engine ─────────────────────────────────────────────── */
  var steps = TOURS[page] || [];
  if (!steps.length) return;

  var current = 0;
  var canvas, ctx, tooltip, active = false;

  /* Inject tour CSS */
  var style = document.createElement('style');
  style.textContent = [
    '#tour-canvas{position:fixed;inset:0;z-index:99970;pointer-events:none;transition:opacity .3s}',
    '#tour-tooltip{position:fixed;z-index:99975;background:#111122;border:1.5px solid rgba(201,168,76,.5);border-radius:16px;padding:1.4rem 1.5rem;width:320px;box-shadow:0 24px 64px rgba(0,0,0,.7);display:none;font-family:\'Space Grotesk\',sans-serif}',
    '.tt-step{font-size:.65rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(201,168,76,.6);margin-bottom:.5rem}',
    '.tt-title{font-size:1rem;font-weight:800;color:#F0F0F5;margin-bottom:.5rem;line-height:1.3}',
    '.tt-desc{font-size:.82rem;color:rgba(240,240,245,.65);line-height:1.65;margin-bottom:1rem}',
    '.tt-progress{display:flex;gap:4px;margin-bottom:1rem}',
    '.tt-dot{height:3px;border-radius:3px;flex:1;background:rgba(255,255,255,.12);transition:background .2s}',
    '.tt-dot.done{background:#C9A84C}',
    '.tt-controls{display:flex;gap:.5rem;align-items:center}',
    '.tt-btn{padding:.4rem .9rem;border-radius:8px;font-size:.78rem;font-weight:700;cursor:pointer;border:none;transition:all .16s;font-family:inherit}',
    '.tt-btn-prev{background:rgba(255,255,255,.07);color:rgba(240,240,245,.6)}',
    '.tt-btn-prev:hover{background:rgba(255,255,255,.12)}',
    '.tt-btn-next{background:#C9A84C;color:#08080e;flex:1}',
    '.tt-btn-next:hover{background:#E8C970}',
    '.tt-btn-skip{background:none;border:none;color:rgba(240,240,245,.3);font-size:.72rem;cursor:pointer;margin-left:auto;font-family:inherit}',
    '.tt-btn-skip:hover{color:rgba(240,240,245,.6)}',
    '#tour-start-btn{background:rgba(201,168,76,.15);color:#C9A84C;border:1px solid rgba(201,168,76,.3);padding:.38rem .8rem;border-radius:7px;font-size:.78rem;font-weight:700;cursor:pointer;transition:all .16s;font-family:inherit;white-space:nowrap;flex-shrink:0}',
    '#tour-start-btn:hover{background:rgba(201,168,76,.25);border-color:rgba(201,168,76,.6)}',
  ].join('');
  document.head.appendChild(style);

  /* Canvas overlay */
  canvas = document.createElement('canvas');
  canvas.id = 'tour-canvas';
  document.body.appendChild(canvas);

  /* Tooltip */
  tooltip = document.createElement('div');
  tooltip.id = 'tour-tooltip';
  document.body.appendChild(tooltip);

  /* Start button in demo nav */
  var demoInner = document.querySelector('.demo-nav-inner');
  if (demoInner) {
    var startBtn = document.createElement('button');
    startBtn.id = 'tour-start-btn';
    startBtn.textContent = '✦ Tour';
    startBtn.addEventListener('click', startTour);
    demoInner.insertBefore(startBtn, demoInner.querySelector('.demo-nav-close'));
  }

  function startTour() {
    current = 0;
    active = true;
    canvas.style.display = 'block';
    showStep();
  }

  function showStep() {
    var step = steps[current];
    var el = document.querySelector(step.sel);

    /* If element not visible (in a hidden view), skip to next */
    if (!el || el.offsetParent === null) {
      if (current < steps.length - 1) { current++; showStep(); } else { endTour(); }
      return;
    }

    /* Scroll element into view */
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(function () {
      drawOverlay(el);
      positionTooltip(el, step);
    }, 350);
  }

  function drawOverlay(el) {
    var W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    ctx = canvas.getContext('2d');

    var r = el.getBoundingClientRect();
    var pad = 10, rad = 12;
    var x = r.left - pad, y = r.top - pad;
    var w = r.width + pad * 2, h = r.height + pad * 2;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(0,0,0,.78)';
    ctx.fillRect(0, 0, W, H);

    /* Cut spotlight hole */
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, rad);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    /* Glow ring */
    ctx.strokeStyle = 'rgba(201,168,76,.55)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, rad);
    ctx.stroke();
  }

  function positionTooltip(el, step) {
    var r = el.getBoundingClientRect();
    var TW = 320, TH = 220;
    var pad = 16;

    tooltip.innerHTML = buildTooltipHTML(step);
    tooltip.style.display = 'block';

    var left, top;

    if (step.pos === 'right') {
      left = Math.min(r.right + pad, window.innerWidth - TW - 8);
      top  = Math.max(8, Math.min(r.top, window.innerHeight - TH - 8));
    } else if (step.pos === 'bottom') {
      left = Math.max(8, Math.min(r.left, window.innerWidth - TW - 8));
      top  = r.bottom + pad;
      if (top + TH > window.innerHeight - 60) top = r.top - TH - pad;
    } else {
      left = Math.max(8, Math.min(r.left, window.innerWidth - TW - 8));
      top  = r.top - TH - pad;
      if (top < 8) top = r.bottom + pad;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top  = top  + 'px';

    /* Wire up buttons */
    tooltip.querySelector('.tt-btn-next').addEventListener('click', nextStep);
    var prev = tooltip.querySelector('.tt-btn-prev');
    if (prev) prev.addEventListener('click', prevStep);
    tooltip.querySelector('.tt-btn-skip').addEventListener('click', endTour);
  }

  function buildTooltipHTML(step) {
    var dots = steps.map(function(_, i) {
      return '<div class="tt-dot' + (i <= current ? ' done' : '') + '"></div>';
    }).join('');

    var isLast = current === steps.length - 1;
    var prevBtn = current > 0 ? '<button class="tt-btn tt-btn-prev">← Back</button>' : '';
    var nextLabel = isLast ? '🎉 Done' : 'Next →';

    return (
      '<div class="tt-step">Step ' + (current + 1) + ' of ' + steps.length + '</div>' +
      '<div class="tt-title">' + step.title + '</div>' +
      '<div class="tt-desc">' + step.desc + '</div>' +
      '<div class="tt-progress">' + dots + '</div>' +
      '<div class="tt-controls">' +
        prevBtn +
        '<button class="tt-btn tt-btn-next">' + nextLabel + '</button>' +
        '<button class="tt-btn-skip">Skip tour</button>' +
      '</div>'
    );
  }

  function nextStep() {
    if (current < steps.length - 1) { current++; showStep(); } else { endTour(); }
  }

  function prevStep() {
    if (current > 0) { current--; showStep(); }
  }

  function endTour() {
    active = false;
    canvas.style.display = 'none';
    tooltip.style.display = 'none';
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && active) endTour();
  });

  /* Resize: redraw */
  window.addEventListener('resize', function () {
    if (active) {
      var step = steps[current];
      var el = document.querySelector(step.sel);
      if (el) drawOverlay(el);
    }
  });

}());
