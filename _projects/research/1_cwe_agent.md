---
layout: page
page_class: project-detail
title: "CWE Agent — Multi-Agent System for Vulnerability Injection and Evaluation"
description: Evaluation-driven multi-agent system that injects, scores, and selects vulnerabilities to generate structured security learning outcomes
hero_subdescription: "Built to ground abstract CWE concepts in each student's own code through multi-agent injection and evaluation."
img: assets/img/cwe.png
importance: 1
category: research
permalink: /projects/research/cwe-agent/
---

<p class="project-detail__nav">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

**Most security education is disconnected from how vulnerabilities actually appear in code.**

Students learn CWE concepts in isolation, without seeing how they emerge in their own implementations.

This system embeds vulnerabilities directly into student-submitted code, then evaluates and selects the most educational examples through a structured multi-agent pipeline.

---

<h2>Overview</h2>

This system transforms abstract secure coding concepts into personalized, code-level learning experiences.

<p class="highlight">Vulnerabilities are injected into the exact code students wrote—not into prebuilt examples.</p>

Instead of relying on static exercises, the system operates on real student submissions, generating context-aware vulnerabilities aligned with assignment objectives and implementation details.

I designed and implemented an end-to-end multi-agent pipeline that injects vulnerabilities, evaluates their educational value, and generates structured learning artifacts grounded in the student’s own code.

The result is a repeatable system that converts theoretical security concepts into **contextualized, experiential learning**.

---

<h2>Role</h2>

**Sole Engineer (System Design, Agent Architecture, Evaluation Framework)**  
- Designed and implemented the full multi-agent pipeline  
- Defined evaluation criteria for ranking educational value of vulnerabilities  
- Built all agents, orchestration logic, and data pipelines  
- Collaborated with research team on study design and classroom deployment  

---

<h2>What I Built</h2>

I developed a multi-agent system that formalizes vulnerability generation, evaluation, and selection within student code.

<p class="highlight">Generation alone is not enough—the system evaluates and selects what is most educational.</p>

This included:

- **CWE Injector Agent** — inserts realistic vulnerabilities into high-signal regions of student code while preserving structural integrity  
- **CWE Evaluator Agent** — scores candidates across realism, complexity, and pedagogical value using LLM-as-judge evaluation  
- **CWE Ranker Agent** — selects the optimal vulnerability using weighted scoring and comparative reasoning  
- **Learning Outcome Agent** — generates structured assessment questions grounded in the injected vulnerability and code context  

All prompts, scoring logic, and evaluation workflows are managed through **Langfuse**, enabling versioning, experimentation, and traceability across the system.

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

The architecture is implemented as a staged agentic workflow with explicit separation between generation, evaluation, and selection.

- **Input Context** → student code, assignment specifications, course materials, and curated CWE mappings  
- **Injection Stage** → generation of multiple vulnerability candidates  
- **Evaluation Stage** → scoring using defined pedagogical and technical criteria  
- **Ranking Stage** → selection of the optimal candidate through weighted comparison  
- **Learning Stage** → generation of structured educational artifacts aligned with course objectives  

<p class="highlight">Evaluation is the control mechanism—generation is only the first step.</p>

Each stage produces structured outputs consumed by downstream agents, ensuring reproducibility and consistent system behavior.

The system operates as a **coordinated reasoning pipeline**, where outputs are validated and refined through successive stages rather than accepted at generation time.

---

<h2>Technical Constraints</h2>

A key challenge was balancing technical realism with instructional clarity.

Injected vulnerabilities needed to reflect real-world patterns while remaining understandable and relevant to the student’s implementation.

Challenges included:

- Preserving original code structure while introducing meaningful vulnerabilities  
- Avoiding distortions that reduce educational clarity  
- Designing evaluation criteria that capture both correctness and pedagogical value  
- Maintaining consistency across multiple agents operating on shared context  

To address this:

- Injection strategies were constrained to minimize structural disruption  
- Evaluation criteria were weighted toward **educational usefulness over novelty**  
- Structured outputs were enforced across all agents to ensure consistency and traceability  

This produced a system that maintains **realism without sacrificing instructional value**.

---

<h2>Technical Focus</h2>

The system is built around:

- Multi-agent orchestration for staged reasoning and decision-making  
- Evaluation-driven AI systems where scoring governs selection  
- Programmatic code transformation for controlled vulnerability injection  
- Structured LLM reasoning constrained by educational and contextual inputs  

At its core, the project demonstrates how **evaluation-driven pipelines** produce more reliable and meaningful outcomes than generation alone.

---

<h2>Outcome</h2>

The system was evaluated in a classroom setting to assess its impact on student understanding of secure coding practices.

Instead of working with abstract examples, students engaged with vulnerabilities embedded in their own code.

- Increased engagement through personalized, context-aware exercises  
- Improved qualitative understanding of how vulnerabilities manifest in real implementations  
- Strong positive feedback from students on relevance and clarity  
- No statistically significant quantitative improvement, highlighting the difficulty of measuring learning outcomes in small samples  

The project demonstrates how agentic AI systems can transform security education by making concepts **experiential, contextual, and student-specific**.

It also reinforces the importance of combining qualitative and quantitative evaluation when assessing educational systems.
