/* ANNAPOORNA x ACTIVE THEORY — shared experience core
   Loader, cursor, magnetic pills, marquee, counters, page wipe. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isHome = document.body.classList.contains('at-home');

  document.addEventListener('DOMContentLoaded', function () {
    initLoader();
    initCursor();
    initMagnetic();
    initMarquee();
    initCounters();
    initPageWipe();
  });

  /* ---------- preloader ---------- */
  function initLoader() {
    var loader = document.getElementById('at-loader');
    var bar = document.getElementById('at-loader-bar');
    if (!loader) return;
    if (reduceMotion) { loader.classList.add('done'); return; }
    var progress = 0;
    var max = isHome ? 92 : 70;
    var tick = setInterval(function () {
      progress = Math.min(progress + Math.random() * 30, max);
      if (bar) bar.style.width = progress + '%';
    }, 90);
    window.addEventListener('load', finish);
    setTimeout(finish, isHome ? 2400 : 600);
    var done = false;
    function finish() {
      if (done) return;
      done = true;
      clearInterval(tick);
      if (bar) bar.style.width = '100%';
      setTimeout(function () { loader.classList.add('done'); }, 200);
    }
  }

  /* ---------- custom cursor ---------- */
  function initCursor() {
    var dot = document.getElementById('at-cursor');
    if (!dot) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    var x = -100, y = -100, cx = -100, cy = -100;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
    });
    (function follow() {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      dot.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      requestAnimationFrame(follow);
    })();
    var hov = document.querySelectorAll('a[data-cursor], .at-pill, .at-row, .at-cap, .at-pr, .at-venue, .at-step');
    for (var i = 0; i < hov.length; i++) {
      (function (el) {
        el.addEventListener('mouseenter', function () { dot.classList.add('big'); });
        el.addEventListener('mouseleave', function () { dot.classList.remove('big'); });
      })(hov[i]);
    }
    var labeled = document.querySelectorAll('[data-cursor-label]');
    var label = dot.querySelector('.at-cursor-label');
    for (var j = 0; j < labeled.length; j++) {
      (function (el) {
        el.addEventListener('mouseenter', function () {
          if (label) label.textContent = el.getAttribute('data-cursor-label');
        });
      })(labeled[j]);
    }
  }

  /* ---------- magnetic pills ---------- */
  function initMagnetic() {
    if (reduceMotion) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    var els = document.querySelectorAll('.magnetic');
    for (var i = 0; i < els.length; i++) {
      (function (el) {
        el.addEventListener('mousemove', function (e) {
          var r = el.getBoundingClientRect();
          var x = e.clientX - r.left - r.width / 2;
          var y = e.clientY - r.top - r.height / 2;
          el.style.transform = 'translate(' + x * 0.18 + 'px,' + y * 0.28 + 'px)';
        });
        el.addEventListener('mouseleave', function () {
          el.style.transform = 'translate(0,0)';
        });
      })(els[i]);
    }
  }

  /* ---------- marquee: duplicate for seamless loop ---------- */
  function initMarquee() {
    var track = document.getElementById('at-marquee-track');
    if (!track) return;
    if (track.getAttribute('data-dup') === '1') return;
    track.setAttribute('data-dup', '1');
    track.innerHTML += track.innerHTML;
  }

  /* ---------- animated counters ---------- */
  function initCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < nums.length; i++) {
        nums[i].textContent = nums[i].getAttribute('data-count');
      }
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (!entries[j].isIntersecting) continue;
        (function (el) {
          io.unobserve(el);
          var target = parseInt(el.getAttribute('data-count'), 10) || 0;
          var t0 = null, dur = 1200;
          function step(t) {
            if (!t0) t0 = t;
            var k = Math.min((t - t0) / dur, 1);
            var eased = 1 - Math.pow(1 - k, 3);
            el.textContent = String(Math.round(target * eased));
            if (k < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        })(entries[j].target);
      }
    }, { threshold: 0.4 });
    for (var k = 0; k < nums.length; k++) { io.observe(nums[k]); }
  }

  /* ---------- red page wipe on internal navigation ---------- */
  function initPageWipe() {
    if (reduceMotion) return;
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      var a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      var url;
      try { url = new URL(a.href, window.location.href); } catch (err) { return; }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      e.preventDefault();
      var wipe = document.querySelector('.at-wipe') || document.createElement('div');
      wipe.className = 'at-wipe';
      if (!wipe.parentNode) document.body.appendChild(wipe);
      void wipe.offsetWidth;
      wipe.classList.remove('out');
      wipe.classList.add('in');
      setTimeout(function () {
        window.location.href = url.href;
      }, 430);
    });
    var prev = document.querySelector('.at-wipe');
    if (prev) {
      prev.classList.remove('in');
      prev.classList.add('out');
    }
  }
})();
