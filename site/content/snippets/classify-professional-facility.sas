proc sql;
    create table ssdrive.hipknee_pos as
        select *
        , case when MC094_TypeOfClaim = 'INP' then "Inpatient facility claim"
               when MC094_TypeOfClaim = 'OUT' then "Outpatient facility claim"
               when MC094_TypeOfClaim = 'PTB' then 'Professional claim'
               when MC094_TypeOfClaim = '002' and prxmatch("/^11/", MC036_TypeOfBill_Institutional) = 1
                    then "Inpatient facility claim"
               when MC094_TypeOfClaim = '002'
                    and (   prxmatch("/^13/", MC036_TypeOfBill_Institutional) = 1
                         or prxmatch("/^14/", MC036_TypeOfBill_Institutional) = 1
                         /*technically "other" type of claim, but using as outpatient here*/)
                    then "Outpatient facility claim"
               when MC094_TypeOfClaim = '001' then 'Professional claim'
               else 'Other facility claim'
          end as Fac_or_Prof
        from <source_claims_table>
    ;
quit;
