/* OVER PARTITION BY not supported in SAS 9.4 PROC SQL         */
/* Replace with a join to a pre-built summary subquery          */

/* Step 1: build year totals */
proc sql;
  create table _year_totals as
  select distinct yr,
    count(*) as yr_total
  from claims
  group by yr;
quit;

/* Step 2: join totals back to get row-level percentage */
proc sql;
  create table _claims_with_pct as
  select distinct a.*,
    b.yr_total,
    a.n / b.yr_total as pct format=percent8.2
  from claims as a
  inner join _year_totals as b
    on a.yr = b.yr;
quit;
