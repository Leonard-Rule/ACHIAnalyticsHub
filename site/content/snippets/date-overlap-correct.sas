proc sql;
	create table ssdrive.claims_concurrent as
		select distinct b.studyid, b.eventid, b.event_category, a.*, b.startdate, b.enddate
		from _claims_raw_&yr. a left join Claimsofinterest b on a.newid=b.newid
		where (a.MC059_dateofservicefrom le b.startdate le a.MC060_dateofservicethru)  /* 1. Claim spans/encompasses the event (starts before, ends after) */
			or (b.startdate le a.mc059_dateofservicefrom le b.enddate) /* 2. Claim FROM date falls within the event window */
			or (b.startdate le a.mc060_dateofservicethru le b.enddate) /* 3. Claim THRU date falls within the event window */
		  ;
quit;
