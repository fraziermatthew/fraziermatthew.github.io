---
layout: page
permalink: /publications/
title: publications
heading: Publications
description: >
  Research informing the design of production AI systems grounded in structured reasoning and human-centered interaction, with publications at ICSE and ITiCSE.
nav: true
nav_order: 1
page_class: section-page
---
<!-- <div style="text-align: right"> <small>*equal contribution</small> </div> -->
<!-- _pages/publications.md -->
<div class="publications">

  <h2 class="category">Dissertation</h2>
  {% bibliography -f papers -q @phdthesis %}

  <h2 class="category">Conference Articles</h2>
  {% bibliography -f papers -q @inproceedings %}

</div>

<p class="mt-4 mb-0">This work informs my approach to designing production AI systems grounded in structured reasoning and human-centered interaction.</p>
