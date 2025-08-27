---
name: Feature Request
description: Suggest a new feature or enhancement
title: "[FEATURE] "
labels: ["enhancement"]
assignees: []
body:
  - type: textarea
    id: summary
    attributes:
      label: Summary
      description: A brief summary of the feature request
      placeholder: What would you like to see added?
    validations:
      required: true

  - type: textarea
    id: problem
    attributes:
      label: Problem/Use Case
      description: What problem would this feature solve?
      placeholder: Describe the problem this feature would address
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Proposed Solution
      description: Describe your proposed solution
      placeholder: How should this feature work?
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternative Solutions
      description: Have you considered any alternative solutions?
      placeholder: List any alternative approaches you've considered

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Add any other context or screenshots about the feature request
      placeholder: Any additional information, mockups, etc.
---

<!-- Thank you for suggesting a feature! This helps us understand what our users need. -->