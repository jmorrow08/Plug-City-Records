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
      { sel: '#hero',         pos: 'bottom', title: '🎵 Welcome to Plug City Records',    desc: 'The official platform for Murkemz and Plug City Records — built to turn fan energy into real revenue. This hero section is the first thing visitors see.' },
      { sel: '#phx',          pos: 'bottom', title: '📡 PHX is Climbing',                desc: 'The song PHX is gaining traction across all platforms. This live counter updates as new streams come in — social proof that builds credibility.' },
      { sel: '#music',        pos: 'top',    title: '🎶 The Catalog',                    desc: 'Six-track player with the full Plug City roster. Fans can stream right here without leaving the site — removing the barrier between discovery and fandom.' },
      { sel: '#platform',     pos: 'top',    title: '💡 Why Build a Platform?',          desc: 'Streaming platforms keep 70% of fan dollars. Plug City is built to reverse that — keeping revenue inside the ecosystem and in artists\' pockets.' },
      { sel: '#plans',        pos: 'top',    title: '🎟️ Murk Pass Tiers',               desc: 'Three fan subscription tiers: Explorer ($4), Murk Mode ($12), Ayatollah ($29). Each unlocks more exclusive content, perks, and direct access to Murkemz.' },
      { sel: '#plat-preview', pos: 'top',    title: '📱 Platform Preview — Interactive', desc: 'Toggle between Fan App, Artist View, and Label Admin to see exactly what each user type experiences on the platform.' },
      { sel: '#radio',        pos: 'top',    title: '📻 Murk Radio',                    desc: 'Artist-owned. Algorithm-free. Fans stream Murkemz and the full Plug City roster directly — no Spotify middleman, no skips, no ads.' },
      { sel: '#artists',      pos: 'top',    title: '🎤 The Roster',                    desc: 'Artists on Plug City Records are featured with links to their individual artist pages. Each artist gets their own fan pass and revenue stream.' },
      { sel: '#store',        pos: 'top',    title: '👕 Merch Integration',              desc: 'Direct link to murkmerch.com product catalog. Items live here on the platform so fans shop without leaving the experience.' },
      { sel: '#calculator',   pos: 'top',    title: '💰 Revenue Calculator',             desc: 'Interactive slider shows Murkemz and Bryce exactly what monthly revenue looks like at different subscriber counts. Great for investor conversations.' },
      { sel: 'footer',        pos: 'top',    title: '✅ Full Ecosystem',                 desc: 'From landing page through subscription, merch, and events — every dollar stays inside the Plug City ecosystem. This is what independence looks like.' },
    ],

    /* ─── FAN APP DASHBOARD ────────────────────────────────────── */
    'app.html': [
      { sel: '.sidebar',        pos: 'right',  title: '🏠 Navigation Sidebar',          desc: 'Your Plug City command center: Home, Murk Radio, Discover, Community, AI Murk, Collectibles, Shoutouts, Fan Ownership, My Pass, Events, and Profile. Everything in one place.' },
      { sel: '.user-chip',      pos: 'right',  title: '🎟️ Your Murk Pass',             desc: 'This chip shows your current tier and your name. Tap it to jump straight to your profile. It follows you on every screen inside the app.' },
      { sel: '.topbar',         pos: 'bottom', title: '📍 Current View Header',         desc: 'The topbar always shows where you are in the app and gives quick access to notifications. The Plug City pulse is always at the top.' },
      { sel: '#view-home',      view: 'home',       pos: 'right', title: '🏙️ Home Feed',                  desc: 'KPI cards show your activity this month: streams, events attended, perks redeemed, and your streak. Below is the live Plug City community feed.' },
      { sel: '#view-radio',     view: 'radio',      pos: 'right', title: '📻 Murk Radio',                 desc: 'Stream the full Plug City catalog — PHX, Against All Odds, Hadouken RMX, and every release. Insider tier unlocks exclusive tracks and drop previews before anyone else.' },
      { sel: '.mini-player',    pos: 'top',          title: '🎧 Persistent Mini Player',   desc: 'Music keeps playing as you navigate. The mini player stays pinned at the bottom — artwork, track name, controls, and progress bar always visible.' },
      { sel: '#view-events',    view: 'events',     pos: 'right', title: '📅 Events Feed',                desc: 'Every Plug City and Phoenix event in one feed — venues, dates, ticket links. Pass holders get early access windows on select shows.' },
      { sel: '#view-community', view: 'community',  pos: 'right', title: '💬 Fan Community',              desc: 'Direct connection between fans and the Plug City team. Post, react, and engage with other Murk Pass holders. This is the inner circle.' },
      { sel: '#view-ai-murk',   view: 'ai-murk',    pos: 'right', title: '🤖 AI Murk — VIP Feature',     desc: 'An AI trained on Murkemz\'s voice and style. Insider tier members can chat with AI Murk for advice, content ideas, and behind-the-scenes knowledge.' },
      { sel: '#view-shoutouts', view: 'shoutouts',  pos: 'right', title: '🎤 Shoutout Orders',            desc: 'Request a personalized shoutout from Murkemz. Set the occasion, add a message, and Murkemz records it personally. Insider tier members get priority.' },
      { sel: '#view-discover',  view: 'discover',   pos: 'right', title: '🔍 Discover',                   desc: 'New drops, featured artists, trending tracks, and recent additions to the platform. Your gateway into the full Plug City ecosystem.' },
      { sel: '#view-pass',      view: 'pass',       pos: 'right', title: '💳 My Murk Pass',               desc: 'Your digital membership card. Shows your current tier, perks unlocked, and subscription status. Add to Apple Wallet or Google Wallet for easy tap-and-show.' },
      { sel: '#view-profile',   view: 'profile',    pos: 'right', title: '👤 Profile + Activity',         desc: 'Your member profile, streaming history, and a bar chart showing your monthly platform activity. See how deep you are in the Plug City ecosystem.' },
    ],

    /* ─── ARTIST DASHBOARD ─────────────────────────────────────── */
    'artist.html': [
      { sel: '.sidebar',        pos: 'right',  title: '🎤 Artist Command Center',        desc: 'The artist dashboard gives Murkemz and any signed artist full visibility into their platform performance. Overview, upload, releases, fans, passes, analytics, revenue, beats, shoutouts, and label portal.' },
      { sel: '.artist-chip',    pos: 'right',  title: '✅ Verified Artist Chip',         desc: 'Shows the artist\'s name and verification badge. Murkemz is marked as Label Owner which gives admin-level permissions on top of the standard artist view.' },
      { sel: '#view-overview',  view: 'overview',   pos: 'right', title: '📊 Revenue Overview',           desc: 'The top KPI row shows total subscribers, monthly revenue, streams, and retention rate — the four numbers that tell you if the platform is working.' },
      { sel: '#view-upload',    view: 'upload',     pos: 'right', title: '🎵 Upload & Release Music',      desc: 'Upload tracks directly to the platform. Set the title, artwork, tier access level (free, Explorer, Insider), and release date. Full control over your catalog.' },
      { sel: '#view-releases',  view: 'releases',   pos: 'right', title: '💿 My Releases',                desc: 'Every track in your catalog — play count, tier gate, and revenue attribution. See which songs drive the most subscriptions and which need a push.' },
      { sel: '#view-fans',      view: 'fans',       pos: 'right', title: '👥 Fan Database',               desc: 'Every subscriber with their tier, join date, and engagement score. Filter by tier or activity level. These are your real fans — own the relationship.' },
      { sel: '#view-passes',    view: 'passes',     pos: 'right', title: '💳 Manage Fan Passes',          desc: 'Set the perks for each Murk Pass tier. Control exactly what Explorer, Murk Mode, and Ayatollah subscribers get — exclusive content, events, shoutouts.' },
      { sel: '#view-analytics', view: 'analytics',  pos: 'right', title: '📈 Deep Analytics',             desc: 'Stream counts by track, subscriber growth chart, and geographic distribution. Know exactly who\'s listening, where they are, and which content drives retention.' },
      { sel: '#view-revenue',   view: 'revenue',    pos: 'right', title: '💰 Revenue & Wallet',           desc: 'Every dollar earned, every payout issued. Gross revenue, platform fee (20%), and net to artist — fully transparent, no surprises. Payout history included.' },
      { sel: '#view-beats',     view: 'beats',      pos: 'right', title: '🎹 Beat Portal',               desc: 'License beats to other artists on the platform. Set exclusive vs non-exclusive pricing, track who\'s purchased, and collect beat revenue automatically.' },
      { sel: '#view-shoutouts', view: 'shoutouts',  pos: 'right', title: '🎤 Shoutout Order Queue',       desc: 'Incoming personalized shoutout requests from fans. Review each request, record your video, and deliver. Shoutouts are a high-margin direct-to-fan revenue stream.' },
      { sel: '#view-label-app', view: 'label-app',  pos: 'right', title: '🏷️ Label Portal',              desc: 'Communication channel between you and Plug City Records management. Contracts, revenue splits, announcements, and A&R decisions — all in one place.' },
    ],

    /* ─── LABEL ADMIN DASHBOARD ────────────────────────────────── */
    'admin.html': [
      { sel: '.sidebar',        pos: 'right',  title: '⚙️ Label Operations Center',     desc: 'The admin dashboard gives Murkemz and Bryce full control over the entire Plug City platform — revenue, artists, content, campaigns, fan data, and platform settings.' },
      { sel: '.topbar',         pos: 'bottom', title: '🖥️ Admin Topbar',               desc: 'Current view title and quick-action buttons. From here Murkemz and Bryce can schedule drops, launch campaigns, or review A&R submissions in seconds.' },
      { sel: '#view-command',   view: 'command',    pos: 'right', title: '🖥️ Command Center',             desc: 'Live KPI cards, a revenue bar chart, and a real-time alert feed. This is the full platform heartbeat — everything that\'s happening right now.' },
      { sel: '#view-revenue',   view: 'revenue',    pos: 'right', title: '💰 Revenue OS',                 desc: 'The full P&L table for every revenue stream — subscriptions, merch, events, shoutouts, licensing. Each row shows gross, fee, and net to the label.' },
      { sel: '#view-social',    view: 'social',     pos: 'right', title: '📡 Social Analytics',           desc: 'Track platform-wide social performance. See which content is driving the most profile visits, subscription conversions, and follower growth across channels.' },
      { sel: '#view-release',   view: 'release',    pos: 'right', title: '🗓️ Release Manager',           desc: 'Schedule upcoming drops, coordinate release dates across distribution channels, and plan marketing pushes. Every release gets a campaign timeline.' },
      { sel: '#view-roster',    view: 'roster',     pos: 'right', title: '🎤 Artist Roster',              desc: 'Every artist on the platform: their subscriber count, monthly revenue, catalog size, and contract status. The full roster at a glance.' },
      { sel: '#view-fans-db',   view: 'fans-db',    pos: 'right', title: '👥 Fan Database',               desc: 'Every subscriber across all artists — tier breakdown, join date, geographic distribution. Export to CSV for targeted campaigns.' },
      { sel: '#view-anr',       view: 'anr',        pos: 'right', title: '🔍 A&R Pipeline',               desc: 'Five incoming artist applications flagged for review. Listen to tracks, view their social metrics, and approve or decline for the Plug City roster.' },
      { sel: '#view-campaigns', view: 'campaigns',  pos: 'right', title: '📢 Marketing Campaigns',        desc: 'Active email and push notification campaigns. Track open rates, click-throughs, and conversions. Two campaigns are live — monitoring in real time.' },
      { sel: '#view-push',      view: 'push',       pos: 'right', title: '📲 Push Notifications',         desc: 'Send targeted push blasts to all members or filter by tier. 84% average open rate. Use for new drops, events, exclusive access windows, and merch launches.' },
      { sel: '#view-reports',   view: 'reports',    pos: 'right', title: '📋 P&L Reports + Projections',  desc: 'Monthly P&L summary and a 12-month projection chart showing conservative vs optimistic revenue scenarios. This is what you show investors.' },
      { sel: '#view-settings',  view: 'settings',   pos: 'right', title: '⚙️ Platform Settings',         desc: 'Global controls: platform fee rate, tier pricing, notification preferences, and API integrations. Full control over how the Plug City platform operates.' },
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
    '#tour-canvas{position:fixed;inset:0;z-index:99970;pointer-events:none;display:none}',
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
    var step, el;

    /* Iteratively skip steps whose element doesn't exist in the DOM */
    while (current < steps.length) {
      step = steps[current];
      el = document.querySelector(step.sel);
      if (el) break;
      current++;
    }
    if (current >= steps.length) { endTour(); return; }

    /* Activate the containing view if specified */
    if (step.view && typeof window.showView === 'function') {
      window.showView(step.view);
    }

    /* Wait for DOM to update after view activation, then check real visibility */
    setTimeout(function () {
      var rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        /* Still hidden even after activation — skip this step */
        current++;
        showStep();
        return;
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(function () {
        drawOverlay(el);
        positionTooltip(el, step);
      }, 300);
    }, 120);
  }

  /* Cross-browser rounded rect (replaces ctx.roundRect which is Chrome 99+ only) */
  function drawRoundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.arcTo(x + w, y,     x + w, y + r,     r);
    c.lineTo(x + w, y + h - r);
    c.arcTo(x + w, y + h, x + w - r, y + h, r);
    c.lineTo(x + r, y + h);
    c.arcTo(x,     y + h, x,     y + h - r, r);
    c.lineTo(x,     y + r);
    c.arcTo(x,     y,     x + r, y,         r);
    c.closePath();
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
    drawRoundRect(ctx, x, y, w, h, rad);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    /* Glow ring */
    ctx.strokeStyle = 'rgba(201,168,76,.55)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, x, y, w, h, rad);
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
