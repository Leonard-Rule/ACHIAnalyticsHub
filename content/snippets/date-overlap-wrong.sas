/* INCORRECT — too narrow, misses claims that span the event     */
/* Only catches claims whose FROM date falls within event window  */
where a.mc059_dateofservicefrom >= b.startdate
  and a.mc059_dateofservicefrom <= b.enddate
