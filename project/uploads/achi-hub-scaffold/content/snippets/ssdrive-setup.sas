/* SSDrive path setup — one named subfolder per project */
/* F drive: SASWORK | D drive: claims | E drive: SSDdrive  */
%let ssdpath = F:\SSDdrive\<project name>;
libname ssdrive "&ssdpath.";
