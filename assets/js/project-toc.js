/**
 * Project detail pages: build sticky TOC from article h2 headings (see _layouts/page.html).
 *
 * Active section = last h2 whose top edge has crossed a virtual reading line (below the nav,
 * ~nav+32px vs ~22–28% viewport). At document bottom, the last h2 is forced active so the final
 * section can highlight even when that heading never reaches the line.
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

  /**
   * Y-position (px) from the top of the viewport for the virtual reading line.
   * Not visible — used only to decide which heading has “arrived” at the reading zone.
   */
  function getReadingLinePx() {
    var nav = document.querySelector('.navbar');
    var navH = nav ? nav.offsetHeight : 56;
    var vh = window.innerHeight;
    if (vh <= 0) return navH + 32;
    // At least below the sticky nav (+ comfortable padding); on tall viewports align ~22–28% from top.
    var line = Math.max(navH + 32, vh * 0.25);
    // Keep the line in a natural band (roughly upper quarter of the viewport, not the middle).
    return Math.min(line, vh * 0.3);
  }

  function isScrolledToDocumentEnd() {
    var docEl = document.documentElement;
    var body = document.body;
    var scrollHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      docEl.clientHeight,
      docEl.scrollHeight,
      docEl.offsetHeight
    );
    var scrollY = window.scrollY || window.pageYOffset;
    var epsilon = 16;
    return scrollY + window.innerHeight >= scrollHeight - epsilon;
  }

  var spyTicking = false;
  function updateScrollSpy() {
    spyTicking = false;
    var line = getReadingLinePx();
    var active = headings[0];
    var n = headings.length;

    if (n > 0 && isScrolledToDocumentEnd()) {
      active = headings[n - 1];
    } else {
      for (var i = 0; i < n; i++) {
        var el = headings[i];
        if (el.getBoundingClientRect().top <= line) {
          active = el;
        }
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
