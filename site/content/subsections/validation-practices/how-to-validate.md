## Validation checklist — run through these for every program you review
id: validation-checklist
type: sop

When validating someone else's code, work through these steps in order. Each item can be checked off as you complete it.

- [ ] Run each section independently — do not run the entire program end to end as a first step
- [ ] Examine every table that is created
- [ ] Pay particular attention to joins (fan-out risk), unions (column alignment, UNION vs UNION ALL), and any derived variables
- [ ] Confirm that created variables and the resulting output make logical sense
- [ ] Check all commented-out row counts against your own log — if they differ, investigate (sometimes counts are just stale from a re-run and may be benign, but always leave a note)
