/**
 * Project detail pages: build sticky TOC from article h2 headings (see _layouts/page.html).
 */
(function () {
  var root = document.querySelector('.post.project-detail');
  if (!root) return;

  var article = root.querySelector('#project-detail-article');
  var tocNav = document.querySelector('#project-detail-toc .project-detail-toc__nav');
  var aside = document.getElementById('project-detail-toc');
  if (!article || !tocNav || !aside) return;

  var headings = article.querySelectorAll('h2');
  if (headings.length === 0) {
    aside.setAttribute('hidden', '');
    return;
  }

  function uniqueId(label) {
    var s = label
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u0080-\uFFFF]+/gi, '-')
      .replace(/^-|-$/g, '');
    if (!s) s = 'section';
    var base = s;
    var id = base;
    var n = 0;
    while (document.getElementById(id)) {
      id = base + '-' + ++n;
    }
    return id;
  }

  var ul = document.createElement('ul');
  ul.className = 'project-detail-toc__list';

  var linksById = {};

  Array.prototype.forEach.call(headings, function (h2) {
    if (!h2.id) {
      h2.id = uniqueId(h2.textContent || 'section');
    }
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h2.id;
    a.textContent = h2.textContent.trim();
    linksById[h2.id] = a;
    li.appendChild(a);
    ul.appendChild(li);
  });

  tocNav.appendChild(ul);

  function scrollSpyThresholdPx() {
    var nav = document.querySelector('.navbar');
    var h = nav ? nav.offsetHeight : 56;
    return h + 16;
  }

  var spyTicking = false;
  function updateScrollSpy() {
    spyTicking = false;
    var threshold = scrollSpyThresholdPx();
    var active = headings[0];
    for (var i = 0; i < headings.length; i++) {
      var el = headings[i];
      if (el.getBoundingClientRect().top <= threshold) {
        active = el;
      }
    }
    var activeId = active.id;
    Object.keys(linksById).forEach(function (id) {
      var link = linksById[id];
      if (id === activeId) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'location');
      } else {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      }
    });
  }

  function requestScrollSpy() {
    if (!spyTicking) {
      spyTicking = true;
      requestAnimationFrame(updateScrollSpy);
    }
  }

  window.addEventListener('scroll', requestScrollSpy, { passive: true });
  window.addEventListener('resize', requestScrollSpy, { passive: true });
  updateScrollSpy();
})();
