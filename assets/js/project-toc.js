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

  Array.prototype.forEach.call(headings, function (h2) {
    if (!h2.id) {
      h2.id = uniqueId(h2.textContent || 'section');
    }
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h2.id;
    a.textContent = h2.textContent.trim();
    li.appendChild(a);
    ul.appendChild(li);
  });

  tocNav.appendChild(ul);
})();
