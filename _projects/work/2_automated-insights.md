---
layout: page
title: "Automated Insights - Deterministic Analytics Pipeline"
description: Deterministic analytics pipeline with structured signal generation and LLM-constrained insight production
img: assets/img/auto-insights1.png
importance: 2
category: work
permalink: /projects/work/automated-insights/
---

<p style="margin-top: -10px; margin-bottom: 20px;">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

Built a scalable analytics system that transforms raw campaign data into structured signals and generates consistent, JSON-based insights using a constrained LLM reasoning layer.

<!-- The Automated Insights System is a **production-oriented AI analytics pipeline** designed to generate structured, decision-ready insights from campaign performance data across **overall, channel, and audience dimensions**. -->

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto-insights2.png" title="Automated Insights System Flow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  End-to-end pipeline from campaign data to LLM-generated insights.
</div>

The system separates **deterministic data computation (SQL)** from **language-based interpretation (LLM)**, enabling reliable insight generation while maintaining flexibility for future autonomous extensions.

<!-- Rather than relying on an LLM to infer meaning from raw data, the system separates **statistical reasoning from language generation**. Structured SQL pipelines compute all underlying facts, benchmarks, and signals, while the LLM is constrained to act as a controlled narrator that transforms those signals into clear, standardized insight outputs. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">What I Built</h2>

Designed and implemented an end-to-end pipeline that converts campaign performance data into structured, interpretable outputs.

This includes:

- SQL pipelines that compute **benchmarks, distributions, and performance signals** across campaigns
- A standardized **stats JSON schema** used as the sole input to the LLM
- Prompting frameworks that guide the model to generate **structured, decision-ready outputs**
- A fully JSON-based response format to ensure consistency and downstream usability

The system produces insights deterministically at the data layer, while using the LLM strictly for interpretation.

<!-- I designed and implemented the system end-to-end, including:

- A **statistical signal framework** for identifying meaningful performance patterns using medians, deltas, percentiles, z-scores, and concentration metrics
- A **multi-dimensional insight model** spanning campaign-level, channel-level, and audience-level analysis
- A **prompt governance layer** that strictly controls how the LLM interprets and communicates insights
- A **scheduled workflow pipeline** that generates insights weekly for newly completed campaigns
- A **data and storage model** for managing prompts, generated insights, and feedback

Although not part of the analytics team, I led the design and implementation in close collaboration with analytics leadership, iterating on outputs to ensure the system produced **client-relevant, high-value insights**. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">System Design</h2>

The architecture is intentionally split into two layers:

- **Computation Layer (SQL)**
  Generates all metrics, benchmarks, and comparative signals in a deterministic and scalable manner

- **Interpretation Layer (LLM)**
  Consumes structured JSON inputs and produces narrative insights without performing calculations

This separation ensures:

- no reliance on LLM numerical reasoning
- consistent and reproducible outputs
- controlled variability through prompt design

The stats JSON also enables **human validation and debugging**, providing transparency into how insights are formed.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto-insights3.png" title="Statistical Signal Pipeline and LLM-Governed Insight Generation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A constrained architecture that separates statistical computation from language model reasoning. Deterministic SQL-based signal generation produces fully structured inputs, enabling the LLM to perform controlled interpretation and generate consistent, data-grounded insights.
</div>

<!-- The system is structured as a layered pipeline:

- **Data Layer** → campaign, supplier, channel, and audience performance data
- **Analytics Layer** → computes structured statistical signals and benchmark comparisons
- **Prompt Layer** → defines strict rules for allowed interpretations and narrative constraints
- **Generation Layer** → produces concise insights grounded only in validated signals
- **Execution Layer** → scheduled tasks generate insights weekly for completed campaigns
- **Feedback Layer** → captures user feedback for continuous refinement

This architecture ensures insights are driven by **deterministic statistical logic**, with AI used to standardize and communicate results rather than invent them. -->

<!-- ---

<h2 style="color: #b85f29; margin-top: 40px;">My Contribution</h2>

I owned the system from initial concept through implementation and documentation.

This included:

- Designing the **analytical framework** used to determine when a signal is meaningful
- Developing all **SQL pipelines and feature engineering logic**
- Defining the **prompting strategy and behavioral constraints** for the LLM
- Establishing the **contract between structured data outputs and generated language**
- Creating documentation to train the analytics team on how to extend the framework
- Translating the framework into a real-world client use case for awareness campaigns

I also worked directly with analytics leadership to iterate on insight quality, ensuring outputs aligned with how analysts and clients interpret campaign performance. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">Technical Focus</h2>

This system combines:

- Deterministic data pipelines using SQL for scalable signal and benchmark generation
- Structured input schemas (JSON) for controlled LLM interaction
- Prompt-constrained reasoning to ensure consistent, interpretable outputs
- Architectural separation of computation and language-based interpretation

It reflects a focus on **production-grade AI systems**, where reliability is achieved through structure, constraints, and clear separation of system responsibilities.

<!-- This project sits at the intersection of:

- Applied AI and prompt engineering
- Analytics engineering and statistical feature design
- Data pipelines and workflow automation
- Human-in-the-loop feedback systems

It reflects my focus on building systems where **AI generation is grounded in structured, explainable reasoning**. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">Outcome</h2>


The system enables scalable generation of consistent, interpretable insights across campaigns without relying on fragile LLM calculations.

It demonstrates how structured inputs and constrained reasoning can make LLMs viable in production analytics systems.

More importantly, the architecture is designed for future evolution toward:

- LLM-generated benchmark creation
- self-validating insight pipelines
- fully autonomous analytics systems

This project represents a step toward **AI systems that not only interpret data, but eventually own the full analytical lifecycle**.

<!-- The system enables scalable, repeatable generation of campaign insights that are:

- Consistent across campaigns and clients
- Grounded in statistical evidence
- Structured for decision-making

It is designed to generalize across objectives and clients, with the long-term vision of building a **library of reusable analytical frameworks and prompt patterns** that can scale insight generation across the organization.

This project demonstrates how AI can be used not just to summarize data, but to **operationalize analytical reasoning into a reusable system**. -->

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto-insights6.png" title="From Statistical Signals to Structured Insight" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Transforms structured statistical signals into consistent, interpretable insights through controlled LLM reasoning and JSON-based output contracts.
</div>
