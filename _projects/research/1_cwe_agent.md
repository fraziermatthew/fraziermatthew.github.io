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

This system injects, evaluates, and selects realistic software vulnerabilities in student code using a coordinated multi-agent reasoning pipeline.

Traditional security education relies on static examples that fail to reflect how vulnerabilities emerge in real codebases. In practice, weaknesses appear as side effects within existing systems and must be identified through contextual reasoning. This system simulates that process by generating multiple vulnerability variants, evaluating them across technical and pedagogical criteria, and selecting the most effective instance to surface.

I designed and implemented a multi-agent orchestration system using CrewAI that coordinates generation, evaluation, ranking, and learning outcome generation across a structured pipeline.

---

<h2 style="color: #b85f29; margin-top: 40px;">What I Built</h2>

I built a multi-agent system where each stage of the pipeline performs a distinct role in generating, evaluating, and selecting high-signal vulnerabilities.

This includes:

- **CWE Injector Agent** — generates realistic vulnerability variants within high-signal regions of student code  
- **CWE Evaluator Agent** — applies LLM-as-judge scoring across naturalness, complexity, and pedagogical value  
- **CWE Ranker Agent** — resolves the optimal candidate using weighted scoring and comparative reasoning  
- **Learning Outcome Agent** — produces structured assessment questions grounded in code, context, and vulnerability type  

All prompts, scoring logic, and evaluation strategies are managed through **Langfuse**, enabling versioning, experimentation, and traceability across the system.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/cwe5.png" title="CWE Injection Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Coordinated multi-agent pipeline that generates, evaluates, and selects vulnerabilities to produce structured learning outcomes.
</div>

---

<h2 style="color: #b85f29; margin-top: 40px;">System Design</h2>

The architecture is implemented as a staged agentic workflow, where each agent operates on shared context and produces structured outputs consumed by downstream agents.

- **Input Context** → student code, assignment specifications, course materials, and curated CWE mappings  
- **File Selection Heuristic** → prioritizes high-signal files based on size, structure, and complexity  
- **Injection Stage** → generates multiple candidate vulnerabilities  
- **Evaluation Stage** → scores each candidate using structured LLM-based judgment  
- **Ranking Stage** → selects the optimal candidate using weighted scoring and rationale  
- **Learning Stage** → generates assessment artifacts aligned with course objectives  

The system behaves as a **coordinated reasoning pipeline**, where generation, evaluation, and selection are tightly coupled rather than executed independently.

---

<h2 style="color: #b85f29; margin-top: 40px;">Technical Focus</h2>

The system is built around:

- Agentic orchestration using CrewAI for multi-step, coordinated reasoning  
- LLM-as-judge evaluation patterns for structured scoring and comparative selection  
- Prompt lifecycle management and observability using Langfuse  
- Programmatic code transformation for controlled vulnerability injection  
- Secure software engineering grounded in real-world CWE standards  

It reflects a design approach centered on **evaluation-driven AI systems**, where generation alone is insufficient without structured scoring and selection.

---

<h2 style="color: #b85f29; margin-top: 40px;">Outcome</h2>

The system demonstrates how agentic AI can move beyond static analysis into **context-aware decision systems**.

By simulating how vulnerabilities emerge in real codebases and selecting the most valuable instance to surface, the system transforms security education into a structured reasoning process.

It enables:

- prioritization of high-impact vulnerabilities for learning  
- generation of explanations grounded in real code context  
- reinforcement through targeted assessment and evaluation  

This system reflects a broader pattern of building AI pipelines that combine **generation, evaluation, and ranking** to produce high-signal, domain-specific outcomes.
