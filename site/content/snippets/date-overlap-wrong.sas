/* Only catches claims whose FROM date falls within the event window  */
proc sql;
	create table ssdrive.claims_concurrent as
		select distinct b.studyid, b.eventid, b.event_category, a.*, b.startdate, b.enddate
		from _claims_raw_&yr. a left join claimsof interest b on a.newid=b.newid
    where a.mc059_dateofservicefrom >= b.startdate
        and a.mc059_dateofservicefrom <= b.enddate
