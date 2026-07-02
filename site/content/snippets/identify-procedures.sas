/*For procedure codes*/
case
  when (MC055_ProcedureCode in (&cptcodesofinterest.)
    %do j = 1 %to 13;
      %let proc = %scan((&proc_list.),&j,"(),",q);
    or &proc. in (&hipicd.)
    %end;) then 'Procedure'
  when (MC055_ProcedureCode in (&kneecpt.)
    %do j = 1 %to 13;
      %let proc = %scan((&proc_list.),&j,"(),",q);
    or &proc. in (&kneeicd.)
    %end;) then 'Knee'
end as proc_type

/*For diagnosis codes*/
case when MC041_PrincipalDiagnosis in (&dxcodesofinterest.)
               %do i = 2 %to 13;
                   %let diag = %scan(&diaglist., &i., %str( ));
                   or &diag. in (&dxcodesofinterest.)
               %end;
               then 1
               else 0
  end as dx_flag
