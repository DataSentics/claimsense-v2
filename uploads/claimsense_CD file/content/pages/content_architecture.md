---
route: /architecture/
page_purpose: Explain the technical platform model and deployment compatibility.
primary_conversion: Book a Demo
status: content-ready
approval_required: architecture, cloud, security and compliance claims
---

# Platform Architecture

ClaimSense is a modern, cloud-native platform built to integrate seamlessly with your existing infrastructure while delivering powerful AI capabilities.

## Architecture flow / diagram labels

- Claims / documents — received from clients
- Business workflow / App — for Humans
- Master claim workspace — one customer context, shared documents and facts
- Specialist workstreams — legal, finance, assessment and other linked responsibilities
- Master end-to-end task — accountable owner with process subtasks supplying missing inputs
- AI agent (Claim handler) — instructions, best practice, available actions
- Claim's core system — states, facts, transaction, results,...
- Fully secure deployment into your cloud of choice
  - Databricks
  - Azure
  - GCP
  - AWS
- Resolved claim cases — to be communicated to clients

**Rebuild note:** Retain the concept and labels, but redesign the diagram entirely in Bull style. Do not reproduce the legacy diagram layout.

## Platform Layers

Each layer of ClaimSense is designed for specific responsibilities, ensuring scalability, maintainability, and seamless integration.

### Business Workflow Layer

The user-facing application layer where claims handlers interact with the system. Provides intuitive interfaces for case management, decision-making, and collaboration.

- Case management dashboard
- Task queues and workflows
- Reporting and analytics
- Master claim workspace and linked specialist workstreams
- Accountable end-to-end tasks and process subtasks

### AI Agent Layer

The intelligence layer powered by LLMs and specialized AI models. Processes claims, extracts information, and provides decision support.

- Document understanding
- Decision recommendations
- Natural language search

### Core System Layer

The data foundation layer storing all claim data, states, and transaction history. Ensures auditability, compliance, and data integrity.

- Claim state management
- Full audit trails
- Data integrations
- Parent-child claim relationships and shared case context
- Permission-aware information sharing across linked workstreams

## Deploy on Your Infrastructure

ClaimSense runs on Databricks and is fully deployable on your existing cloud infrastructure. Leverage your current data platform investments and simplify integration.


ClaimSense runs on Databricks and is deployable in your selected cloud infrastructure.
This deployment model is designed to support enterprise control over data, access and
operations. ClaimSense is built by DataSentics, part of the Bull group.

**Approval required:** Legal/Security must approve this wording before release as a public
European-data-sovereignty statement.

- Databricks — Unified data & AI platform
- Azure — Microsoft Azure Cloud
- GCP — Google Cloud Platform
- AWS — Amazon Web Services

## CTA

### Ready to See It in Action?
Book a demo to see how ClaimSense integrates with your existing infrastructure.

**CTA:** Book a Demo
