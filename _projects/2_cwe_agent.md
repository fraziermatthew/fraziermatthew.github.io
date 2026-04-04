---
layout: page
title: CWE Educational Vulnerability Injection System
description: Multi-agent AI pipeline for secure coding education and vulnerability assessment
importance: 2
category: work
permalink: /projects/cwe-agent/
---

The CWE Educational Vulnerability Injection System is a **multi-agent AI pipeline** designed to support secure coding education by injecting, evaluating, ranking, and teaching software vulnerabilities in student-submitted code.

Rather than treating vulnerability detection as a static analysis task, the system frames security learning as an **interactive educational workflow**. It uses contextual information from course materials and assignment prompts to generate vulnerability variants that are relevant to the student’s code, then evaluates which injected weakness would create the most meaningful learning opportunity.

---

## What I Built

I designed and implemented an end-to-end workflow composed of four coordinated agents:

- **CWE Injector** — introduces realistic vulnerability variants into student code
- **CWE Evaluator** — scores each injected version across educational criteria
- **CWE Ranker** — selects the strongest candidate using weighted scoring and rationale
- **Learning Outcome Generator** — produces student-facing feedback and assessment artifacts

The overall goal was to create a system that connects **LLM reasoning, code transformation, and pedagogical evaluation** in a single research pipeline.

---

## System Design

The architecture is organized as a staged pipeline:

- **Input Layer** → student code, course context, assignment context, and CWE metadata
- **Injection Layer** → minimally modifies code to introduce a relevant 2024 Top 25 CWE
- **Evaluation Layer** → scores each variant for relevance, pedagogical value, appropriateness, and naturalness
- **Ranking Layer** → resolves the best candidate using weighted scoring and rationale
- **Learning Layer** → generates structured educational feedback, including explanatory artifacts and assessment questions

This design makes the system more than a vulnerability generator. It functions as an **AI-assisted instructional framework** for teaching secure software development.

---

## Technical Focus

This project sits at the intersection of:

- Applied AI and agentic workflows
- Secure software engineering
- Educational technology
- Structured evaluation pipelines

It reflects my interest in building systems that use AI not just to automate tasks, but to produce **context-aware educational value**.

---

## Outcome

The system demonstrates how multi-agent AI can be used to transform student code into a guided learning experience.

Instead of only identifying weaknesses, it helps answer higher-level questions such as:

- Which vulnerability is most educational in this context?
- How should it be explained to the student?
- What kind of follow-up assessment reinforces learning?

This project showcases my work in combining **LLM systems, software engineering, and research-driven educational design** into a reproducible AI pipeline.