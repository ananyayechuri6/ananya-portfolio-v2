# Third-Party Vendor Failures in SEC Cyber Disclosures — Working Draft

**Status:** 10 filings screened directly against primary EDGAR text. Target: 15–25 TPRM-relevant filings before drawing final conclusions. This is a working draft, not the finished analysis.

## Methodology

Filings were pulled from the population of Item 1.05 (mandatory, material) cybersecurity incident 8-Ks filed since the SEC's disclosure rule took effect December 18, 2023. A public master list (cross-checked against the Debevoise & Plimpton 8-K Tracker) was used to identify candidates, but **every filing was read directly from its primary 8-K on SEC EDGAR** before being categorized — see Finding 2 below for why that step turned out to matter.

Each filing was screened with one question first: **does "third party" in this filing refer to a vendor/contractor relationship, or to the attacker?** Only filings that clear this bar are counted as TPRM-relevant.

## Findings so far

**1. "Third party" usually means the attacker, not a vendor.**
Frontier Communications and OraSure Technologies both disclose that "an unauthorized third party gained access" — this is standard SEC-filing language for the threat actor, with no vendor relationship involved at all. A dataset built by keyword-matching "third party" without reading the actual sentence would meaningfully overcount vendor-driven incidents. This is a methodology note worth stating up front in any final writeup, and it's arguably the most useful thing to have learned by filing #10 rather than filing #25.

**2. Secondary trackers sometimes add detail the primary filing doesn't contain.**
One aggregator described ADT's August 2024 incident as involving "compromised third-party credentials." The actual 8-K names no vendor or credential source — just "unauthorized actors." Lesson: source every row to the primary filing, even when using a secondary tracker (which was otherwise reliable) to find candidates.

**3. When a vendor genuinely is involved, most filings still withhold its identity.**
BayFirst Financial named the vendor's function (marketing services) but not the company. AT&T named the platform type (cloud) but not the platform (widely reported elsewhere as Snowflake). Coinbase named the relationship (overseas contractor support staff) but not the staffing vendor. Of the 7 genuinely TPRM-relevant filings reviewed, only 2 — 8x8 (naming Klue Labs) and the CDK Global cluster — actually name the vendor. "Type disclosed, identity withheld" looks like the norm, not the exception.

**4. Vendor concentration risk showed up as an earnings event, not a data breach.**
The CDK Global incident is the clearest TPRM story in the sample. One vendor's ransomware incident took down dealer-management systems across the auto retail industry; six dealers (AutoNation, Group 1, Penske, Asbury, Lithia, Sonic) all filed 8-Ks the same week. Only Sonic Automotive escalated from Item 8.01 to Item 1.05, once the sales disruption showed up as a confirmed quarterly earnings hit. This is a fundamentally different failure mode than the others: not compromised data, but single-vendor dependency risk translating directly into P&L.

**5. Fourth-party (Nth-party) risk is almost never named — which is what makes one filing unusual.**
Federal Home Loan Bank of New York's filing explicitly discloses that "a vendor of a Bank vendor" was compromised. Most TPRM programs — including the standard three-tier model — assess direct vendors only. This filing is a real, citable argument for extending assessment scope further down the chain.

## Filings reviewed (7 TPRM-relevant / 3 excluded)

| Filer | TPRM Relevant? | Vendor Named? | Pattern |
|---|---|---|---|
| 8x8, Inc. | Yes | Yes (Klue Labs) | Compromised API integration |
| BayFirst Financial | Yes | Partial (type only) | Vendor notification lag |
| iRhythm Technologies | No detail | — | Insufficient disclosure |
| Sonic Automotive | Yes | Yes (CDK Global) | Vendor concentration → earnings hit |
| Federal Home Loan Bank of NY | Yes | Partial (chain disclosed) | Fourth-party risk |
| AT&T | Yes | Partial (type only) | Access management on vendor platform |
| Coinbase | Yes | Partial (relationship only) | Insider misuse of contractor access |
| Frontier Communications | **Excluded** | — | "Third party" = attacker |
| OraSure Technologies | **Excluded** | — | "Third party" = attacker |
| ADT (Aug 2024) | **Excluded** | — | No vendor mentioned in primary filing |

## Next steps

Continue screening the remaining Item 1.05 filings (Cencora, Halliburton, loanDepot, Krispy Kreme, Crimson Wine Group, UFP Technologies, and 2026 filings not yet checked) against the same TPRM-relevant test. Based on this batch, expect roughly 30–40% of "third party" language to exclude on the attacker-vs-vendor distinction — plan the screening pass accordingly rather than assuming every hit from a keyword search counts.

Once ~20 TPRM-relevant rows are logged: pivot by Control Failure Category, and separately by Disclosure Detail Level. The second pivot may be the more interesting chart — "how often can an outside analyst actually tell what went wrong" is itself a finding about disclosure quality, independent of the control taxonomy.
