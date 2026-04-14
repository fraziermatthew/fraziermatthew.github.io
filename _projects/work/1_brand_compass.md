---
layout: page
page_class: project-detail
title: "Brand Compass — Structured LLM Reasoning System for Brand Intelligence"
description: A production-grade system that transforms fragmented brand data into structured, decision-ready intelligence.
hero_subdescription: "Eliminates guesswork by enforcing alignment across every metric, view, and insight."
importance: 1
img: assets/img/bc2.png
category: work
permalink: /projects/work/brand-compass/
---

<p class="project-detail__nav">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

**Marketing teams lack a unified way to understand how a brand truly compares against competitors** using fragmented public and proprietary data.

Without a clear benchmark, marketing decisions degrade into guesswork.

Brand Compass combines multi-source market intelligence into a deterministic scoring system, then layers structured LLM reasoning to produce consistent, decision-ready insights.

<h2>Overview</h2>

Brand Compass is a competitive intelligence system that models how a company performs relative to its industry and direct competitors using publicly available data such as YouGov, Meltwater, Vivvix, and Google Insights alongside client-provided inputs.

<p class="highlight">The LLM operates as a controlled reasoning component, not a generative endpoint.</p>

The system aggregates these signals into a deterministic scoring framework across market dynamics, mental availability, physical availability, and brand perception.

Instead of leaving interpretation to disconnected dashboards or subjective analysis, Brand Compass turns competitive intelligence into one coherent story grounded in scorecards and aligned across every view.

<h2>Role</h2>

I owned the design and implementation of the LLM reasoning layer, from prompt architecture to production integration within the GOES analytics platform.

**Lead Engineer (LLM Systems & Prompt Architecture)**  
- Designed structured prompt frameworks governing LLM reasoning behavior  
- Implemented the reasoning layer inside the GOES analytics platform  
- Integrated insights directly alongside chart-level visualizations  

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/brand-scorecard.png" title="Brand Compass Scorecard" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Example of structured scorecard inputs paired with aligned LLM-generated insights.
</div>

The broader system runs on a multi-source analytics pipeline combining industry, client, and competitive data, organized into weighted sections spanning **Market Snapshot, Mental Availability, Physical Availability, and Perception**.

---

<h2>What I Built</h2>

I designed and implemented the structured reasoning layer that transforms deterministic brand scorecard data into aligned narratives across a competitive analysis dashboard.

<p class="highlight">This system turns fragmented market data into a consistent, decision-ready narrative layer.</p>

This included:

- Designing **prompt architectures** (ReAct, few-shot, structured CoT) that force interpretation to stay grounded in deterministic signals  
- Aligning **chart-level insights with section-level and global summaries** so outputs remain consistent across levels of abstraction  
- Enforcing **hierarchical reasoning** so narratives reflect weighted relationships between market, mindshare, and distribution signals  
- Constraining model behavior toward **grounded summarization**, preventing unsupported inference and fabricated calculations  
- Structuring outputs so independently generated insights **reinforce a unified narrative** rather than behaving as isolated summaries  
- Integrating LLM-generated insights directly into the GOES UI through collapsible modal components  
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

It does that by:

- Interpreting **raw metrics and derived scores together** rather than independently  
- Generating insights at both **local (chart)** and **global (section)** levels  
- Enforcing **cross-sectional alignment** so outputs do not contradict one another  

Unlike generic summarization pipelines, this workflow makes structure the source of reliability. The dashboard surfaces that directly through deterministic scorecards paired with constrained AI interpretation.

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

Early iterations revealed that the model introduced hallucinated calculations and rounding errors when exposed to raw inputs. That made direct generation unreliable without stronger guardrails.

To address this:

- Inputs were **pre-structured into deterministic signals** before reaching the model  
- Prompts were explicitly designed to **prevent independent numerical reasoning**  
- Output expectations were constrained to **interpretation rather than computation**  

This moved the system away from open-ended generation and into **controlled reasoning over structured data**, significantly improving reliability.

---

<h2>Technical Focus</h2>

The system is built around:

- Structured LLM reasoning over multi-source analytical data  
- Hierarchical interpretation of weighted business metrics  
- Cross-panel narrative alignment across multi-view dashboards  
- Prompt-constrained generation for consistent, decision-ready outputs  

At its core, the project demonstrates how **controlled reasoning over structured data** can make LLM behavior more stable, explainable, and production-ready.

---

<h2>Outcome</h2>

Brand Compass replaces manual, subjective competitive interpretation with a scalable, deterministic framework for insight generation.

Impact included:

- Reducing multi-source analysis from hours of manual interpretation to structured, instantly interpretable outputs  
- Enabling faster identification of advertising opportunities across competitors  
- Introducing narrative consistency across multiple analytics views  
- Scaling insight generation across multiple users through asynchronous API orchestration  

While early iterations still required validation, the system established a strong foundation for **data-grounded, AI-assisted competitive analysis in production environments**.
