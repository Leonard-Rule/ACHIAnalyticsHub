case
  when (MC055_ProcedureCode in (&hipcpt.)
    %do j = 1 %to 13;
      %let proc = %scan((&proc_list.),&j,"(),",q);
    or &proc. in (&hipicd.)
    %end;) then 'Hip'
  when (MC055_ProcedureCode in (&kneecpt.)
    %do j = 1 %to 13;
      %let proc = %scan((&proc_list.),&j,"(),",q);
    or &proc. in (&kneeicd.)
    %end;) then 'Knee'
end as proc_type
