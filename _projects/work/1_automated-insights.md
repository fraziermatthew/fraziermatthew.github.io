---
layout: page
page_class: project-detail
title: "Automated Insights — Deterministic Analytics System with Constrained LLM Interpretation"
description: Structured analytics system that separates deterministic signal computation from LLM-based interpretation to produce consistent, decision-ready insights
hero_subdescription: "Built so every insight traces to deterministic signals, never to free-form model guesswork"
img: assets/img/auto-insights1.png
importance: 1
category: work
permalink: /projects/work/automated-insights/
# Home "Featured Work" — shown when `featured: true` (see _includes/featured_work.html)
featured: true
featured_title: "Automated Insights"
featured_description: "Deterministic analytics system that separates signal computation from constrained LLM interpretation to produce consistent, decision-ready insights."
featured_meta: "Production AI • Analytics Systems • LLM Reasoning"
---

<p class="project-detail__nav">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

**Most marketing insights are not reproducible.
They depend on who is analyzing the data.**

Analysts often interpret the same campaign performance differently, producing inconsistent conclusions from identical inputs.

This system formalizes what counts as an insight by separating deterministic signal computation from constrained LLM interpretation.

<h2>Overview</h2>

This system generates actionable insights from historical marketing campaign data by using a client’s own performance as the benchmark.

<p class="highlight">Computation owns the signals; the model interprets them—insights remain traceable end to end.</p>

Instead of relying on external comparisons, the system evaluates campaigns relative to historical baselines, surfacing meaningful deviations, trends, and opportunities.

I designed and implemented an end-to-end analytical pipeline that defines, detects, and interprets insights through deterministic statistical signals paired with structured LLM reasoning.

The result is a repeatable system that replaces subjective analysis with consistent, data-grounded outputs.

---

<h2>Role</h2>

**Sole Engineer (Analytics Framework + LLM System Design)**
- Defined the analytical framework for identifying meaningful insights from campaign data
- Designed and implemented SQL-based benchmarking and anomaly detection logic
- Developed structured prompt systems to interpret signals within campaign context
- Built automated pipelines for recurring insight generation and delivery

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto-insights2.png" title="Automated Insights System Flow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Deterministic signal generation feeding a constrained LLM interpretation layer for consistent insight production.
</div>

The system operates as a layered analytical pipeline where structured statistical computation precedes and constrains all language generation.

---

<h2>What I Built</h2>

I designed a system that formalizes insight generation by combining statistical benchmarking with structured LLM interpretation.

<p class="highlight">Deterministic signals are computed first; the LLM interprets structured inputs—never performing the analysis itself.</p>

This included:

- Defining what constitutes an **“insight”** through measurable deviations in historical campaign performance
- Designing a measurement and benchmarking framework that maps metrics to campaign objectives and evaluates performance against historical baselines
<!-- - Building an analytical benchmarking and measurement framework that compares active campaigns against historical medians across key metrics -->
- Detecting anomalies and statistically significant variations in campaign performance
- Designing prompt architectures that enforce context-aware interpretation aligned with campaign objectives
- Structuring a **stats JSON schema** as the sole contract between computation and interpretation layers
- Enforcing structured outputs to ensure consistency, traceability, and downstream usability
- Automating recurring pipelines to generate insights for newly completed campaigns

The system ensures all reasoning is grounded in precomputed signals, with the LLM restricted to **interpretation rather than computation**.

---

<h2>System Design</h2>

The architecture is built around a strict separation of concerns:

- **Computation Layer (SQL)**
  Computes all metrics, benchmarks, and comparative signals deterministically

- **Interpretation Layer (LLM)**
  Consumes structured inputs and generates narrative insights without performing calculations

<p class="highlight">Reliability comes from structure, not from the model.</p>

This separation enforces:

- Elimination of LLM-driven numerical reasoning
- Consistent and reproducible outputs
- Controlled variability through prompt constraints

The structured JSON layer provides **observability, validation, and debuggability**, making insight generation transparent and auditable.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto-insights3.png" title="Statistical Signal Pipeline and LLM-Governed Insight Generation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Separation of deterministic computation and constrained LLM reasoning ensures consistent, data-grounded outputs.
</div>

---

<h2>Technical Constraints</h2>

A key challenge was replicating human judgment while maintaining consistency and explainability.

Insight generation is inherently subjective, requiring systems to distinguish meaningful signals from noise.

Early iterations revealed risks of over-interpretation and inconsistent reasoning when model outputs were insufficiently constrained.

To address this:

- Statistical signals were **filtered and validated before reaching the model**
- Prompts were structured to enforce **context-aware interpretation tied to campaign objectives**
- Outputs were constrained to reflect **explicit relationships between metrics**

This ensured insights remained both actionable and defensible in production use.

---

<h2>Technical Focus</h2>

The system is built around:

- Formalizing subjective analytical workflows into deterministic frameworks
- Statistical benchmarking and anomaly detection across campaign histories
- Structured LLM reasoning constrained by analytical and business context
- Automated pipelines for recurring insight generation

At its core, the system demonstrates how **controlled reasoning over structured data** enables scalable, consistent analytics.

---

<h2>Outcome</h2>

The system replaces manual post-campaign analysis with automated, structured insight generation.

Instead of relying on individual interpretation, teams receive consistent outputs grounded in statistically derived benchmarks.

- Reduced analyst effort required to identify campaign insights
- Improved consistency in how insights are defined and communicated
- Enabled scalable insight generation across recurring campaign cycles
- Validated internally, with analytics leadership endorsing output quality

The result is a foundation for **data-grounded, scalable insight generation across clients and marketing workflows**.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto-insights6.png" title="From Statistical Signals to Structured Insight" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Structured signals transformed into consistent insights through constrained reasoning and explicit output contracts.
</div>
