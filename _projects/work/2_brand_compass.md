---
layout: page
page_class: project-detail
title: "Brand Compass — Structured LLM Reasoning System for Brand Intelligence"
description: A production-grade system that transforms fragmented brand data into structured, decision-ready intelligence.
hero_subdescription: "Eliminates guesswork by enforcing alignment across every metric, view, and insight."
importance: 2
img: assets/img/bc2.png
category: work
permalink: /projects/work/brand-compass/
---

<p class="project-detail__nav">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

**Most marketing teams cannot reliably answer one question:  
How does our brand actually compare to competitors?**

Data is fragmented across sources, metrics lack alignment, and interpretation is left to subjective analysis.

Brand Compass solves this by enforcing structure at every layer—from raw signals to final insights.

<h2>Overview</h2>

Brand Compass is a competitive intelligence system that models how a company performs relative to its industry and direct competitors using publicly available data such as YouGov, Meltwater, Vivvix, and Google Insights alongside client-provided inputs.

<p class="highlight">The LLM operates as a controlled reasoning component, not a generative endpoint.</p>

The system works because the model is constrained, not because it is powerful.

It aggregates these signals into a deterministic scoring framework across market dynamics, mental availability, physical availability, and brand perception.

Instead of relying on disconnected dashboards or subjective interpretation, Brand Compass produces a single coherent view grounded in aligned scorecards.

---

<h2>Role</h2>

I owned the design and implementation of the LLM reasoning layer, from prompt architecture to production integration within the GOES™ analytics platform.

**Lead Engineer (LLM Systems & Prompt Architecture)**  
- Designed structured prompt frameworks governing LLM reasoning behavior  
- Implemented the reasoning layer inside the GOES™ analytics platform  
- Integrated insights directly alongside chart-level visualizations  

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/brand-scorecard.png" title="Brand Compass Scorecard" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Example of structured scorecard inputs paired with aligned LLM-generated insights.
</div>

The system operates on a multi-source analytics pipeline combining industry, client, and competitive data, organized into weighted sections spanning **Market Snapshot, Mental Availability, Physical Availability, and Perception**.

---

<h2>What I Built</h2>

I designed and implemented the structured reasoning layer that transforms deterministic brand scorecard data into aligned narratives across a competitive analysis dashboard.

<p class="highlight">This system turns fragmented market data into a consistent, decision-ready narrative layer.</p>

This included:

- Designing **prompt architectures** (ReAct, few-shot, structured CoT) that enforce interpretation grounded in deterministic signals  
- Aligning **chart-level insights with section-level and global summaries** to maintain consistency across levels of abstraction  
- Enforcing **hierarchical reasoning** so narratives reflect weighted relationships between market, mindshare, and distribution signals  
- Constraining model behavior toward **grounded summarization**, preventing unsupported inference and fabricated calculations  
- Structuring outputs so independently generated insights **reinforce a unified narrative** rather than acting as isolated summaries  
- Integrating LLM-generated insights directly into the GOES™ UI through collapsible modal components  
- Supporting concurrent multi-user execution through queue-based Lambda orchestration  

The result is a reasoning system that interprets structured analytical inputs reliably at production scale.

---

<h2>System Design</h2>

The architecture is built as a structured interpretation layer on top of deterministic analytical inputs.

<p class="highlight">The LLM interprets weighted signals, never drifting from the deterministic scorecard underneath.</p>

- **Input** → weighted scorecard data composed of metrics, benchmarks, and derived signals  
- **Processing** → constrained LLM reasoning governed by hierarchy and prompt structure  
- **Output** → aligned narrative summaries across charts, sections, and the full dashboard  

This design enforces **consistency across multiple levels of abstraction**, which is essential for decision-support systems.

It achieves this by:

- Interpreting **raw metrics and derived scores together** rather than independently  
- Generating insights at both **local (chart)** and **global (section)** levels  
- Enforcing **cross-sectional alignment** so outputs do not contradict one another  

Unlike generic summarization pipelines, this workflow makes structure the source of reliability.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/bc6.png" title="Hierarchical Scorecard and Narrative Generation System" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Structured analytics pipeline with constrained reasoning producing aligned, multi-level narratives.
</div>

---

<h2>Technical Constraints</h2>

A key challenge was controlling LLM behavior when interpreting quantitative data.

Early iterations revealed that the model introduced hallucinated calculations and rounding errors when exposed to raw inputs. This made direct generation unreliable without stronger guardrails.

To address this:

- Inputs were **pre-structured into deterministic signals** before reaching the model  
- Prompts were explicitly designed to **prevent independent numerical reasoning**  
- Output expectations were constrained to **interpretation rather than computation**  

This shifted the system from open-ended generation to **controlled reasoning over structured data**, significantly improving reliability.

---

<h2>Technical Focus</h2>

The system is built around:

- Structured LLM reasoning over multi-source analytical data  
- Hierarchical interpretation of weighted business metrics  
- Cross-panel narrative alignment across multi-view dashboards  
- Prompt-constrained generation for consistent, decision-ready outputs  

At its core, the project demonstrates how **controlled reasoning over structured data** makes LLM behavior more stable, explainable, and production-ready.

---

<h2>Outcome</h2>

Brand Compass replaces subjective, manual competitive analysis with a deterministic system that produces consistent, aligned insight at scale.

Instead of interpreting dashboards, teams receive structured narratives that reflect the underlying data with enforced consistency.

- Reduced multi-source analysis from hours of manual interpretation to structured, instantly interpretable outputs  
- Enabled faster identification of advertising opportunities across competitors  
- Introduced narrative consistency across multiple analytics views  
- Scaled insight generation across multiple users through asynchronous API orchestration  

While early iterations still required validation, the system established a strong foundation for **data-grounded, AI-assisted competitive analysis in production environments**.
