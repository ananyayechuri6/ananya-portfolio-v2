# Third-Party Vendor Failures in SEC Cyber Disclosures

A GitHub Pages-ready cybersecurity GRC portfolio project by Ananya Yechuri.

## What this project does

This project analyzes SEC Item 1.05 cybersecurity incident disclosures to determine when “third party” genuinely refers to a vendor, contractor, or fourth party—and when the phrase simply describes the attacker.

The website explains:

- The research question and why keyword matching is unreliable
- A primary-source methodology using SEC EDGAR filings
- Preliminary findings from the first ten screened filings
- The difference between data breaches, access failures, contractor misuse, concentration risk, and fourth-party risk
- Practical TPRM control recommendations
- A filterable evidence table backed by the included Excel tracker

## Project files

- `index.html` — complete case-study page
- `styles.css` — responsive visual design
- `script.js` — filterable evidence tracker
- `tpr_breach_tracker.xlsx` — source research tracker
- `research-notes.md` — working analysis notes

## Important data-quality issue

The working narrative says seven filings are TPRM-relevant. The spreadsheet currently contains six rows marked “Yes,” three excluded rows, and one iRhythm row marked “No” because disclosure detail is insufficient. The website presents this transparently as six confirmed cases plus one insufficient-detail case. Reconcile the classification before presenting a final research count.

## How the page is structured

1. **Hero / research question** — immediately frames the analytical problem.
2. **Problem statement** — explains why “third party” is an ambiguous SEC filing term.
3. **Methodology** — shows a repeatable six-step research process.
4. **Findings** — turns the spreadsheet into clear analytical conclusions.
5. **Visual summary** — communicates screening outcome and vendor-identification rates.
6. **Interactive tracker** — makes the evidence searchable and filterable.
7. **Control implications** — translates research into TPRM actions.
8. **Skills demonstrated** — makes the project useful to GRC recruiters and hiring managers.

## Publish with GitHub Pages

1. Create a new repository or project folder in the existing portfolio repository.
2. Upload every file in this folder together.
3. In GitHub, open **Settings → Pages**.
4. Select the branch and root folder containing `index.html`.
5. Link the project from the portfolio’s main Projects section.

## Suggested portfolio card copy

**Third-Party Vendor Failures in SEC Cyber Disclosures**  
Primary-source analysis of SEC Item 1.05 filings examining vendor failures, disclosure quality, fourth-party risk, contractor access, and concentration risk.

**Tags:** TPRM · GRC · SEC Cybersecurity · Risk Analysis · Excel

## Recommended next research steps

- Expand to roughly 20 confirmed TPRM-relevant filings
- Reconcile the iRhythm classification and headline count
- Add pivots for control-failure category and disclosure-detail level
- Add a field separating data confidentiality, operational availability, fraud, and financial impact
- Preserve primary EDGAR URLs for every record
- Document classification criteria in a small data dictionary
