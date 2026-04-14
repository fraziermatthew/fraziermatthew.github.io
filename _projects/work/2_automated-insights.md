---
layout: page
page_class: project-detail
title: "Automated Insights — Deterministic Analytics System with Constrained LLM Interpretation"
description: Structured analytics system that separates deterministic signal computation from LLM-based interpretation to produce consistent, decision-ready insights
img: assets/img/auto-insights1.png
importance: 2
category: work
permalink: /projects/work/automated-insights/
---

<p class="project-detail__nav">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

**Marketing analytics relies on subjective interpretation**—analysts manually surface “insights” from campaign performance with little consistency or repeatability.

This system formalizes what counts as an insight by pairing deterministic statistical benchmarking with constrained LLM reasoning for scalable, explainable campaign intelligence.

<h2>Overview</h2>

This system addresses the challenge of generating actionable insights from historical marketing campaign data.

<p class="highlight">Your own campaign history becomes the benchmark—deviations and opportunities surface against what already worked.</p>

Unlike systems focused on external or competitive data, this framework operates on a client’s own campaign history, identifying meaningful deviations, trends, and opportunities relative to historical performance benchmarks.

I designed and implemented an end-to-end analytical pipeline that defines, detects, and interprets insights by combining deterministic statistical signals with structured LLM reasoning.

The result is a system that transforms subjective analytical workflows into a repeatable, scalable process.

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

<p class="highlight">Deterministic signals are computed first; the LLM interprets structured JSON—never free-handing the math.</p>

This included:

- Defining what constitutes an **“insight”** by identifying meaningful deviations from historical campaign performance  
- Building a benchmarking framework comparing active campaigns against historical medians across key metrics  
- Detecting anomalies and statistically significant variations in campaign performance  
- Designing prompt architectures that guide the model to interpret signals within campaign context and marketing objectives  
- Structuring a **stats JSON schema** as the sole contract between computation and interpretation layers  
- Enforcing fully structured outputs to ensure consistency, traceability, and downstream usability  
- Automating weekly pipelines to generate insights for newly completed campaigns  

The system ensures that all reasoning is grounded in precomputed signals, with the LLM restricted to **interpreting rather than deriving** analytical conclusions.

---

<h2>System Design</h2>

The architecture is explicitly designed around separation of concerns:

- **Computation Layer (SQL)**  
  Computes all metrics, benchmarks, and comparative signals deterministically and at scale  

- **Interpretation Layer (LLM)**  
  Consumes structured JSON inputs and generates narrative insights without performing calculations  

This separation enforces:

- elimination of LLM-based numerical reasoning  
- consistent and reproducible outputs  
- controlled variability through prompt constraints  

The structured JSON layer enables **human validation, debugging, and observability**, making insight generation transparent and auditable.

<p class="highlight">Computation owns the numbers; the model owns the narrative—outputs stay traceable end to end.</p>

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

A key challenge was balancing automation with explainability.

Insight generation is inherently subjective, relying on human intuition to determine what is meaningful versus noise. Replicating this required careful constraint of model behavior.

Challenges included:

- Ensuring outputs remain explainable to analysts and clients  
- Preventing over-interpretation of weak or statistically insignificant signals  
- Aligning generated insights with campaign objectives rather than generic observations  

To address this:

- Statistical signals were **pre-filtered before reaching the model**  
- Prompts were structured to enforce **context-aware reasoning**  
- Outputs were constrained to reflect **interpretable relationships between metrics**  

This ensured that insights remained both actionable and defensible in real-world use.

---

<h2>Technical Focus</h2>

The system is built around:

- Formalizing subjective analytical processes into deterministic frameworks  
- Statistical benchmarking and anomaly detection across campaign histories  
- Structured LLM reasoning constrained by business and analytical context  
- Automated insight generation pipelines for recurring campaign cycles  

It represents a shift from manual interpretation toward **scalable, system-driven analytics**.

---

<h2>Outcome</h2>

The system reduced the need for manual post-campaign analysis by automatically generating insights aligned with campaign objectives.

Impact included:

- Reduced analyst time required to identify campaign insights  
- Improved consistency in how insights are defined and communicated  
- Enabled scalable insight generation across recurring campaign cycles  
- Received strong internal validation, with analytics leadership endorsing output quality  

The system established a foundation for scaling automated insight generation across clients and marketing objectives.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto-insights6.png" title="From Statistical Signals to Structured Insight" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Structured signals transformed into consistent insights through constrained reasoning and explicit output contracts.
</div>
