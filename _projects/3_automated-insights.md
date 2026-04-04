---
layout: page
title: Automated Insights System
description: Structured statistical signal generation and LLM-governed insight production
img: assets/img/auto-insights1.png
importance: 2
category: work
permalink: /projects/automated-insights/
---

<p style="margin-top: -10px; margin-bottom: 20px;">
  <a href="/projects/" style="text-decoration: none; font-size: 14px;">← Back to projects</a>
</p>

The Automated Insights System is a **production-oriented AI analytics pipeline** designed to generate structured, decision-ready insights from campaign performance data across **overall, channel, and audience dimensions**.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/auto_insights2.png" title="Automated Insights System Flow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  End-to-end pipeline from campaign data to LLM-generated insights.
</div>

Rather than relying on an LLM to infer meaning from raw data, the system separates **statistical reasoning from language generation**. Structured SQL pipelines compute all underlying facts, benchmarks, and signals, while the LLM is constrained to act as a controlled narrator that transforms those signals into clear, standardized insight outputs.

---

## What I Built

I designed and implemented the system end-to-end, including:

- A **statistical signal framework** for identifying meaningful performance patterns using medians, deltas, percentiles, z-scores, and concentration metrics  
- A **multi-dimensional insight model** spanning campaign-level, channel-level, and audience-level analysis  
- A **prompt governance layer** that strictly controls how the LLM interprets and communicates insights  
- A **scheduled workflow pipeline** that generates insights weekly for newly completed campaigns  
- A **data and storage model** for managing prompts, generated insights, and feedback  

Although not part of the analytics team, I led the design and implementation in close collaboration with analytics leadership, iterating on outputs to ensure the system produced **client-relevant, high-value insights**.

---

## System Design

The system is structured as a layered pipeline:

- **Data Layer** → campaign, supplier, channel, and audience performance data  
- **Analytics Layer** → computes structured statistical signals and benchmark comparisons  
- **Prompt Layer** → defines strict rules for allowed interpretations and narrative constraints  
- **Generation Layer** → produces concise insights grounded only in validated signals  
- **Execution Layer** → scheduled tasks generate insights weekly for completed campaigns  
- **Feedback Layer** → captures user feedback for continuous refinement  

This architecture ensures insights are driven by **deterministic statistical logic**, with AI used to standardize and communicate results rather than invent them.

---

## My Contribution

I owned the system from initial concept through implementation and documentation.

This included:

- Designing the **analytical framework** used to determine when a signal is meaningful  
- Developing all **SQL pipelines and feature engineering logic**  
- Defining the **prompting strategy and behavioral constraints** for the LLM  
- Establishing the **contract between structured data outputs and generated language**  
- Creating documentation to train the analytics team on how to extend the framework  
- Translating the framework into a real-world client use case for awareness campaigns  

I also worked directly with analytics leadership to iterate on insight quality, ensuring outputs aligned with how analysts and clients interpret campaign performance.

---

## Technical Focus

This project sits at the intersection of:

- Applied AI and prompt engineering  
- Analytics engineering and statistical feature design  
- Data pipelines and workflow automation  
- Human-in-the-loop feedback systems  

It reflects my focus on building systems where **AI generation is grounded in structured, explainable reasoning**.

---

## Outcome

The system enables scalable, repeatable generation of campaign insights that are:

- Consistent across campaigns and clients  
- Grounded in statistical evidence  
- Structured for decision-making  

It is designed to generalize across objectives and clients, with the long-term vision of building a **library of reusable analytical frameworks and prompt patterns** that can scale insight generation across the organization.

This project demonstrates how AI can be used not just to summarize data, but to **operationalize analytical reasoning into a reusable system**.
