(function () {
  'use strict';
  var sw = document.getElementById('cvResumeModeSwitch');
  if (!sw) return;

  var STORAGE_KEY = 'cvResumeView';
  var PARAM = 'view';
  var industryPanels = document.querySelectorAll('.resume-panel--industry');
  var academicPanels = document.querySelectorAll('.resume-panel--academic');
  var industryPdf = document.querySelectorAll('.cv-pdf-group--industry');
  var academicPdf = document.querySelectorAll('.cv-pdf-group--academic');

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

  function applyPanels(academic) {
    sw.checked = academic;
    industryPanels.forEach(function (el) {
      el.classList.toggle('d-none', academic);
    });
    academicPanels.forEach(function (el) {
      el.classList.toggle('d-none', !academic);
    });
    industryPdf.forEach(function (el) {
      el.classList.toggle('d-none', academic);
    });
    academicPdf.forEach(function (el) {
      el.classList.toggle('d-none', !academic);
    });
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

  function init() {
    var academic = resolveInitialAcademic();
    applyPanels(academic);
    persistStorage(academic);

    // Hash implies industry vs academic but URL has no ?view= — add it so the link is shareable as-is
    if (getParamView() === null && inferViewFromHash() !== null) {
      setQueryParam(academic);
    }

    scrollToHash();
  }

  sw.addEventListener('change', function () {
    var academic = sw.checked;
    applyPanels(academic);
    persistStorage(academic);
    // Dropping the hash avoids carrying a section anchor from the other resume’s IDs.
    setQueryParam(academic, true);
  });

  window.addEventListener('popstate', function () {
    var academic = resolveInitialAcademic();
    applyPanels(academic);
    persistStorage(academic);
    scrollToHash();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
