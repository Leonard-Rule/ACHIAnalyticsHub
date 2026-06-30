/* County of residence — most recently updated county per year   */
/* Uses geoinfo.clean_county_xwalk for ZIP-to-county mapping    */
proc sql;
  create table _member_county as
  select distinct
    a.studyid,
    &yr. as year,
    b.county_name,
    b.county_fips
  from _members as a
  left join geoinfo.clean_county_xwalk as b
    on a.zip = b.zip
  where a.updated_dt = (
    select max(c.updated_dt)
    from _members as c
    where c.studyid = a.studyid
      and year(c.updated_dt) = &yr.
  );
quit;
/* N = _____ rows */
