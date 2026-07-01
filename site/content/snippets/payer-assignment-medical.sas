*------ ASSIGN PAYER_TYPE FOR EACH YEAR  ------;
%macro build_medcov(years = 2017 2018 2019 2020 2021 2022 2023);
%local i yr;
%let i = 1;
%let yr = %scan(&years, &i);

%do %while (&yr ne );

    *------ COMMERCIAL ------;
    proc sql;
        create table com_&yr. as
            select distinct compress(ME001_Submitter||ME107_CarrierSpecificUniqueMembe) as newid
                , compress(ME998_APCDUniqueId||ME013_MemberGender||put(ME014_MemberDateOfBirth,date9.)) as studyid
                , case
                    when prxmatch("/^\d{5}\w\w\d{7}\-?(32|36|11|21|41|61|81)/", Me992_HIOS_ID) = 1 then 'MCD QHP'
                    when me001_submitter = "99EBD1" OR (ME001_Submitter = "95442" and prxmatch("/(A|P)SE[^A]/i", ME032_GroupName) = 1) THEN "EBD"
                    when (ME001_submitter in ('16256','16244')
                        OR (ME001_submitter in ('60217','17096') and ME003_InsuranceType_ProductCode = 'MCD' and ME030_MarketCategory = 'GPL')) then "PASSE"
                    when prxmatch("/^\d{5}\w\w\d{7}\-?(0[0123456])/", Me992_HIOS_ID) = 1 then 'QHP'
                    else 'COM'
                end as payer_type length 20
                , &mem_varis.
            from apcdclms.apcd_member25b /*change this when needed*/
            where (ME162A_DateOfFirstEnrollment le "31DEC&yr."d and ME163A_DateOfDisenrollment ge "01JAN&yr."d)
                and ME003_InsuranceType_ProductCode not in ('PBM','DNT','MD','HN','HS','MCR','MA','MB','MDV','MH','MHO','MI','MPO')
                and ME001_Submitter not in ("99MCD1","60054M","10155","99MDI1","99MDI2","99MDI3","99MDI4","99MDI5",
                                            "99NAV1",'99PRM1','99ESA1',"99CAR1","99MAG1","99SSC1","12231",
                                            "67369F","70408","99DAR1",'47155','70580','67369D')
                and not (ME001_Submitter = "95448B" and ME032_GroupName = "ARBenefits")
                and not (ME164A_HealthPlan contains "NOHLTH")
                and ME014_MemberDateOfBirth > "01Jan1910"d
                and ME013_MemberGender ne "U"
            order by newid, PeriodEndingDate, ME162A_DateOfFirstEnrollment;
    quit;
	
    data ssdrive.com_&yr._test;
        set com_&yr.;
        by newid PeriodEndingDate ME162A_DateOfFirstEnrollment;
        if last.newid then output;
    run;

    *------ MEDICAID ------;
    proc sql;
        create table mcd_&yr. as
            select distinct compress(ME001_Submitter||ME107_CarrierSpecificUniqueMembe) as newid
                , compress(ME998_APCDUniqueId||ME013_MemberGender||put(ME014_MemberDateOfBirth,date9.)) as studyid
                , case
                    when ME164A_HealthPlan = "HCIP" then "HCIP"
                    else "MCD"
                end as payer_type length 20
                , &mem_varis.
            from apcdclms.apcd_member25b
            where (ME162A_DateOfFirstEnrollment le "31DEC&yr."d and ME163A_DateOfDisenrollment ge "01JAN&yr."d)
                and me001_submitter = "99MCD1"
                and ME014_MemberDateOfBirth > "01Jan1910"d
                and ME013_MemberGender ne "U"
            order by newid, PeriodEndingDate, ME162A_DateOfFirstEnrollment;
    quit;
	
    data ssdrive.mcd_&yr._test;
        set mcd_&yr.;
        by newid periodendingdate ME162A_DateOfFirstEnrollment;
        if last.newid then output;
    run;

    *------ MEDICARE ADVANTAGE ------;
    proc sql;
        create table mcradv_&yr. as
            select distinct compress(ME001_Submitter||ME107_CarrierSpecificUniqueMembe) as newid
                , compress(ME998_APCDUniqueId||ME013_MemberGender||put(ME014_MemberDateOfBirth,date9.)) as studyid
                , 'MCR Adv' as payer_type length 20
                , &mem_varis.
            from apcdclms.apcd_member25b
            where (ME162A_DateOfFirstEnrollment le "31DEC&yr."d and ME163A_DateOfDisenrollment ge "01JAN&yr."d)
                and (ME003_InsuranceType_ProductCode in ('HN','HS','MCR','MA','MB','MDV','MH','MHO','MI','MPO')
                    OR (me001_submitter in ('10155','60054M') AND ME018_MedicalServicesIndicator = 1))
                and ME001_submitter not in ("99CAR1")
                and not (ME164A_HealthPlan contains "NOHLTH")
                and ME014_MemberDateOfBirth > "01Jan1910"d
                and ME013_MemberGender ne "U"
            order by newid, PeriodEndingDate, ME162A_DateOfFirstEnrollment;
    quit;
	
    data ssdrive.mcradv_&yr._test;
        set mcradv_&yr.;
        by newid periodendingdate ME162A_DateOfFirstEnrollment;
        if last.newid then output;
    run;

    *------ MEDICARE FEE FOR SERVICE ------;
	proc sql;
        create table mcrffs_&yr. as
            select distinct compress(ME001_Submitter||ME107_CarrierSpecificUniqueMembe) as newid
                , compress(ME998_APCDUniqueId||ME013_MemberGender||put(ME014_MemberDateOfBirth,date9.)) as studyid
                , 'MCR FFS' as payer_type length 20
                , &mem_varis.
            from mcrclms.mcr_bene
            where (ME162A_DateOfFirstEnrollment le "31DEC&yr."d and ME163A_DateOfDisenrollment ge "01JAN&yr."d)
                and ME014_MemberDateOfBirth > "01Jan1910"d
                and ME013_MemberGender ne "U"
            order by newid, PeriodEndingDate, ME162A_DateOfFirstEnrollment;
    quit;
	
   data ssdrive.mcrffs_&yr.;
        set mcrffs_&yr.;
        by newid periodendingdate ME162A_DateOfFirstEnrollment;
        if last.newid then output;
    run;

    %let i = %eval(&i + 1);
    %let yr = %scan(&years, &i);

%end;

%mend build_medcov;

%build_medcov(years = 2017 2018 2019 2020 2021 2022 2023);
