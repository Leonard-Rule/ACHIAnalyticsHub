/* WRONG — CALCULATED alias unreliable in WHERE for complex CASE */
proc sql;
  select studyid,
    case when dx like 'F630%' then 'A'
         when dx like 'Z726%' then 'B'
         else 'C'
    end as category
  from claims
  where calculated category = 'A'; /* unreliable */
quit;

/* CORRECT — wrap in subquery, filter on outer layer */
proc sql;
  select * from (
    select studyid,
      case when dx like 'F630%' then 'A'
           when dx like 'Z726%' then 'B'
           else 'C'
      end as category
    from claims
  )
  where category = 'A';
quit;
