---
layout: page
title: "Brand Compass - LLM Reasoning Layer for Analytics"
description: LLM-driven reasoning layer for generating consistent, decision-ready narratives from a hierarchical brand health scorecard
importance: 1
img: assets/img/bc2.png
category: work
permalink: /projects/work/brand-compass/
---

<p style="margin-top: -10px; margin-bottom: 20px;">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

Brand Compass is a **production-facing LLM integration layer** that generates structured, decision-ready narratives from a hierarchical brand health scorecard.

The system sits on top of a multi-source analytics pipeline combining industry, client, and competitive data, organized into weighted sections spanning **Market Snapshot, Mental Availability, Physical Availability, and Perception**.

I designed and implemented the **LLM reasoning layer** that translates these structured signals into **cohesive, cross-sectional narratives**, enabling clients to interpret complex performance data as a unified story rather than disconnected metrics.
<!-- Brand Compass is an **AI-assisted narrative layer** built on top of a hierarchical brand health scorecard that evaluates a client’s position within its market and competitive landscape.

The underlying scorecard was created using structured industry, client, and competitor data sources, with weighted sections spanning **Market Snapshot, Mental Availability, Physical Availability, and Perception**. Within each section, the dashboard presents charts, tables, and scores derived from multiple datasets and benchmarks.

My contribution focused on designing how LLMs interpret that scorecard and the supporting raw data to generate **cohesive, decision-ready summaries** throughout the dashboard. -->

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

I built the **LLM-driven reasoning layer** that converts structured scorecard outputs into cohesive, decision-ready narratives.

This included:

- Designing **prompt architectures** (ReAct, few-shot, chain-of-thought) to guide structured interpretation rather than freeform generation
- Implementing logic to align **chart-level signals with section-level and global summaries**
- Enforcing **hierarchical consistency**, ensuring insights reflect score weighting and relationships across the full dashboard
- Constraining model behavior toward **grounded summarization**, preventing unsupported inference from raw metrics
- Structuring outputs so independently generated insights **reinforce a unified narrative**, rather than behaving as isolated summaries

This system transforms the LLM from a text generator into a **controlled reasoning component operating over structured analytical data**.

---

<h2 style="color: #b85f29; margin-top: 40px;">System Design</h2>

The system operates as a structured interpretation layer on top of a multi-source analytical framework.

- **Input** → scorecard data composed of metrics, benchmarks, and weighted section scores
- **Processing** → LLM-guided reasoning constrained by hierarchical relationships and prompt structure
- **Output** → aligned narrative summaries across charts, sections, and the full dashboard

A key design requirement was maintaining **consistency across multiple levels of abstraction**.

To achieve this, the system:

- Interprets **raw metrics and derived scores together**, rather than independently
- Generates insights at both **local (chart)** and **global (section)** levels
- Enforces **cross-sectional alignment**, ensuring outputs do not contradict one another

Unlike generic summarization systems, this architecture treats the LLM as part of a **deterministic analytical workflow**, where structure, constraints, and input design govern output quality.

<!-- ---

<h2 style="color: #b85f29; margin-top: 40px;">LLM Integration Layer</h2>

The core challenge was not generating text, but ensuring that generated insights remained **faithful to structured data and consistent across multiple levels of abstraction**.

I designed the system to:

- Interpret **raw metrics and derived scores together**, rather than independently
- Generate insights at both **local (chart)** and **global (section)** levels
- Maintain **narrative alignment across the full dashboard**, preventing contradictions between outputs

This transforms the LLM from a generative tool into a **controlled reasoning component within a larger analytical system**. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">Technical Focus</h2>

This system combines:

- Structured LLM reasoning over multi-source analytical data
- Hierarchical interpretation of weighted business metrics across multiple levels of abstraction
- Cross-panel narrative alignment in multi-view analytical dashboards
- Prompt-constrained generation for consistent, decision-ready outputs

It reflects a focus on **controlled reasoning over structured data**, where LLMs operate as interpretation layers within analytical systems rather than standalone generators.

---

<h2 style="color: #b85f29; margin-top: 40px;">Outcome</h2>

Brand Compass demonstrated both the potential and limitations of integrating LLMs into structured analytics workflows.

While the system successfully generated **cohesive, decision-ready narratives**, it also exposed key challenges in controlling numerical reasoning and maintaining strict alignment with underlying data.

This work informed later designs that prioritize **structured inputs, constrained reasoning, and verifiable outputs** for production-grade AI systems.

<!-- <h2 style="color: #b85f29; margin-top: 40px;">What I Built</h2>

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

The project helped demonstrate both the promise and the limitations of using LLMs in this setting, especially when the goal is not just to summarize one metric, but to tell a **coherent story across an entire analytical dashboard**. -->
