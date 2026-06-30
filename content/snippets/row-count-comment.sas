/* Row count from log goes immediately after the table creation  */
/* This is a team standard — lets validators check independently */
proc sql;
  create table ssdrive.hipknee_events_final as
  select distinct * from _events_dedup;
quit;
/* N = 45,231 rows */
