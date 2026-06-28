# South Pillar mockup — v2 changelog

**Pass:** Copy correction from v1 (compliance-anchored framing) to v2 (methodology-anchored framing). Visual design, layout, CSS, JS, assets, IA, file structure, and the five-link chain block are unchanged. The job was a careful prose pass per `mockup_correction_prompt_v1.md`.

---

## Pages changed

### index.html
- `<title>` shortened: removed "for regulated SaaS"; title is now methodology-only.
- Meta description rewritten per spec.
- Hero H1 changed from "Compliance, redesigned…" to **Candidate A**: "Operations, redesigned around what the company is actually trying to do." **Candidate B** ("The layer that audit and compliance depend on, redesigned…") is preserved in the annotation drawer for Bryan to choose before launch.
- Hero lead replaced with the broadened "layer of operations that audit, compliance, finance, and risk all depend on" framing.
- "The work" block opens with the new methodology-anchored paragraph; the "working chain" and "stops paying twice" sentences carry over from v1 verbatim.
- "The fit" block rewritten end-to-end: drops all named regulations (SOC 2, ISO 27001, PCI, HIPAA), drops "enterprise SaaS" as a category constraint, and replaces with three trigger conditions (externally-anchored event 60–180 days out; recently-hired senior leader walking into thin infrastructure; guidance/regulatory change forcing redesign).
- "The first step" — single phrase swap: "executive responsible for the function" → "executive responsible for the operational layer."
- Annotation drawer updated: v2 callout, hero-candidate note, placeholders note, "No named regulations or standards" added to the intentionally-absent list.

### methodology.html
- Policies section: example broadened. Now contrasts Fortune 500 enterprise selling (security reviews, vendor risk, data handling) against operating a material book of capitalized R&D (engineering classifications, period-close evidence, finance-and-engineering reconciliation). Demonstrates the broadened framing inside the methodology itself.
- "What Goal-Anchored Operations is not" — Audit Readiness sentence struck. Replaced with: "Companies under deadline pressure should start with The Diagnostic, scoped to the specific event on the calendar."
- Talent line broadened: "senior compliance, legal, security, or finance talent" (added finance).
- **New FAQ block added** between the "Continuous review" subsection and "What Goal-Anchored Operations is not" — two questions, each with a lift-able 100–200 word answer: "What does South Pillar redesign?" and "Who is South Pillar for?" Renders as serif H3s inside the standard `.block` structure; no new CSS classes introduced.
- Annotation drawer updated (v2 callout, placeholders note, no-named-regulations bullet).

### engagements.html
- Meta description tightened to spec ("Each anchored…" — dropped the redundant "one").
- The Briefing "For:" line broadened: now lists CFOs, Controllers, COOs, GCs, CCOs, CISOs, Chief of Staff equivalents, founders at Series B–D (no "SaaS"); replaced "compliance function paying for itself twice" with "operational layer underneath audit, compliance, or reporting is paying for itself twice."
- The Diagnostic body rewritten: now described as "a four to six week scoped assessment of one operational domain, anchored to an externally-driven event 60 to 180 days out." Spells out that the chain is mapped *inside that domain* end-to-end. Adds "15 to 25 page" output spec.
- The Diagnostic "Audit Readiness variant" paragraph struck entirely. No replacement variant added — the Diagnostic is one product, scoped per engagement.
- The Diagnostic "For:" line broadened: externally-anchored event 60–180 days out; senior compliance, legal, security, or finance leadership in seat.
- The Design Engagement body: "rebuild the compliance function" → "rebuild the operational layer underneath audit, compliance, finance, and risk."
- The Steady State and The Build untouched.
- Annotation drawer updated (v2 callout, placeholders note, no-named-regulations bullet).

### writing.html
- Meta description rewritten per spec.
- Lead paragraph broadened: "compliance and operations" / "growing SaaS companies" → "operational layer underneath audit, compliance, finance, and risk" / "growth-stage companies." Audience phrasing tightened: "executive responsible for the function" → "executive responsible for the layer."
- Essay title renamed to match new hero: "Operations, redesigned around what the company is actually trying to do."
- Essay summary rewritten per spec — opens on "periodic project rather than a designed system" frame.
- Annotation drawer updated (v2 callout, placeholders note, no-named-regulations bullet).

### about.html
- Meta description rewritten per spec.
- Credential paragraph (line 38 in v1) replaced in full: now itemizes Braze work (vendor governance framework from scratch, capitalized R&D under clean-audit controls, M&A integration, Looker-based reporting), LendUp ("active state regulatory examination" — no regulator named), and Babylon Health (self-certification). Closes on the through-line being the operational layer, not the regulation.
- "The practice exists because the work has a shape" paragraph broadened. The patterned-failure list is unchanged; the framing sentence around it is methodology-anchored.
- Selected experience Braze line replaced per spec: "Operational governance, vendor governance, capitalized R&D controls, M&A integration, and Looker-based reporting, through and after IPO."
- LendUp line preserved as-is. The "Additional roles, dates, and one-line scope each" caption note from v1 is also preserved — Babylon Health is named in the credential paragraph but not yet broken out as a separate selected-experience line. **Flagged for Bryan**: decide whether to promote Babylon to its own line.
- Annotation drawer updated (v2 callout, placeholders note, no-named-regulations bullet).

### contact.html
- Per spec, no body-copy changes (page is mechanics-only).
- Annotation drawer updated (v2 callout, placeholders note, no-named-regulations bullet). The drawer mention is the only change on this page.

---

## What I had to invent (read this carefully)

The vast majority of the rewrite pulls verbatim or near-verbatim from `mockup_correction_prompt_v1.md`. The few places where I composed prose rather than transcribed:

1. **FAQ block CSS styling.** The methodology page didn't have an existing FAQ/H3 pattern. I styled the two new question headers inline using the established type system (Source Serif 4, 22px, line-height 1.3, weight 400, 32px top / 12px bottom margin). No new CSS classes were introduced; no existing classes were modified. If you'd rather the questions render differently — e.g., as `.h2` to match the rest of the page, or as accordion-collapsed — that's a one-block edit.

2. **Hero-candidate annotation copy.** The spec said to offer both candidates. I picked Candidate A for the live page (the more directive one) and surfaced Candidate B inside the annotation drawer with a one-sentence rationale on the tradeoff. If you'd rather see Candidate B in the hero instead, swap line 35 of `index.html`. No other change required.

3. **The "Placeholders" line in every annotation drawer.** The spec said to add a single line noting the email and canonical link are placeholders. I wrote it as a standalone paragraph at the bottom of "What you're looking at" on each page. The phrasing is mine, but it carries no positioning claim — it's just a flag.

4. **The "No named regulations or standards. The methodology is the product." bullet** appears in every page's "What's intentionally absent" list. The exact phrasing comes from the spec.

Everything else — the hero, leads, work block, fit block, Diagnostic body, credential paragraph, fail-patterns paragraph, essay title/summary, Selected Experience line, meta descriptions, FAQ answers, title element — is verbatim or near-verbatim from the substitutions table in `mockup_correction_prompt_v1.md`.

---

## What did NOT change (sanity check)

- CSS, JS, assets, file structure, page count, page names — untouched.
- The five-link chain block markup, the chain copy itself, and the 01–05 numbering — untouched.
- The Briefing / Diagnostic / Design Engagement / Steady State / Build SKU order — untouched.
- The annotation drawer mechanism (the toggle button, the slide-in panel, the close behavior, the Google Sites parity checklist) — untouched.
- The "What's intentionally absent" stance — preserved in full, plus the new sixth bullet.
- The footer with the placeholder email and the placeholder canonical link — untouched per rule 12.
- Header navigation, sticky behavior, mobile breakpoint at 700px — untouched.
- The `data-pplx-inline-edit` blocks (where present) — untouched.

---

*v2 prose pass — June 26, 2026. Visual design and structure carry forward from v1 (June 25, 2026) unmodified.*
