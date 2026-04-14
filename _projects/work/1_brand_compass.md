---
layout: page
page_class: project-detail
title: "Brand Compass — Structured LLM Reasoning System for Brand Intelligence"
description: Structured reasoning system that converts hierarchical brand analytics into consistent, decision-ready narratives
importance: 1
img: assets/img/bc2.png
category: work
permalink: /projects/work/brand-compass/
---

<p class="project-detail__nav">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

Marketing teams lack a unified way to understand how a brand truly compares against competitors using fragmented public and proprietary data.

Brand Compass solves this by combining multi-source market intelligence into a deterministic scoring system, then layering structured LLM reasoning to generate consistent, decision-ready insights.

<h2>Overview</h2>

Brand Compass is a competitive intelligence system that models how a company performs relative to its industry and direct competitors using publicly available data (YouGov, Meltwater, Vivvix, Google Insights) alongside client-provided inputs.

The system aggregates this data into a deterministic scoring framework across key dimensions such as market dynamics, mental availability, physical availability, and brand perception.

I led the development of the LLM reasoning layer that interprets these structured signals and generates aligned, context-aware insights directly within the analytics dashboard.

<h2>Role</h2>

**Lead Engineer (LLM Systems & Prompt Architecture)**  
- Designed structured prompt frameworks governing LLM reasoning behavior  
- Implemented the reasoning layer integrated into the GOES analytics platform  
- Owned UI integration of insights alongside chart-level visualizations  

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

<h2>What I Built</h2>

I designed and implemented a structured LLM reasoning layer that transforms deterministic brand scorecard data into consistent, decision-ready narratives across a competitive analysis dashboard.

This included:

- Designing **prompt architectures** (ReAct, few-shot, structured CoT) to enforce interpretation grounded in deterministic signals rather than freeform generation  
- Aligning **chart-level signals with section-level and global summaries**, ensuring consistency across multiple levels of abstraction  
- Enforcing **hierarchical reasoning**, so insights reflect weighted relationships between market, mindshare, and distribution signals  
- Constraining model behavior toward **grounded summarization**, preventing unsupported inference or fabricated calculations  
- Structuring outputs so independently generated insights **reinforce a unified narrative**, rather than behaving as isolated summaries  
- Integrating LLM-generated insights directly into the GOES UI alongside visualizations using collapsible modal components  
- Orchestrating large-scale API execution via queue-based Lambda workflows to support concurrent multi-user usage  

The result is a system where the LLM operates as a **controlled reasoning component**, not a generative endpoint.

---

<h2>System Design</h2>

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

<h2>Technical Constraints</h2>

A key challenge was controlling LLM behavior when interpreting quantitative data.

Early iterations revealed that the model introduced hallucinated calculations and rounding errors when exposed to raw inputs. This made direct generation unreliable without additional constraints.

To address this:

- Inputs were **pre-structured into deterministic signals** before reaching the model  
- Prompts were explicitly designed to **prevent independent numerical reasoning**  
- Output expectations were constrained to **interpretation rather than computation**  

This shifted the system from a generative model to a **controlled reasoning layer operating over structured data**, significantly improving reliability.

---

<h2>Technical Focus</h2>

The system is built around:

- Structured LLM reasoning over multi-source analytical data  
- Hierarchical interpretation of weighted business metrics  
- Cross-panel narrative alignment across multi-view dashboards  
- Prompt-constrained generation for consistent, decision-ready outputs  

It reflects a design approach centered on **controlled reasoning over structured data**, where LLMs function as interpretation layers within production analytics systems.

---

<h2>Outcome</h2>

The system enabled analysts and clients to identify competitive gaps and marketing opportunities without manually synthesizing fragmented data sources.

Impact included:

- Reduced manual cognitive effort required to interpret multi-source market data  
- Enabled faster identification of advertising opportunities across competitors  
- Introduced consistent narrative alignment across multiple analytics views  
- Scaled across multiple users via asynchronous API orchestration  

While early iterations required validation due to LLM limitations, the system established a strong foundation for **data-grounded, AI-assisted competitive analysis in production environments**.
