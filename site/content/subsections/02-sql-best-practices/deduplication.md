## Avoid PROC SORT combined with NODUPKEY as a general rule
id: nodupkey-avoid
type: remember

NODUPKEY makes it hard to know what rows were dropped. When SAS encounters multiple rows with the exact same values for those BY variables, it retains the first occurrence it finds and deletes the rest. So you want to make sure you are aware of your deduplication grain.

---

## Use FIRST. DATA step logic for top-ranked row
id: first-logic
type: tip
snippet: first-dedup

Typically you will sort by the ID of interest and the ranking variable, then use FIRST.ID in a DATA step to retain exactly one record per ID.

- Step 1 — Sort by ID, then ranking variable (ascending or descending as needed)
- Step 2 — Use a DATA step with FIRST.studyid logic to retain only the first record per studyid
