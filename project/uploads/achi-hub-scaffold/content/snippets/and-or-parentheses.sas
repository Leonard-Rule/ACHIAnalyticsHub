/* WRONG — AND binds first, producing unexpected classification */
where condition_a or condition_b and condition_c

/* CORRECT — explicit parentheses make intent unambiguous */
where (condition_a or condition_b)
  and condition_c

/* CORRECT — CASE WHEN example */
case
  when (dx like 'F630%' or dx like 'Z726%')
    and year = 2023
  then 'gambling_dx'
  else 'other'
end as category
