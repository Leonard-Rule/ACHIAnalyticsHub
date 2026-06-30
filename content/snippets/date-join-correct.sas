/* WRONG — WHERE filter silently converts LEFT JOIN to INNER JOIN */
left join enrollment as b on a.studyid = b.studyid
where a.svcdate >= b.startdate
  and a.svcdate <= b.enddate

/* CORRECT — date conditions go in the ON clause */
left join enrollment as b
  on  a.studyid  = b.studyid
  and a.svcdate >= b.startdate
  and a.svcdate <= b.enddate
