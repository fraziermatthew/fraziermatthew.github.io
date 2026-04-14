---
layout: page
page_class: project-detail
title: "CWE Agent — Multi-Agent System for Vulnerability Injection and Evaluation"
description: Evaluation-driven multi-agent system that injects, scores, and selects vulnerabilities to generate structured security learning outcomes
img: assets/img/cwe.png
importance: 1
category: research
permalink: /projects/research/cwe-agent/
---

<p class="project-detail__nav">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

Security education relies heavily on static examples, making it difficult for students to understand how vulnerabilities emerge in real code.

This system introduces a multi-agent pipeline that injects, evaluates, and ranks vulnerabilities directly within student-submitted code, generating personalized, context-aware learning experiences.

<h2>Overview</h2>

Traditional approaches to teaching secure coding rely on isolated examples that fail to reflect how vulnerabilities appear in real systems.

I designed and implemented an end-to-end multi-agent pipeline that injects realistic vulnerabilities into student code, evaluates their educational value, and generates structured learning artifacts tailored to the student’s own implementation.

The system transforms abstract security concepts into **contextualized learning experiences grounded in the student’s own codebase**.

<h2>Role</h2>

**Sole Engineer (System Design, Agent Architecture, Evaluation Framework)**  
- Designed and implemented the full multi-agent pipeline  
- Defined evaluation criteria for ranking educational value of vulnerabilities  
- Built all agents, orchestration logic, and data pipelines  
- Collaborated with research team on study design and student evaluation  

---

<h2>What I Built</h2>

I developed a multi-agent system that simulates the lifecycle of vulnerability discovery and analysis within student code.

This includes:

- **CWE Injector Agent** — generates realistic vulnerability variants within high-signal regions of student code while preserving structural and educational relevance  
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

<h2>System Design</h2>

The architecture is implemented as a staged agentic workflow, where each agent operates on shared context and produces structured outputs consumed by downstream agents.

- **Input Context** → student code, assignment specifications, course materials, and curated CWE mappings  
- **Injection Stage** → generation of multiple candidate vulnerabilities  
- **Evaluation Stage** → scoring using defined pedagogical criteria  
- **Ranking Stage** → selection of the optimal candidate using weighted scoring and rationale  
- **Learning Stage** → generation of educational artifacts aligned with course objectives  

Each stage produces structured outputs that feed into the next, enabling reproducibility and systematic evaluation.

The system behaves as a **coordinated reasoning pipeline**, where generation, evaluation, and selection are tightly coupled rather than executed independently.

---

<h2>Technical Constraints</h2>

A key challenge was balancing realism with educational value.

Injecting vulnerabilities into student code required preserving original logic while introducing meaningful security weaknesses.

Challenges included:

- Ensuring injected vulnerabilities remain realistic and contextually appropriate  
- Avoiding excessive code distortion that reduces educational clarity  
- Designing evaluation criteria that reflect both technical correctness and pedagogical value  
- Maintaining consistency across multiple agents operating on shared context  

To address this:

- Injection strategies were constrained to minimize structural disruption  
- Evaluation criteria were weighted to prioritize educational relevance  
- Structured outputs were enforced across all agents to ensure reproducibility  

This resulted in a system that balances **technical realism with instructional effectiveness**.

---

<h2>Technical Focus</h2>

The system is built around:

- Agentic AI system design with multi-stage orchestration  
- Structured evaluation frameworks for ranking generated outputs  
- Programmatic code transformation for controlled vulnerability injection  
- LLM-based reasoning constrained by educational and contextual inputs  

It reflects a design approach centered on **evaluation-driven AI systems**, where generation alone is insufficient without structured scoring and selection.

---

<h2>Outcome</h2>

The system was evaluated in a classroom setting to assess its effectiveness in improving student understanding of secure coding practices.

Results showed:

- Positive student perception, with participants reporting improved understanding of vulnerabilities in their own code  
- Increased engagement due to personalized, context-aware examples  
- No statistically significant quantitative improvement, highlighting the complexity of measuring learning outcomes  

The project demonstrates the potential of agentic AI systems to enhance education by transforming abstract concepts into **personalized, experiential learning**.

It also highlights the importance of combining qualitative and quantitative evaluation when assessing educational technologies.
