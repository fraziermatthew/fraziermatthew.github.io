(function () {
  'use strict';
  var sw = document.getElementById('cvResumeModeSwitch');
  if (!sw) return;

  var STORAGE_KEY = 'cvResumeView';
  var PARAM = 'view';
  var PANEL_MS = 220;
  // var PANEL_MS = 150;
  var industryPanels = document.querySelectorAll('.resume-panel--industry');
  var academicPanels = document.querySelectorAll('.resume-panel--academic');
  var industryPanel = industryPanels[0];
  var academicPanel = academicPanels[0];
  var industryPdf = document.querySelectorAll('.cv-pdf-group--industry');
  var academicPdf = document.querySelectorAll('.cv-pdf-group--academic');
  var switchGroup = document.querySelector('.cv-resume-switch-group');

  var busy = false;

  function getParamView() {
    var params = new URLSearchParams(window.location.search);
    var v = (params.get(PARAM) || '').toLowerCase();
    if (v === 'academic' || v === 'industry') return v;
    return null;
  }

  function inferViewFromHash() {
    var id = (window.location.hash || '').replace(/^#/, '');
    if (id.indexOf('cv-academic-') === 0) return 'academic';
    if (id.indexOf('cv-industry-') === 0) return 'industry';
    return null;
  }

  function setQueryParam(academic, stripHash) {
    var params = new URLSearchParams(window.location.search);
    params.set(PARAM, academic ? 'academic' : 'industry');
    var qs = params.toString();
    var hash = stripHash ? '' : window.location.hash || '';
    var newUrl = window.location.pathname + '?' + qs + hash;
    history.replaceState(null, '', newUrl);
  }

  function setPdfVisibility(academic) {
    industryPdf.forEach(function (el) {
      el.classList.toggle('d-none', academic);
    });
    academicPdf.forEach(function (el) {
      el.classList.toggle('d-none', !academic);
    });
  }

  /** Instant show/hide — init, popstate, reduced motion, or fallback */
  function applyPanelsInstant(academic) {
    sw.checked = academic;
    industryPanels.forEach(function (el) {
      el.classList.toggle('d-none', academic);
      el.classList.remove('resume-panel--exit', 'resume-panel--enter');
    });
    academicPanels.forEach(function (el) {
      el.classList.toggle('d-none', !academic);
      el.classList.remove('resume-panel--exit', 'resume-panel--enter');
    });
    setPdfVisibility(academic);
  }

  function prefersReducedMotion() {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      return false;
    }
  }

  function persistStorage(academic) {
    try {
      localStorage.setItem(STORAGE_KEY, academic ? 'academic' : 'industry');
    } catch (e) {}
  }

  function scrollToHash() {
    var hash = window.location.hash;
    if (!hash) return;
    var el = document.querySelector(hash);
    if (!el) return;
    window.requestAnimationFrame(function () {
      setTimeout(function () {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 30);
    });
  }

  function resolveInitialAcademic() {
    var fromParam = getParamView();
    if (fromParam !== null) {
      return fromParam === 'academic';
    }
    var fromHash = inferViewFromHash();
    if (fromHash !== null) {
      return fromHash === 'academic';
    }
    try {
      return localStorage.getItem(STORAGE_KEY) === 'academic';
    } catch (e) {
      return false;
    }
  }

  function syncUrlToView(academic, stripHash) {
    var canonical = academic ? 'academic' : 'industry';
    var current = getParamView();
    if (current !== canonical) {
      setQueryParam(academic, !!stripHash);
    }
  }

  function transitionPropOk(name) {
    return name === 'opacity' || name === 'transform';
  }

  function runPanelSwap(academic) {
    var outgoing = academic ? industryPanel : academicPanel;
    var incoming = academic ? academicPanel : industryPanel;
    if (!outgoing || !incoming) {
      applyPanelsInstant(academic);
      return;
    }

    busy = true;
    if (switchGroup) switchGroup.classList.add('cv-resume-switch-group--busy');

    outgoing.classList.add('resume-panel--exit');

    var outgoingComplete = false;

    function afterOutgoing() {
      if (outgoingComplete) return;
      outgoingComplete = true;
      outgoing.removeEventListener('transitionend', onOutgoingEnd);
      clearTimeout(outgoingFallback);

      outgoing.classList.add('d-none');
      outgoing.classList.remove('resume-panel--exit');

      setPdfVisibility(academic);

      incoming.classList.remove('d-none');
      incoming.classList.add('resume-panel--enter');
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          incoming.classList.remove('resume-panel--enter');
        });
      });

      var incomingDone = false;

      function release() {
        if (incomingDone) return;
        incomingDone = true;
        incoming.removeEventListener('transitionend', onIncomingEnd);
        clearTimeout(incomingFallback);
        busy = false;
        if (switchGroup) switchGroup.classList.remove('cv-resume-switch-group--busy');
      }

      function onIncomingEnd(e) {
        if (e.target !== incoming) return;
        if (!transitionPropOk(e.propertyName)) return;
        release();
      }

      var incomingFallback = setTimeout(release, PANEL_MS + 80);
      incoming.addEventListener('transitionend', onIncomingEnd);
    }

    function onOutgoingEnd(e) {
      if (e.target !== outgoing) return;
      if (!transitionPropOk(e.propertyName)) return;
      afterOutgoing();
    }

    var outgoingFallback = setTimeout(afterOutgoing, PANEL_MS + 80);
    outgoing.addEventListener('transitionend', onOutgoingEnd);
  }

  function init() {
    var academic = resolveInitialAcademic();
    applyPanelsInstant(academic);
    persistStorage(academic);

    syncUrlToView(academic, false);

    scrollToHash();
  }

  sw.addEventListener('change', function () {
    var academic = sw.checked;
    persistStorage(academic);
    setQueryParam(academic, true);

    if (prefersReducedMotion()) {
      applyPanelsInstant(academic);
      return;
    }

    if (busy) {
      sw.checked = !academic;
      return;
    }

    runPanelSwap(academic);
  });

  window.addEventListener('popstate', function () {
    var academic = resolveInitialAcademic();
    applyPanelsInstant(academic);
    persistStorage(academic);
    syncUrlToView(academic, false);
    scrollToHash();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
