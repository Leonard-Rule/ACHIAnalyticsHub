/* CORRECT — three conditions catch all overlap scenarios         */
where
  /* 1. Claim spans/encompasses the event (starts before, ends after) */
  (a.mc059_dateofservicefrom le b.startdate le a.mc060_dateofservicethru)
  or
  /* 2. Claim FROM date falls within the event window */
  (b.startdate le a.mc059_dateofservicefrom le b.enddate)
  or
  /* 3. Claim THRU date falls within the event window */
  (b.startdate le a.mc060_dateofservicethru le b.enddate)
