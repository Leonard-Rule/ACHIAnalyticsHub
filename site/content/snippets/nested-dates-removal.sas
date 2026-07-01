/*remove nested dates*/
%macro nonestloop;

	data ip_nonest_dates;
	set ip_basic_dates;
	by mpid;
	ipstartlast = lag(ip_start);
	ipendlast = lag(ip_end);
	if first.mpid = 0 then do;
		if ip_start ge ipstartlast and ip_end le ipendlast then delete;
	end;
	format ipstartlast ipendlast date9.;
	run;

	%do %until (&lastlength = &nowlength);

		proc sql; select count(*) into :lastlength from ip_nonest_dates; quit;

		data ip_nonest_dates;
		set ip_nonest_dates;
		by mpid;
		ipstartlast = lag(ip_start);
		ipendlast = lag(ip_end);
		if first.mpid = 0 then do;
			if ip_start ge ipstartlast and ip_end le ipendlast then delete;
		end;
		format ipstartlast ipendlast date9.;
		run;

		proc sql; select count(*) into :nowlength from ip_nonest_dates; quit;

	%end;
%mend nonestloop;

%nonestloop; /*118,275*/



/*creating sequence*/
data ip_seqs;  /**/
	set ip_nonest_dates;
	by mpid ip_start ip_end ;
	if first.mpid then seq = 1;
	else seq+1;
run;

proc sort data=ip_seqs;
by mpid seq;
run;

data ip_seqs_2; /**/
	set ip_seqs;
	by mpid seq;
	format discharge date9.;
	discharge = lag(ip_end);
	prev_discharge_status = lag(MC023_FinalDischargeStatus);
	length_of_stay=intck('day',ip_start,ip_end);
	if seq = 1 then	gap = .;/*sequence will be used to collect discharge date before/after gaps as needed*/
	if seq ne 1 then gap = intck('day',discharge,ip_start);
	drop discharge;
run;

/*any second visit that's within 30 days of a visit is rolled together with the first for followup eval*/
data mpid_index_seq_ref;
	set ip_seqs_2;
	by mpid;
	if first.mpid then seqnew = 1;
	if gap le 30 then seqnew = seqnew;
	if gap > 30 then seqnew+1;
run;

/*any second visit that's within 1 day of a visit is rolled together with the first for full eval*/
data mpid_index_seq_full;
	set ip_seqs_2;
	by mpid;
	if first.mpid then seqnew = 1;
	if gap le 1 then seqnew = seqnew;
	if gap > 1 then seqnew+1;
run;

/*readmits within 30 days but more than 1 day*/
/*these are excluded from our outpatient eval*/
proc sql; /*20,377*/
	create table ssdrive.ip_30day_readmits as
		select distinct *
		from mpid_index_seq_ref
		where 30 ge gap > 1;
quit;

proc sql; /*56,482- these were ed claims that went straight to ip, these should be excluded for all*/
	create table rdrive.ed_into_ip as
		select distinct a.MPID, b.MC059_DateOfServiceFrom as ip_start, a.MC059_DateOfServiceFrom as date_of_service
		from ssdrive.ed_bh_claims a left join ssdrive.ip_bh_claims b on a.MPID=b.MPID
		where intnx('day', b.MC059_DateOfServiceFrom, -1) = a.MC059_DateOfServiceFrom or a.MC059_DateOfServiceFrom = b.MC059_DateOfServiceFrom;
quit;
