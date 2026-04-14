---
layout: page
permalink: /publications2/
title: publications
heading: Publications
description: >
  Research informing the design of production AI systems grounded in structured reasoning and human-centered interaction, with publications at ICSE and ITiCSE.
nav: false
nav_order: 99
page_class: section-page
---

<div class="publications publications--aligned-cards">

  <h2 class="category">Dissertation</h2>
  {% bibliography -f papers -q @phdthesis %}

  <h2 class="category">Conference Articles</h2>
  {% bibliography -f papers -q @inproceedings %}

</div>

<p class="mt-4 mb-0">This work informs my approach to designing production AI systems grounded in structured reasoning and human-centered interaction.</p>
