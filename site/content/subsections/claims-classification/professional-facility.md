## Classify claims using MC094_TypeOfClaim and bill type
id: prof-facility-snippet
type: code
snippet: classify-professional-facility

Use MC094_TypeOfClaim and MC036_TypeOfBill_Institutional to classify each claim as Inpatient facility, Outpatient facility, Professional, or Other. INP/OUT/PTB map directly; '002' claims are further split by bill type prefix (11 = inpatient, 13/14 = outpatient); '001' = professional.
