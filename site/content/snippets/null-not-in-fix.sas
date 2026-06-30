/* Instead of NOT IN — restructure as LEFT JOIN + IS NULL     */
/* NULLs in a NOT IN list cause ALL rows to silently fail     */
proc sql;
  select distinct a.*
  from population as a
  left join exclusion_list as b
    on a.studyid = b.studyid
  where b.studyid is null;
quit;
