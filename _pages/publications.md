---
layout: page
permalink: /publications/
title: publications
heading: Publications
description: >
  Research informing the design of production AI systems grounded in structured reasoning and human-centered interaction, with publications at ICSE and ITiCSE.
years: [2024, 2022]
nav: true
nav_order: 1
page_class: section-page
---
<div style="text-align: right"> <small>*equal contribution</small> </div>
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<p class="mt-4 mb-0">This work informs my approach to designing production AI systems grounded in structured reasoning and human-centered interaction.</p>
