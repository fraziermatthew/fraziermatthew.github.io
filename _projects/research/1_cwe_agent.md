---
layout: page
title: "CWE Agent - Multi-Agent Vulnerability Learning System"
description: Multi-agent AI pipeline for vulnerability injection, evaluation, and secure coding education
img: assets/img/cwe.png
importance: 1
category: research
permalink: /projects/research/cwe-agent/
---

<p style="margin-top: -10px; margin-bottom: 20px;">
  <a href="{{ '/projects/' | relative_url }}" class="back-link">← Back to projects</a>
</p>

The CWE Vulnerability Injection System is a **multi-agent AI system built with CrewAI** that simulates how vulnerabilities emerge in real-world codebases and transforms them into structured learning experiences.

Traditional security education relies on isolated textbook examples, which fail to reflect how bugs are introduced and discovered in production systems. In practice, vulnerabilities emerge as side effects in existing code and must be identified through inspection and reasoning.

I built a system that bridges this gap by **injecting realistic vulnerabilities into student code, evaluating multiple variants, and selecting the most educational instance to surface**, using a coordinated set of specialized agents.

<!-- [Common Weakness Enumeration](https://cwe.mitre.org/) (CWE) is a community-developed, MITRE-sponsored list of software and hardware flaws that can lead to vulnerabilities. It acts as a standardized dictionary to identify, mitigate, and prevent security weaknesses. CWEs describe the root cause of a vulnerability (e.g., buffer overflow), unlike CVEs (Vulnerability) or CVSS (Severity), which identify specific, exploitable instances.

The Common Weakness Enumeration (CWE) Educational Vulnerability Injection System is a **multi-agent AI pipeline** designed to support secure coding education by injecting, evaluating, ranking, and teaching software vulnerabilities in student-submitted code.

Rather than treating vulnerability detection as a static analysis task, the system frames security learning as an **interactive educational workflow**. It uses contextual information from course materials and assignment prompts to generate vulnerability variants that are relevant to the student’s code, then evaluates which injected weakness would create the most meaningful learning opportunity. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">What I Built</h2>

I designed and implemented a **multi-agent orchestration system using CrewAI**, where each stage of the pipeline is handled by a specialized agent with distinct responsibilities.

This included:

- **CWE Injector Agent** — introduces realistic vulnerability variants into high-signal regions of student code
- **CWE Evaluator Agent** — uses LLM-as-judge to score each variant across naturalness, complexity, and pedagogical value
- **CWE Ranker Agent** — applies weighted scoring logic to select the strongest candidate
- **Learning Outcome Agent** — generates structured assessment questions using course and vulnerability context

All prompts, evaluation logic, and scoring strategies are managed through **Langfuse**, enabling structured prompt versioning, experimentation, and traceability.
<!-- <h2 style="color: #b85f29; margin-top: 40px;">What I Built</h2>

I designed and implemented an end-to-end workflow composed of four coordinated agents:

- **CWE Injector** — introduces realistic vulnerability variants into student code
- **CWE Evaluator** — scores each injected version across educational criteria
- **CWE Ranker** — selects the strongest candidate using weighted scoring and rationale
- **Learning Outcome Generator** — produces student-facing feedback and assessment artifacts

The overall goal was to create a system that connects **LLM reasoning, code transformation, and pedagogical evaluation** in a single research pipeline. -->

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/cwe5.png" title="CWE Injection Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Orchestrates specialized agents to inject, evaluate, and surface high-value vulnerabilities, converting static code into interactive security learning scenarios.
</div>

---

<h2 style="color: #b85f29; margin-top: 40px;">System Design</h2>

The system is implemented as a staged **agentic workflow**, where each agent operates on shared context and passes structured outputs to the next stage:

- **Input Context** → student code, assignment details, course materials, and curated CWE list
- **File Selection Heuristic** → prioritizes high-signal files based on size and complexity
- **Injection Agent** → generates multiple vulnerability variants
- **Evaluation Agent** → scores each variant using LLM-based judgment
- **Ranking Agent** → resolves the optimal candidate using weighted scoring
- **Learning Agent** → generates multi-choice and open-ended questions
This architecture allows the system to behave as a **coordinated reasoning pipeline**, rather than a single-pass LLM workflow.
<!-- <h2 style="color: #b85f29; margin-top: 40px;">System Design</h2>

The architecture is organized as a staged pipeline:

- **Input Layer** → student code, course context, assignment context, and CWE metadata
- **Injection Layer** → minimally modifies code to introduce a relevant 2024 Top 25 CWE
- **Evaluation Layer** → scores each variant for relevance, pedagogical value, appropriateness, and naturalness
- **Ranking Layer** → resolves the best candidate using weighted scoring and rationale
- **Learning Layer** → generates structured educational feedback, including explanatory artifacts and assessment questions

This design makes the system more than a vulnerability generator. It functions as an **AI-assisted instructional framework** for teaching secure software development. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">Technical Focus</h2>

This system combines:

- Agentic orchestration using CrewAI for coordinated multi-step reasoning
- LLM-as-judge evaluation patterns for structured scoring and comparative ranking
- Prompt lifecycle management and observability using Langfuse
- Programmatic code transformation for controlled vulnerability injection
- Secure software engineering grounded in real-world CWE standards

It reflects a focus on **evaluation-driven AI systems**, where generation, scoring, and selection are tightly coupled into a single pipeline.

<!-- <h2 style="color: #b85f29; margin-top: 40px;">Technical Focus</h2>

This project sits at the intersection of:

- Applied AI and agentic workflows
- Secure software engineering
- Educational technology
- Structured evaluation pipelines

It reflects my interest in building systems that use AI not just to automate tasks, but to produce **context-aware educational value**. -->

---

<h2 style="color: #b85f29; margin-top: 40px;">Outcome</h2>

This system demonstrates how agentic AI can move beyond static analysis into **context-aware learning and decision systems**.

By simulating how vulnerabilities emerge in real codebases and selecting the most educational instance to surface, the system transforms debugging from a reactive task into a structured learning process.

Instead of simply identifying weaknesses, it enables:

- prioritizing which vulnerability is most valuable to teach
- generating explanations grounded in real code context
- reinforcing understanding through targeted assessment

This project reflects my focus on building **AI systems that combine generation, evaluation, and ranking to produce high-signal, domain-specific outcomes**.

<!-- The system demonstrates how multi-agent AI can be used to transform student code into a guided learning experience.

Instead of only identifying weaknesses, it helps answer higher-level questions such as:

- Which vulnerability is most educational in this context?
- How should it be explained to the student?
- What kind of follow-up assessment reinforces learning?

This project showcases my work in combining **LLM systems, software engineering, and research-driven educational design** into a reproducible AI pipeline. -->

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.html path="assets/img/cwe2.png" title="From Vulnerability Injection to Security Understanding" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Introduces realistic security flaws into student code and generates structured learning prompts, bridging the gap between theoretical concepts and real-world secure software development.
</div>
