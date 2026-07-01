%macro dent_base(yr=);
%local start stop;
%let start = %sysfunc(inputn(01JAN&yr., date9.));
%let stop  = %sysfunc(inputn(31DEC&yr., date9.));

proc sql;
    create table dent_mcd_&yr. (drop = age) as
		select distinct
				'MCD' as payer_type length 10
				, ME164A_HealthPlan as MCD_Category length 10
				, &mem_varis.
				, floor(yrdif(ME014_MemberDateOfBirth, "31DEC&yr."d, 'actual')) as age /*used for eligibility ONLY*/
		from apcdclms.apcd_member25b
		where me001_submitter = '99MCD1'
			and ME162A_DateOfFirstEnrollment le &stop.
			and ME163A_DateOfDisenrollment ge &start.
			and ME164A_HealthPlan not in ('TITLV','PACE','QMB','DDS','QI-1','SLMB','QDWI','ALFW','ARCHC','AUTSM','DDWVR') /*no dental*/
			and not (((calculated age lt 19 or calculated age ge 21) and ME164A_HealthPlan in ('ABP','IABP','FRAIL','HCIP')) /*19 and 20 ONLY*/
					OR (calculated age gt 18 and ME164A_HealthPlan = 'AR1') /*0 to 18 ONLY*/
					or (calculated age ge 21 and ME164A_HealthPlan = 'TEFRA') /*under 21 ONLY*/
					or (calculated age lt 16 and ME164A_HealthPlan = 'WD') /*working disabled covers from age 16*/
					or (calculated age lt 19 and ME164A_HealthPlan in ('MLTA','SSI','PW','PWPE'))) /*only ADULT COVERAGE */
			and not (ME164A_HealthPlan contains "NOHLTH" )
			and ME013_MemberGender ne "U"
			and ME014_MemberDateOfBirth > "01Jan1910"d;

	create table dent_com_&yr. as /**/
		select distinct
				 case
					when prxmatch("/^\d{5}\w\w\d{7}\-?(32|36|11|21|41|61|81)/", Me992_HIOS_ID) = 1 then "MCD QHP"
					when me001_submitter = '99EBD1' OR (me001_submitter = '95442' and prxmatch("/(A|P)SE[^A]/i",ME032_GroupName) =1) then 'EBD'
					when ME001_submitter in ('16256','16244') or (ME001_submitter in ("17096", '60217')
							and ME003_InsuranceType_ProductCode = 'MCD' and ME030_MarketCategory = 'GPL') then "PASSE"
					when (ME003_InsuranceType_ProductCode in ('HN','HS','MCR','MA','MB','MDV','MH','MHO','MI','MPO')
							or me001_submitter in ('10155','60054M')) then 'MCR ADV'
					when prxmatch("/^\d{5}\w\w\d{7}\-?(0[0123456])/", Me992_HIOS_ID) = 1 then 'QHP'
					else 'COM'
				end as payer_type length 10
				, "" as MCD_Category length 10
				, &mem_varis.
		from apcdclms.apcd_member25b
		where ME162A_DateOfFirstEnrollment le &stop. and ME163A_DateOfDisenrollment ge &start.
			and me001_submitter not in ('99MCD1','99CAR1',"99MDI1", "99MDI2","99MDI3","99MDI4","99MDI5",
					"99MAG1",'99PRM1','99SSC1', "12231",'99NAV1','99ESA1') /*remove PBMs and MCD*/
			and ME003_InsuranceType_ProductCode not in ('PBM')
			and not (ME001_Submitter = "95448B"  and ME032_GroupName = "ARBenefits") /*remove EBD TPA to avoid duplicate claims*/
			and not (ME164A_HealthPlan contains "NOHLTH")
			and ME020_DentalServicesIndicator = 1;
quit;

data dent_all_&yr.;
    set dent_mcd_&yr. dent_com_&yr.;
run;

%mend dent_base;
