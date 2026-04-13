(function () {
  var sw = document.getElementById('cvResumeModeSwitch');
  if (!sw) return;

  var STORAGE_KEY = 'cvResumeView';
  var industryPanels = document.querySelectorAll('.resume-panel--industry');
  var academicPanels = document.querySelectorAll('.resume-panel--academic');
  var industryPdf = document.querySelectorAll('.cv-pdf-group--industry');
  var academicPdf = document.querySelectorAll('.cv-pdf-group--academic');

  function apply() {
    var academic = sw.checked;
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
    try {
      localStorage.setItem(STORAGE_KEY, academic ? 'academic' : 'industry');
    } catch (e) {}
  }

  sw.addEventListener('change', apply);

  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'academic') sw.checked = true;
  } catch (e) {}

  apply();
})();
