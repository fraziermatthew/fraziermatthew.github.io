---
layout: page
title: "CWE Agent — Multi-Agent System for Vulnerability Injection and Evaluation"
description: Evaluation-driven multi-agent system that injects, scores, and selects vulnerabilities to generate structured security learning outcomes
img: assets/img/cwe.png
importance: 1
category: research
permalink: /projects/research/cwe-agent/
---

<p style="margin-top: -10px; margin-bottom: 20px;">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

Security education relies heavily on static examples that fail to reflect how vulnerabilities emerge in real-world codebases.

In practice, weaknesses appear as side effects within existing systems and must be identified through contextual reasoning rather than pattern recognition alone. This creates a gap between how vulnerabilities are taught and how they are encountered in production environments.

This system addresses that gap by simulating vulnerability emergence through a structured, evaluation-driven multi-agent pipeline that generates, scores, and selects realistic weaknesses within student code.

---

**Role:** Lead Engineer (Agent Architecture & LLM Evaluation Design)  
**Scope:** Multi-agent system design, prompt architecture, evaluation framework, orchestration pipeline  
**Focus:** Constraining LLM generation through structured evaluation and selection

---

I designed and implemented a coordinated multi-agent system using CrewAI that transforms vulnerability generation into a controlled reasoning process rather than a single-pass output.

---

<h2 style="color: #8c4720; margin-top: 40px;">What I Built</h2>

I built a multi-agent pipeline where each stage performs a distinct role in generating, evaluating, and selecting high-signal vulnerabilities.

This includes:

- **CWE Injector Agent** — generates realistic vulnerability variants within high-signal regions of student code, ensuring injections appear naturally within existing logic  
- **CWE Evaluator Agent** — applies LLM-as-judge scoring across naturalness, complexity, and pedagogical value, preventing low-quality or artificial outputs  
- **CWE Ranker Agent** — selects the optimal candidate using weighted scoring and comparative reasoning across multiple generated variants  
- **Learning Outcome Agent** — produces structured assessment questions grounded in code context, vulnerability type, and instructional objectives  

All prompts, scoring logic, and evaluation strategies are managed through **Langfuse**, enabling versioning, experimentation, and traceability across the full pipeline.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/cwe5.png" title="CWE Injection Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Coordinated multi-agent pipeline that generates, evaluates, and selects vulnerabilities to produce structured learning outcomes.
</div>

---

<h2 style="color: #8c4720; margin-top: 40px;">System Design</h2>

The architecture is implemented as a staged agentic workflow, where each agent operates on shared context and produces structured outputs consumed by downstream agents.

- **Input Context** → student code, assignment specifications, course materials, and curated CWE mappings  
- **File Selection Heuristic** → prioritizes high-signal files based on size, structure, and complexity  
- **Injection Stage** → generates multiple candidate vulnerabilities within realistic code regions  
- **Evaluation Stage** → scores each candidate using structured LLM-based judgment  
- **Ranking Stage** → selects the optimal candidate using weighted scoring and comparative reasoning  
- **Learning Stage** → generates assessment artifacts aligned with course objectives  

The system functions as a **coordinated reasoning pipeline**, where generation, evaluation, and selection are tightly coupled rather than executed independently.

---

<h2 style="color: #8c4720; margin-top: 40px;">Technical Constraints</h2>

A key challenge was ensuring that generated vulnerabilities remained both realistic and instructionally valuable.

Naive generation approaches produced outputs that were either too obvious, syntactically unnatural, or disconnected from the surrounding code context.

To address this:

- Generation was constrained to **existing code structure**, preventing isolated or artificial insertions  
- Evaluation was introduced as a **first-class system component**, not a post-processing step  
- LLM-as-judge scoring enforced quality across multiple dimensions rather than relying on single-pass outputs  
- Ranking logic ensured that only the most pedagogically valuable and technically realistic candidate was selected  

This shifted the system from a generative pipeline into an **evaluation-driven decision system**, where output quality is determined through structured reasoning rather than raw generation.

---

<h2 style="color: #8c4720; margin-top: 40px;">Technical Focus</h2>

The system is built around:

- Agentic orchestration using CrewAI for multi-step, coordinated reasoning  
- LLM-as-judge evaluation patterns for structured scoring and comparative selection  
- Prompt lifecycle management and observability using Langfuse  
- Programmatic code transformation for controlled vulnerability injection  
- Secure software engineering grounded in real-world CWE standards  

It reflects a design approach centered on **evaluation-driven AI systems**, where generation alone is insufficient without structured scoring and selection.

---

<h2 style="color: #8c4720; margin-top: 40px;">Outcome</h2>

The system transforms vulnerability injection from a static content generation task into a structured reasoning workflow aligned with real-world software behavior.

Impact includes:

- Generation of vulnerabilities that more closely reflect how weaknesses emerge in real codebases  
- Reduction in low-quality or artificial examples through evaluation-driven selection  
- Improved alignment between generated vulnerabilities and instructional learning objectives  
- Creation of a scalable pipeline for producing high-signal security exercises across diverse codebases  

This system demonstrates a broader pattern for building AI applications that combine **generation, evaluation, and ranking** to produce reliable, domain-specific outputs.
<!-- ---
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

<h2 style="color: #8c4720; margin-top: 40px;">What I Built</h2>

I built the reasoning layer that converts structured scorecard outputs into aligned, decision-ready narratives across the full analytical hierarchy.

This required:

- Designing **prompt architectures** (ReAct, few-shot, chain-of-thought) to enforce structured interpretation rather than freeform generation  
- Aligning **chart-level signals with section-level and global summaries**, ensuring consistency across multiple levels of abstraction  
- Enforcing **hierarchical consistency**, so insights reflect score weighting and relationships across the system  
- Constraining model behavior toward **grounded summarization**, preventing unsupported inference from raw metrics  
- Structuring outputs so independently generated insights **reinforce a unified narrative**, rather than behaving as isolated summaries  

The result is a system where the LLM operates as a **controlled reasoning component**, not a generative endpoint.

---

<h2 style="color: #8c4720; margin-top: 40px;">System Design</h2>

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

<h2 style="color: #8c4720; margin-top: 40px;">Technical Focus</h2>

The system is built around:

- Structured LLM reasoning over multi-source analytical data  
- Hierarchical interpretation of weighted business metrics  
- Cross-panel narrative alignment across multi-view dashboards  
- Prompt-constrained generation for consistent, decision-ready outputs  

It reflects a design approach centered on **controlled reasoning over structured data**, where LLMs function as interpretation layers within production analytics systems.

---

<h2 style="color: #8c4720; margin-top: 40px;">Outcome</h2>

The system demonstrates how constrained reasoning enables LLMs to operate reliably within structured analytics environments.

It produces **cohesive, decision-ready narratives**, while exposing key challenges in numerical alignment and strict adherence to underlying data.

These constraints informed subsequent system designs that prioritize:

- structured inputs  
- constrained reasoning  
- verifiable outputs  

as requirements for production-grade AI systems. -->
