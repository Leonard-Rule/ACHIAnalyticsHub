## Use SELECT DISTINCT in most PROC SQL queries
id: select-distinct-rule
type: tip

Unless there is a deliberate documented reason not to. This surfaces unintended fan-out early — if row count > distinct ID count, something is causing duplication and we can investigate before continuing.

[tip]
Add the commented-out row count from the log next to the code that created the table. This lets validators confirm they are on the same track. Not needed for every table, but definitely at key tables.
[/tip]
