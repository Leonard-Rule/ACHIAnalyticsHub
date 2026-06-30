/* Always UNION ALL when stacking yearly tables              */
/* UNION silently drops legitimate duplicate rows            */
proc sql;
  create table _all_claims as
  select * from apcdclms.claims2021
  union all
  select * from apcdclms.claims2022
  union all
  select * from apcdclms.claims2023
  union all
  select * from apcdclms.claims2024;
quit;
/* N = _____ rows */
