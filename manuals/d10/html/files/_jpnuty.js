function home_data(strpath, strindexpath)
{
	document.write("<TABLE cellSpacing=\"0\" cellPadding=\"0\" border=\"0\">\n");
	document.write("<TR valign=\"top\">\n");
	document.write("<TD width=\"130\"><IMG src=\"files/_epson.gif\" border=\"0\" alt=\"EPSON\"></TD>\n");
	document.write("<TD width=\"55\"><A href=\"index.htm\"><IMG src=\"files/jpa_ix.gif\" border=\"0\" alt=\"ホーム\"></A></TD>\n");
	document.write("</TR>\n");
	document.write("</TABLE>\n");
}

function head_data(strpath, strindexpath)
{
	document.write("<TABLE cellSpacing=\"0\" cellPadding=\"0\" border=\"0\">\n");
	document.write("<TR>\n");
	document.write("<TD><A href=\"ixp.htm\"><IMG src=\"files/jpa_tp2.gif\" border=\"0\" alt=\"プリント編\"></A></TD>\n");
	document.write("<TD><A href=\"ixs.htm\"><IMG src=\"files/jpa_ts2.gif\" border=\"0\" alt=\"スキャン編\"></A></TD>\n");
	document.write("<TD><A href=\"ixu.htm\"><IMG src=\"files/jpa_tu1.gif\" border=\"0\" alt=\"ソフトウェア編\"></A></TD>\n");
	document.write("</TR>\n");
	document.write("</TABLE>\n");
}

function tabs_data(strpath, strindexpath)
{
	document.write("<TABLE cellSpacing=\"0\" cellPadding=\"0\" border=\"0\" width=\"100%\" background=\"files/bg_tabs.gif\">\n");
	document.write("<TR valign=\"top\">\n");
	document.write("<TD width=\"100%\" height=\"22\" align=\"right\">\n");

	document.write("<TABLE cellSpacing=\"0\" cellPadding=\"0\" border=\"0\">\n");
	document.write("<TR>\n");
	document.write("<TD><A href=\"xap.htm\"><IMG src=\"files/jpa_tp2.gif\" border=\"0\" alt=\"プリント編\"></A></TD>\n");
	document.write("<TD><A href=\"xas.htm\"><IMG src=\"files/jpa_ts2.gif\" border=\"0\" alt=\"スキャン編\"></A></TD>\n");
	document.write("<TD><A href=\"xau.htm\"><IMG src=\"files/jpa_tu1.gif\" border=\"0\" alt=\"ソフトウェア編\"></A></TD>\n");
	document.write("</TR>\n");
	document.write("</TABLE>\n");

	document.write("</TD>\n");
	document.write("</TR>\n");
	document.write("</TABLE>\n");
}

function foot_data(strpath, strindexpath)
{
	document.write("<TABLE cellSpacing=\"0\" cellPadding=\"0\" border=\"0\" width=\"100%\" bgcolor=\"#ffffff\">\n");
	document.write("<TR><TD height=\"20\"></TD></TR>\n");
	document.write("<TR>\n");
	document.write("<TD height=\"25\" align=\"left\" vAlign=\"middle\"><IMG src=\"files/10.gif\"><A \n");
	document.write("href=\"javascript:tocOpen()\" \n");
	document.write("onmouseover=\"MChange(00)\" onmouseout=\"MChange(01)\"><IMG border=\"0\" \n");
	document.write("src=\"files/jpz_ca1.gif\" name=\"m01\" alt=\"もくじ（サイトマップ）\"></A><IMG \n");
	document.write("src=\"files/jpz_hr.gif\"><A \n");
	document.write("href=\"xcb.htm\" target=\"_top\" \n");
	document.write("onmouseover=\"MChange(02)\" onmouseout=\"MChange(03)\"><IMG border=\"0\" \n");
	document.write("src=\"files/jpz_cb1.gif\" name=\"m02\" alt=\"電子マニュアルについて\"></A><IMG \n");
	document.write("src=\"files/jpz_hr.gif\"><A \n");
	document.write("href=\"xcc.htm\" target=\"_top\" \n");
	document.write("onmouseover=\"MChange(04)\" onmouseout=\"MChange(05)\"><IMG border=\"0\" \n");
	document.write("src=\"files/jpz_cc1.gif\" name=\"m03\" alt=\"商標／表記について\"></A><IMG \n");
	document.write("src=\"files/jpz_hr.gif\"><A \n");
	document.write("href=\"javascript:termOpen()\" \n");
	document.write("onmouseover=\"MChange(06)\" onmouseout=\"MChange(07)\"><IMG border=\"0\" \n");
	document.write("src=\"files/jpz_cd1.gif\" name=\"m04\" alt=\"用語集\"></A></TD>\n");
	document.write("</TR>\n");
	document.write("<TR><TD height=\"1\" bgcolor=\"#c0c0c0\"><IMG src=\"files/01.gif\"></TD></TR>\n");
	document.write("<TR><TD height=\"30\"><IMG src=\"files/_fcopy.gif\"></TD></TR>\n");
	document.write("</TABLE>\n");
}

var version = navigator.appVersion;
version = version.substring(0,1);
var browser = navigator.appName;
var chk = 1;

if ((browser =="Netscape" && version >= "3") || (browser =="Microsoft Internet Explorer" && version >= "4")){
	chk = 0;
	}
else {
	chk = 1;
}

if (chk == 0){
	images=new Array();
	images[00]=new Image(); images[00].src="files/jpz_ca1.jpg";
	images[01]=new Image(); images[01].src="files/jpz_cb1.gif";
	images[02]=new Image(); images[02].src="files/jpz_cc1.gif";
	images[03]=new Image(); images[03].src="files/jpz_cd1.gif";
	images[05]=new Image(); images[05].src="files/jpc_ua1.jpg";
	images[06]=new Image(); images[06].src="files/jpc_ub1.jpg";
	images[07]=new Image(); images[07].src="files/jpc_uc1.jpg";
}

if (chk == 0) {
	m00=new Image();m00.src="files/jpz_ca2.gif";
	m01=new Image();m01.src="files/jpz_ca1.gif";
	m02=new Image();m02.src="files/jpz_cb2.gif";
	m03=new Image();m03.src="files/jpz_cb1.gif";
	m04=new Image();m04.src="files/jpz_cc2.gif";
	m05=new Image();m05.src="files/jpz_cc1.gif";
	m06=new Image();m06.src="files/jpz_cd2.gif";
	m07=new Image();m07.src="files/jpz_cd1.gif";
	m10=new Image();m10.src="files/jpc_ua2.jpg";
	m11=new Image();m11.src="files/jpc_ua1.jpg";
	m12=new Image();m12.src="files/jpc_ub2.jpg";
	m13=new Image();m13.src="files/jpc_ub1.jpg";
	m14=new Image();m14.src="files/jpc_uc2.jpg";
	m15=new Image();m15.src="files/jpc_uc1.jpg";
}


function MChange(num) {
	if (chk == 0) {
		if (num == 00) {document.m01.src=m00.src;return true;}
		if (num == 01) {document.m01.src=m01.src;return true;}
		if (num == 02) {document.m02.src=m02.src;return true;}
		if (num == 03) {document.m02.src=m03.src;return true;}
		if (num == 04) {document.m03.src=m04.src;return true;}
		if (num == 05) {document.m03.src=m05.src;return true;}
		if (num == 06) {document.m04.src=m06.src;return true;}
		if (num == 07) {document.m04.src=m07.src;return true;}
		if (num == 10) {document.m06.src=m10.src;return true;}
		if (num == 11) {document.m06.src=m11.src;return true;}
		if (num == 12) {document.m07.src=m12.src;return true;}
		if (num == 13) {document.m07.src=m13.src;return true;}
		if (num == 14) {document.m08.src=m14.src;return true;}
		if (num == 15) {document.m08.src=m15.src;return true;}
	}
	else {
	return false;  
	}
}

function termOpen(){
	win=window.open("xcd.htm","term","scrollbars=1,menubar=0,resizable=1,width=530,height=480");
	win.moveTo(0,0);
	win.focus();
}

function tocOpen(){
	win=window.open("xau.htm","toc","scrollbars=1,menubar=0,resizable=1,width=530,height=480");
	win.moveTo(0,0);
	win.focus();
}

var iwidth = screen.width;
var iheight = screen.height;

function winOpen(winName,url,X,Y,W,H) {
	var win;
	win = window.open(url,winName,'top='+X+',left='+Y+',screenX='+X+',screenY='+Y+',scrollbars=1,,menubar=1,resizable=1,width='+W+',height='+H+'');
	win.focus();
}
