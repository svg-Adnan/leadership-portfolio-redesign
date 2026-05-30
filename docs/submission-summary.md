# Submission Summary

**DT CultureTech — Product Management Assignment**

---

## Overview

This submission presents a redesign of the **Leadership Portfolio** page for an employee growth management platform. The original page functioned as a metric-heavy dashboard displaying isolated KPIs and operational scores. The redesign transforms it into a **narrative-driven career-growth artifact** that helps employees understand their progress, impact, trajectory, and development priorities.

---

## What Was Redesigned

The Leadership Portfolio was restructured around a five-part narrative hierarchy:

1. **Growth** — A hero section communicating overall growth status and monthly narrative
2. **Impact** — Key contributions and achievements as career evidence
3. **Future** — Career outlook with promotion trajectory and timeline
4. **Improvement** — Next growth area with actionable recommendations
5. **Supporting Details** — KPI summaries and challenges behind progressive disclosure

---

## Key Outcomes

- Replaced score-first dashboard with a **growth-first narrative**
- Introduced **progressive disclosure** to manage information complexity
- Made **career trajectory visible** with projected promotion date and readiness percentage
- Reframed operational constraints as **Challenges & Learnings** to support growth mindset
- Maintained **contribution visibility** as career evidence for reviews and mentor discussions
- Built a **functional prototype** with React, Tailwind CSS, and full dark/light mode support

---

## Deliverables

| Deliverable | Description |
|-------------|-------------|
| Functional Prototype | React + Tailwind CSS single-page application |
| README.md | Complete project documentation |
| design-rationale.md | Detailed design decision justifications |
| Screenshots | UI captures of all portfolio sections and interactions |
| Hand-drawn Design Process Document | 13-page PDF documenting the design process from user analysis to final wireframes |

---

## Links

| Resource | URL |
|----------|-----|
| GitHub Repository | `https://github.com/<your-username>/leadership-portfolio-redesign` |
| Live Demo *(optional)* | `<deploy-url-if-applicable>` |

---

## Repository Structure

```
leadership-portfolio-redesign/
├── README.md
├── docs/
│   ├── design-rationale.md
│   └── submission-summary.md
├── screenshots/
│   ├── 00-wireframe-hand-drawn.pdf
│   ├── 01-full-portfolio-dark.png
│   ├── 02-monthly-reflection-expanded.png
│   ├── 03-contributions-expanded.png
│   ├── 04-career-outlook-growth-area.png
│   ├── 05-additional-insights.png
│   ├── 06-kpi-detailed-metrics.png
│   ├── 07-challenges-feedback-expanded.png
│   ├── 08-challenges-collapsed.png
│   └── 09-full-portfolio-light.png
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── KeyContributions.jsx
│   │   ├── CareerOutlook.jsx
│   │   ├── NextGrowthArea.jsx
│   │   └── AdditionalInsights.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── ThemeProvider.jsx
│   ├── App.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Screenshot Naming Guide

Save your uploaded screenshots with these filenames inside the `screenshots/` folder:

| Screenshot | Recommended Filename |
|------------|---------------------|
| Full portfolio view (dark mode) | `01-full-portfolio-dark.png` |
| Monthly Reflection expanded | `02-monthly-reflection-expanded.png` |
| Contribution Portfolio expanded | `03-contributions-expanded.png` |
| Career Outlook + Next Growth Area | `04-career-outlook-growth-area.png` |
| Additional Insights (KPI + Challenges collapsed) | `05-additional-insights.png` |
| KPI Detailed Metrics expanded | `06-kpi-detailed-metrics.png` |
| Challenges & Feedback expanded | `07-challenges-feedback-expanded.png` |
| Challenges & Learnings collapsed | `08-challenges-collapsed.png` |
| Full portfolio view (light mode) | `09-full-portfolio-light.png` |
| Hand-drawn wireframe (PDF) | `00-wireframe-hand-drawn.pdf` |

> **Note on wireframe:** The hand-drawn wireframe is a multi-page PDF. Place it directly in the `screenshots/` folder. GitHub will not render PDFs inline in README, so the README links to it as a downloadable file. If you want inline preview, convert the PDF pages to PNG images (e.g., `00-wireframe-page-1.png`, `00-wireframe-page-2.png`).

---

## Missing Items Checklist

Before submitting, ensure you have:

- [ ] Saved all 9 screenshots to `screenshots/` with recommended filenames
- [ ] Added hand-drawn wireframe PDF as `screenshots/00-wireframe-hand-drawn.pdf`
- [ ] *(Optional)* Converted wireframe PDF pages to PNG for inline rendering
- [ ] Replaced `<your-username>` in README.md and this file with your actual GitHub username
- [ ] *(Optional)* Deployed to Vercel/Netlify and added live demo link
- [ ] Created GitHub repository and pushed all files
- [ ] Verified all screenshot paths render correctly in README.md
- [ ] Excluded `node_modules/` and `dist/` via `.gitignore`

---

*Submitted for the DT CultureTech Product Management assignment.*
