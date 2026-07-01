*------ ASSIGN PAYER_TYPE FOR EACH YEAR  ------;
%macro build_medcov(years = 2017 2018 2019 2020 2021 2022 2023);
%local i yr;
%let i = 1;
%let yr = %scan(&years, &i);

%do %while (&yr ne );

    *------ COMMERCIAL ------;
/*17:1,673,214; 18:1,633,599; 19:1,843,473; 20:1,851,318; 21:1,771,236; 22:1,801,410; 23:1,729,789 */
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

/*17:1,346,666; 18:1,381,545; 19:1,382,102; 20:1,363,867; 21:1,417,653; 22:1,446,208; 23:1,333,132*/
    data ssdrive.com_&yr._test;
        set com_&yr.;
        by newid PeriodEndingDate ME162A_DateOfFirstEnrollment;
        if last.newid then output;
    run;

    *------ MEDICAID ------;
/*17:1,945,560; 18:2,138,811; 19:1,999,690; 20:1,759,082; 21:2,900,136; 22:2,402,194; 23:2,598,512*/
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
/*17:1,347,234; 18:1,304,901; 19:1,248,264; 20:1,215,324; 21:1,251,394; 22:1,318,836; 23:1,375,781*/
    data ssdrive.mcd_&yr._test;
        set mcd_&yr.;
        by newid periodendingdate ME162A_DateOfFirstEnrollment;
        if last.newid then output;
    run;

    *------ MEDICARE ADVANTAGE ------;
/*17:245,626; 18:275,472; 19:347,758; 20:432,912; 21:530,771; 22:574,907; 23:678,950*/
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

/*17:145,239; 18:185,884; 19:208,807; 20:268,909; 21:320,544; 22:361,584; 23:422,609 */
    data ssdrive.mcradv_&yr._test;
        set mcradv_&yr.;
        by newid periodendingdate ME162A_DateOfFirstEnrollment;
        if last.newid then output;
    run;

    *------ MEDICARE FEE FOR SERVICE ------;
/*17:680,344; 18:695,068; 19:703,401; 20:713,438; 21:738,767; 22:746,066; 23:737,563*/
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
/*17:654,612; 18:665,080; 19:674,208; 20:684,219; 21:704,637; 22:710,563; 23:699,743*/
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
