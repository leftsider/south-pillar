# Operations, redesigned around what the company is actually trying to do

*By Bryan Collick. June 2026.*

Most growth-stage companies operate the layer underneath audit, compliance, and reporting as if it were a periodic project rather than a designed system. The result is cost that doesn't protect anything in particular — visible cost on the budget, invisible cost on the calendar in the form of fire drills, spikes, and work reconstructed under deadline when the next external trigger arrives.

It isn't subtle when it's happening. The week before an audit evidence cutoff, four engineers stop building product to assemble screenshots. The Friday before the board meeting, the GC rewrites a vendor risk policy that has never been used in vendor selection. The Tuesday after a strategic customer's security questionnaire arrives, someone realizes the answer to question 47 is different from what the company told the last customer that asked. The week before quarter-close, the controller is reconstructing the engineering classifications underneath a material book of capitalized R&D from email threads rather than from documented evidence.

This is not an operating layer. It is an operational posture, performed periodically, reconstructed under deadline.

## The thesis

Every company exists to make money in a specific way. Policies address the risk of doing business that way. Controls operationalize those policies. Processes execute those controls. Continuous review keeps the chain honest.

When the chain is intact, the operational layer underneath audit, compliance, finance, and risk is a property of how the company operates. The audit becomes a confirmation exercise. The customer security review is answered from the same evidence the company already produces for itself. The financial-reporting milestone is met from reconciled books, not from a quarter-end reconstruction. The regulator's question is one the company has already been asking.

When the chain is broken — and in most growth-stage companies, it is broken in at least two places — the layer is an event the company responds to. The cost shows up as the reactive tax: a tax on calendars, on engineering velocity, on executive attention, and on the patience of the people inside the function who can see what is wrong but cannot fix it from where they sit.

## The five links

The chain has five links. Each one anchors the link below it.

**Goals** are the top link. A goal is how the company makes money, stated in one sentence, in plain language, in 30 words or fewer, agreed in writing by the executive team, specific enough to falsify. A goal stated as "grow enterprise revenue" cannot anchor a control. A goal stated as "land and expand within Fortune 500 enterprise accounts, deal sizes above $250K ACV, contracted in standard MSA form" can.

**Policies** name the risks that come with the goal. Selling into Fortune 500 enterprises means customer security reviews, vendor risk programs, contractual data-handling obligations, and SLAs that survive an outage. Operating a material book of capitalized R&D means a different set of surfaces: documented engineering classifications, period-close evidence, finance-and-engineering reconciliation. Each is a risk surface. A policy says, in one paragraph, what the company will and will not do at that surface. Most policies in growth-stage companies are inherited from a template, a former auditor, or a previous employer of whoever wrote them. Policies inherited that way cover risks the company doesn't run, and miss risks it does.

**Controls** are the mechanisms that enforce policies, plus the evidence the mechanisms ran. A policy that says "production data is never copied to developer environments" is a sentence. The control is the mechanism — a deployment pipeline guardrail, a database access boundary, an alert when the boundary is crossed — and the log that demonstrates the mechanism is operating. Controls fail in two directions: they enforce things no policy actually requires (control debt) or they fail to enforce things the policy does require (control gap). External reviewers catch the second kind. Nothing catches the first kind except a practitioner who notices the company spending engineering hours on a control no policy needs.

**Processes** are how controls actually get executed by the people doing the work. A control without a process is a slide deck. A process without a control is a habit. The work of this link is to write the process down at the granularity of a new hire's first week, then watch what happens when the new hire follows it. Where the written process and the observed process diverge, one of the two is wrong. Both possibilities are common.

**Continuous review** is the link that fails first when leadership changes, headcount tightens, or a quarter goes sideways. It is also the link that determines whether the other four hold. Continuous review is not a periodic audit, a quarterly committee, or a tool dashboard. It is a standing operational cadence — typically monthly — where the practitioner responsible for the chain reads the evidence from the prior cycle, names what changed, and decides whether anything upstream needs to be rewritten.

## Why this is design work, not project work

The instinct, when the operational layer is paying the reactive tax, is to fix it with a project. Hire a consultancy. Buy a platform. Run a 90-day initiative. Declare the function modernized.

The instinct is wrong. A project produces a deliverable. A deliverable, by definition, is a thing that gets handed over. The operational layer underneath audit, compliance, finance, and risk does not need a thing handed over. It needs the company to operate differently — and that change has to be designed into how policies are written, how controls are selected, how processes are documented, how the monthly review actually runs.

Design work has different properties than project work. It is slower at the start, because the questions it asks are harder ("how does this company make money") than the questions a project asks ("what does this control set require"). It produces outputs that look smaller (a one-sentence goal statement, a one-paragraph policy) than the outputs a project produces (a 200-page policy library inherited from a template). And it produces results that compound, because each link, once anchored, takes less work to maintain than to build.

The audit becomes a confirmation exercise. The customer security review is answered from the same evidence the company already produces for itself. The financial-reporting milestone is met from reconciled books. The regulator's question is one the company has already been asking.

## What this is not

This is not a software product. Tooling underneath a broken chain produces faster evidence of a still-broken operation.

This is not a 60-day fix. A full design engagement runs 10 to 14 weeks, plus implementation. Companies under deadline pressure should start with The Diagnostic, scoped to the specific event on the calendar.

This is not a substitute for senior compliance, legal, security, or finance talent. The method depends on those people existing and being good at their jobs. It changes what they spend their time on, not whether they are needed.

This is not a workshop. Two-day offsites decay within a quarter.

This is not a one-time project. Continuous review is the fifth link by design. Disband it and the company is back to where it started within eighteen months.

## What is on the other side

An operational layer that produces defensible outcomes as a byproduct of normal work, instead of as a periodic fire drill. A policy library that is half the size of the one it replaced and twice as enforceable. A control set that maps cleanly to the company's actual risks rather than to a generic checklist. A process documentation cadence that survives the next reorg. A monthly review that the executive responsible for the layer actually runs, instead of the one they keep meaning to schedule.

The reactive tax goes away. The visible cost on the budget goes down. The invisible cost on the calendar goes down further.

That is the work South Pillar exists to do.

---

*Bryan Collick founded South Pillar to redesign the layer of operations that audit, compliance, finance, and risk depend on. The method is called Goal-Anchored Operations. To request The Briefing, email bryan@southpillarllc.com. southpillarllc.com.*
