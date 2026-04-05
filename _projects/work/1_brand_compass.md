---
layout: page
title: "Brand Compass — Structured LLM Reasoning System for Brand Intelligence"
description: Structured reasoning system that converts hierarchical brand analytics into consistent, decision-ready narratives
importance: 1
img: assets/img/bc2.png
category: work
permalink: /projects/work/brand-compass/
---

<p style="margin-top: -10px; margin-bottom: 20px;">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

This system converts hierarchical brand analytics into cohesive, decision-ready narratives using a constrained LLM reasoning layer.

Standard analytics dashboards expose fragmented metrics across multiple views, requiring manual interpretation to form a coherent understanding of brand performance. This system enforces structured reasoning over weighted scorecard data, aligning insights across market, mental availability, physical availability, and perception.

I designed and implemented the LLM reasoning layer that interprets structured analytical signals and generates consistent, cross-sectional narratives across the full dashboard.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/brand-scorecard.png" title="Brand Compass Scorecard" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Structured scorecard inputs and LLM-generated outputs operating as a unified analytical system.
</div>

The system operates on top of a multi-source analytics pipeline combining industry, client, and competitive data, organized into weighted sections spanning **Market Snapshot, Mental Availability, Physical Availability, and Perception**.

---

<h2 style="color: #b85f29; margin-top: 40px;">What I Built</h2>

I built the reasoning layer that converts structured scorecard outputs into aligned, decision-ready narratives across the full analytical hierarchy.

This required:

- Designing **prompt architectures** (ReAct, few-shot, chain-of-thought) to enforce structured interpretation rather than freeform generation  
- Aligning **chart-level signals with section-level and global summaries**, ensuring consistency across multiple levels of abstraction  
- Enforcing **hierarchical consistency**, so insights reflect score weighting and relationships across the system  
- Constraining model behavior toward **grounded summarization**, preventing unsupported inference from raw metrics  
- Structuring outputs so independently generated insights **reinforce a unified narrative**, rather than behaving as isolated summaries  

The result is a system where the LLM operates as a **controlled reasoning component**, not a generative endpoint.

---

<h2 style="color: #b85f29; margin-top: 40px;">System Design</h2>

The architecture is designed as a structured interpretation layer on top of deterministic analytical inputs.

- **Input** → weighted scorecard data composed of metrics, benchmarks, and derived signals  
- **Processing** → constrained LLM reasoning governed by hierarchical relationships and prompt structure  
- **Output** → aligned narrative summaries across charts, sections, and the full dashboard  

The system enforces **consistency across multiple levels of abstraction**, a core requirement for decision-support systems.

This is achieved by:

- Interpreting **raw metrics and derived scores together**, rather than independently  
- Generating insights at both **local (chart)** and **global (section)** levels  
- Enforcing **cross-sectional alignment**, ensuring outputs do not contradict one another  

Unlike generic summarization pipelines, the LLM operates within a **structured analytical workflow**, where input design and constraints determine output quality.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/bc6.png" title="Hierarchical Scorecard and Narrative Generation System" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Structured analytics pipeline with constrained reasoning producing aligned, multi-level narratives.
</div>

---

<h2 style="color: #b85f29; margin-top: 40px;">Technical Focus</h2>

The system is built around:

- Structured LLM reasoning over multi-source analytical data  
- Hierarchical interpretation of weighted business metrics  
- Cross-panel narrative alignment across multi-view dashboards  
- Prompt-constrained generation for consistent, decision-ready outputs  

It reflects a design approach centered on **controlled reasoning over structured data**, where LLMs function as interpretation layers within production analytics systems.

---

<h2 style="color: #b85f29; margin-top: 40px;">Outcome</h2>

The system demonstrates how constrained reasoning enables LLMs to operate reliably within structured analytics environments.

It produces **cohesive, decision-ready narratives**, while exposing key challenges in numerical alignment and strict adherence to underlying data.

These constraints informed subsequent system designs that prioritize:

- structured inputs  
- constrained reasoning  
- verifiable outputs  

as requirements for production-grade AI systems.
