---
layout: page
title: projects
permalink: /projects/
description: Selected systems and product work.
nav: true
nav_order: 2
---

A few representative projects spanning backend systems, full-stack delivery, data platforms, and applied AI.

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- project categories are optional -->
  {% endif %}
  {% assign sorted_projects = site.projects | sort: 'importance' | reverse %}
  {% for project in sorted_projects %}
    {% include projects_horizontal.liquid %}
  {% endfor %}
</div>
