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
	document.write("<TD><A href=\"ixs.htm\"><IMG src=\"files/jpa_ts1.gif\" border=\"0\" alt=\"スキャン編\"></A></TD>\n");
	document.write("<TD><A href=\"ixu.htm\"><IMG src=\"files/jpa_tu2.gif\" border=\"0\" alt=\"ソフトウェア編\"></A></TD>\n");
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
	document.write("<TD><A href=\"xas.htm\"><IMG src=\"files/jpa_ts1.gif\" border=\"0\" alt=\"スキャン編\"></A></TD>\n");
	document.write("<TD><A href=\"xau.htm\"><IMG src=\"files/jpa_tu2.gif\" border=\"0\" alt=\"ソフトウェア編\"></A></TD>\n");
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

function chap_data(strpath, strindexpath)
{
	document.write("<IMG src=\"files/01.gif\" height=\"20\" width=\"1\"><BR>\n");
	document.write("<IMG src=\"files/jpb_cw3.gif\" alt=\"タイトル一覧\"><BR>\n");
	document.write("<IMG src=\"files/jpd_cs1.gif\" alt=\"スキャン方法\"><BR>\n");
	document.write("<A href=\"ixsa.htm\"><IMG border=\"0\" src=\"files/jpd_csa.gif\" alt=\"プリント写真\"></A><BR>\n");
	document.write("<A href=\"ixsb.htm\"><IMG border=\"0\" src=\"files/jpd_csb.gif\" alt=\"フィルム\"></A><BR>\n");
	document.write("<A href=\"ixsc.htm\"><IMG border=\"0\" src=\"files/jpd_csc.gif\" alt=\"雑誌/報告書\"></A><BR>\n");
	document.write("<A href=\"ixsd.htm\"><IMG border=\"0\" src=\"files/jpd_csd.gif\" alt=\"イラスト/小物\"></A><BR>\n");
	document.write("<A href=\"ixse.htm\"><IMG border=\"0\" src=\"files/jpd_cse.gif\" alt=\"便利なスキャン方法\"></A><BR>\n");
	document.write("<IMG src=\"files/jpd_cs2.gif\" alt=\"スキャナドライバ\"><BR>\n");
	document.write("<A href=\"ixsh.htm\"><IMG border=\"0\" src=\"files/jpd_csh.gif\" alt=\"スキャンドライバについて\"></A><BR>\n");
	document.write("<A href=\"ixsi.htm\"><IMG border=\"0\" src=\"files/jpd_csi.gif\" alt=\"機能を使ってきれいにスキャン\"></A><BR>\n");
	document.write("<IMG src=\"files/jpd_ct1.gif\" alt=\"困ったときには\"><BR>\n");
	document.write("<A href=\"ixso.htm\"><IMG border=\"0\" src=\"files/jpd_cto.gif\" alt=\"トラブル対処方法\"></A><BR>\n");
	document.write("<A href=\"ixsp.htm\"><IMG border=\"0\" src=\"files/jpd_ctp.gif\" alt=\"インターネットFAQ\"></A><BR>\n");
	document.write("<A href=\"ixsq.htm\"><IMG border=\"0\" src=\"files/jpd_ctq.gif\" alt=\"サポート/修理\"></A><BR>\n");
	document.write("<IMG src=\"files/jpd_cv1.gif\" alt=\"その他の情報\"><BR>\n");
	document.write("<A href=\"ixsv.htm\"><IMG border=\"0\" src=\"files/jpd_cvv.gif\" alt=\"付録\"></A><BR>\n");
	document.write("<A href=\"ixsw.htm\"><IMG border=\"0\" src=\"files/jpd_cvw.gif\" alt=\"もっと活用しよう！\"></A><BR>\n");
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
	images[00]=new Image(); images[00].src="files/jpz_ca1.gif";
	images[01]=new Image(); images[01].src="files/jpz_cb1.gif";
	images[02]=new Image(); images[02].src="files/jpz_cc1.gif";
	images[03]=new Image(); images[03].src="files/jpz_cd1.gif";
	images[05]=new Image(); images[05].src="files/jpc_sh1.jpg";
	images[06]=new Image(); images[06].src="files/jpc_si1.jpg";
	images[07]=new Image(); images[07].src="files/jpc_to1.jpg";
	images[08]=new Image(); images[08].src="files/jpc_tp1.jpg";
	images[09]=new Image(); images[09].src="files/jpc_tq1.jpg";
	images[10]=new Image(); images[10].src="files/jpc_sv1.jpg";
	images[11]=new Image(); images[11].src="files/jpc_wc1.jpg";
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
	m10=new Image();m10.src="files/jpc_sh2.jpg";
	m11=new Image();m11.src="files/jpc_sh1.jpg";
	m12=new Image();m12.src="files/jpc_si2.jpg";
	m13=new Image();m13.src="files/jpc_si1.jpg";
	m14=new Image();m14.src="files/jpc_to2.jpg";
	m15=new Image();m15.src="files/jpc_to1.jpg";
	m16=new Image();m16.src="files/jpc_tp2.jpg";
	m17=new Image();m17.src="files/jpc_tp1.jpg";
	m18=new Image();m18.src="files/jpc_tq2.jpg";
	m19=new Image();m19.src="files/jpc_tq1.jpg";
	m20=new Image();m20.src="files/jpc_sv2.jpg";
	m21=new Image();m21.src="files/jpc_sv1.jpg";
	m22=new Image();m22.src="files/jpc_wc2.jpg";
	m23=new Image();m23.src="files/jpc_wc1.jpg";
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
		if (num == 08) {document.m05.src=m08.src;return true;}
		if (num == 09) {document.m05.src=m09.src;return true;}
		if (num == 10) {document.m06.src=m10.src;return true;}
		if (num == 11) {document.m06.src=m11.src;return true;}
		if (num == 12) {document.m07.src=m12.src;return true;}
		if (num == 13) {document.m07.src=m13.src;return true;}
		if (num == 14) {document.m08.src=m14.src;return true;}
		if (num == 15) {document.m08.src=m15.src;return true;}
		if (num == 16) {document.m09.src=m16.src;return true;}
		if (num == 17) {document.m09.src=m17.src;return true;}
		if (num == 18) {document.m10.src=m18.src;return true;}
		if (num == 19) {document.m10.src=m19.src;return true;}
		if (num == 20) {document.m11.src=m20.src;return true;}
		if (num == 21) {document.m11.src=m21.src;return true;}
		if (num == 22) {document.m12.src=m22.src;return true;}
		if (num == 23) {document.m12.src=m23.src;return true;}
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
	win=window.open("xas.htm","toc","scrollbars=1,menubar=0,resizable=1,width=530,height=480");
	win.moveTo(0,0);
	win.focus();
}

function secOpen(){
	win=window.open("xepson.htm","epson","scrollbars=1,menubar=0,resizable=1,width=840,height=600");
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


function flashcheck(strpath, strindexpath){
	var flashVersion=false;
	var nn=(navigator.appName.charAt(0)=="N");
	var n6=(document.getElementById && nn) || false;
	var ie=(document.all && !nn) || false;
	var macie=(navigator.userAgent.indexOf("Mac")!=-1) || false;
	var mac=(navigator.userAgent.indexOf("Mac")!=-1) || false;
	var ver=""+navigator.appVersion;
	var fno=ver.indexOf(" ");
	ver=eval(ver.substring(0,fno));

	if (ie && !mac){
		var flashVersion = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").FlashVersion();
		    flashVersion = Math.floor(flashVersion / 0x10000);
	}

	else if (macie){
		str = "application/x-shockwave-flash";
		ver = 0;
		if (navigator.mimeTypes && navigator.mimeTypes[str] && navigator.mimeTypes[str].enabledPlugin){
			for(i=0; i<navigator.plugins.length; i++){
				str2 = navigator.plugins[i].description;
				ptr   = str2.indexOf("Flash");
				if (ptr >= 0) ver = eval(str2.substring(ptr+6,ptr+9));
				flashVersion=ver;
			}
		}
	}
	
	if (!flashVersion){
		if (nn && !document.plugins) flashVersion=false;
			else if ((nn || n6) && navigator.plugins) flashVersion=navigator.plugins["Shockwave Flash"].description.charAt(16);
			else flashVersion=false;
	}
	if (flashVersion>=6) {
	document.write("<OBJECT \n");
	document.write("classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" \n");
	document.write("codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" \n");
	document.write("width=\"509\" height=\"153\" id=\"EPSON\" align=\"\">\n");
	document.write("<PARAM name=\"movie\" value=\"xfs.swf\">\n");
	document.write("<PARAM name=\"quality\" value=\"high\">\n");
	document.write("<PARAM name=\"loop\" value=\"false\">\n");
	document.write("<PARAM name=\"bgcolor\" value=\"#ffffff\">\n");
	document.write("<EMBED \n");
	document.write("src=\"xfs.swf\" quality=\"high\" loop=\"false\" bgcolor=\"#ffffff\" \n");
	document.write("width=\"509\" height=\"153\" name=\"EPSON\" \n");
	document.write("type=\"application/x-shockwave-flash\" \n");
	document.write("pluginspage=\"http://www.macromedia.com/go/getflashplayer\">\n");
	document.write("</EMBED>\n");
	document.write("</OBJECT>\n");
	}

	else {
	document.write("<IMG src=\"xfs.jpg\">\n");
	}
}
