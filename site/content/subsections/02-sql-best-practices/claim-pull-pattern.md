## Pull with inline subquery, then join for additional fields
id: claim-pull-rule
type: tip
snippet: claim-pull-pattern

Pull claims using an inline subquery in the WHERE clause first, then join for additional fields afterward. This avoids inefficient claim pulls. Also use the &med_varis. macro to select only needed variables; there should be no need to pull entire claim lines.
