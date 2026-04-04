---
layout: page
title: Brand Compass
description: LLM-guided narrative generation for a hierarchical brand health scorecard
importance: 1
img: assets/img/bc2.png
category: work
permalink: /projects/brand-compass/
---

<p style="margin-top: -10px; margin-bottom: 20px;">
  <a href="/projects/" style="text-decoration: none; font-size: 14px;">← Back to projects</a>
</p>

Brand Compass is an **AI-assisted narrative layer** built on top of a hierarchical brand health scorecard that evaluates a client’s position within its market and competitive landscape.

The underlying scorecard was created using structured industry, client, and competitor data sources, with weighted sections spanning **Market Snapshot, Mental Availability, Physical Availability, and Perception**. Within each section, the dashboard presents charts, tables, and scores derived from multiple datasets and benchmarks.

My contribution focused on designing how LLMs interpret that scorecard and the supporting raw data to generate **cohesive, decision-ready summaries** throughout the dashboard.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/brand-scorecard.png" title="Brand Compass Scorecard" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Example of the Brand Compass interface, where structured scorecard sections and AI-generated insights work together to tell a cohesive brand story.
</div>

---

<h2 style="color: #b85f29; margin-top: 40px;">What I Built</h2>

I designed the prompt architecture and reasoning strategy that enabled the LLM to turn structured scorecard outputs into clear, client-facing narratives.

This included:

- **Prompt frameworks** using **ReAct, few-shot, and chain-of-thought reasoning**
- Guidance for interpreting both **section-level scores** and **chart-level supporting visuals**
- Logic for generating summaries that reflect the **hierarchical weighting and structure** of the scorecard
- Prompt constraints to encourage **coherent storytelling across the full dashboard**, so individual insights reinforced rather than contradicted one another

---

<h2 style="color: #b85f29; margin-top: 40px;">System Context</h2>

The scorecard integrates multiple data sources across brand, competitive, and market analysis, including survey, media, sentiment, and advertising datasets.

These inputs are organized into four primary sections:

- **Market Snapshot**
- **Mental Availability**
- **Physical Availability**
- **Perception**

Each section contains its own metrics, visuals, and weighted score, and the LLM-generated summaries must interpret those signals in context while maintaining consistency with the broader brand story.

---

<h2 style="color: #b85f29; margin-top: 40px;">My Contribution</h2>

I did **not** create the underlying weighted score calculations or the mathematical framework behind the brand health model.

My role was to design the **LLM integration layer** that translated those structured outputs into useful written insights.

More specifically, I:

- Positioned prompts to interpret scorecard data and raw supporting data together
- Designed prompt patterns that guided the model toward **summary generation rather than unsupported freeform analysis**
- Structured the system so the model could generate insights for both **individual charts** and **higher-level section summaries**
- Focused on maintaining a **cohesive narrative across the dashboard**, ensuring multiple generated insights aligned into a unified brand story

This work sat at the intersection of **prompt engineering, applied AI, and decision-support UX**.

---

<h2 style="color: #b85f29; margin-top: 40px;">Technical Focus</h2>

This project reflects my interest in building AI systems that sit on top of structured analytical frameworks rather than replacing them.

It combines:

- LLM prompt design
- narrative consistency across multi-panel dashboards
- hierarchical interpretation of weighted business metrics
- applied AI for decision-support systems

---

<h2 style="color: #b85f29; margin-top: 40px;">Outcome</h2>

Brand Compass explored how LLMs can enhance strategic analytics interfaces by turning structured scorecard outputs into more interpretable narratives.

The project helped demonstrate both the promise and the limitations of using LLMs in this setting, especially when the goal is not just to summarize one metric, but to tell a **coherent story across an entire analytical dashboard**.
