## Use %do %while with %scan for year iteration
id: year-loop-rule
type: sop
snippet: year-loop-pattern

Use %do %while with %scan for iterating over year lists. Macro variables should be defined globally before macro calls. Macro-ize the year variable so all years run through identical logic.

[callout tip "Member vs. Person Counting"]
When doing quick counts using newid (member ID), the same person can appear more than once if they have multiple member IDs. This is acceptable for trend analysis but should be documented. This is counting 'members' not 'people'. Counting distinct studyid is required for population-level headcounts.
[/callout]
