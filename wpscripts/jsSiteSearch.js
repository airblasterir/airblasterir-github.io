function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,bgColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("swr=true") != -1)
	return;
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?" );
var arrURLParams = arrParams[1].split("&" );
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=" );
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>" ); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!doctype html>" );
d.write("<html lang=\"en\">" );
d.write("<head>" );
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
d.write("</head>" );
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
d.write("<div id=\"wpSearchResults\"></div>" );
d.write("<script type=\"text/javascript\">" );
d.write("var wordMap = new Array(\" 4-in موجود انبار martin دستگاه بایتر بلاستر مارتین واسط میان هوای فشرده مواد داخل مخزن باشدکه پالس خروجی هدایت کرده تجمع اصطلاح بستن آنها گیری توجه هندسی نازلها تحریک منظم برقی انها امکان تمیز کردن داخلی مخازن بیشتر راندمان سیستم بالا کنترل توسط کنترلر الکتریکی بالس انجام میگیرد انتقال سریع دریچه مصرف متوسط مصرفی کمتر مکعب دقیقه باشد تعمیر اسان مقاوم برابر ضربات ناگهانی توانایی جارو قابل پزیشن موثر مرطوب چسبنده صدای cannons pneumatic bulk material-moving systemsthat quickly release compressed into storage vessel restore flow material that clinging bridging rat-holing arching figure this manual provides instructions installing cannons steel structures only installations other call engineering representative problems bring operation's operations efficiency productivity halt hang-ups systems accumulations process vessels choke while bottlenecks create costly reductions equipment performance poor raises maintenance expenses drags profits down hurricane cannon system releases transfer chutes ducts feed pipes maintain restricted material operation system consists more mounted cannon charges when tank filled with nitrogen between operating pressure available upon request when equals line airflow static ready discharged activating solenoid valve positive signal sent exhaust valve causing actuate holding piston instantly forced back stored blast then directed through discharge pipe nozzle charging discharging abcd فروش انواع نیاز صنایع بهترین کاربردی ترین تامین کمترین زمان اماده تحویل builds inside kilns silos bins hoppers stops flowing obstructions ratholes best keep moving manufactured highly effective materials like coal cement aggregate especially they retain even small amounts moisture become sticky مارین صنعت کارایی محصولات مشابه دارد قیمت مشتریان عزیز گردد مشخصات برند نامهای بلاتر شناسند کاملا صنعتی گرفتگی سیلو هاپر داکت صورت دیگر سایز سفارس حدودی ماهه گیرد نحوه کاتالوگ شرکت \",\" about فروش انواع بلاستر مارتین cannons powerful safe efficient power materials motion \",\" problems material flow bring operation's operations efficiency productivity halt hang-ups storage systems accumulations process vessels choke while bottlenecks create costly reductions equipment performance poor raises maintenance expenses drags profits down martin® cannons supply quiet powerful release compressed that dislodges buildups enhances bulk materials improve maintain profitability since 1974 have been used around world prevent martin engineering remains leader application cannon technology overcome boost movement through high-capacity \",\" info airblaster 02144036728 \",\" بلاستر دستگاه بایتر مارتین واسط میان هوای فشرده مواد داخل مخزن باشدکه پالس خروجی هدایت کرده تجمع اصطلاح بستن آنها گیری توجه هندسی نازلها تحریک منظم برقی انها امکان تمیز کردن داخلی مخازن بیشتر راندمان سیستم بالا کنترل توسط کنترلر الکتریکی بالس انجام میگیرد انتقال سریع دریچه مصرف متوسط مصرفی کمتر مکعب دقیقه باشد تعمیر اسان مقاوم برابر ضربات ناگهانی توانایی جارو قابل پزیشن موثر مرطوب چسبنده صدای \",\" \",\" \" );" );
d.write("var pageMap = new Array(\"Home\",\"About Us\",\"Services\",\"Contact Us\",\"Article 01\",\"Search Results\",\"XHV4-in\" );" );
d.write("var linkMap = new Array(\"../index.html\",\"aboutus.html\",\"services.html\",\"contactus.html\",\"article01.html\",\"searchresults.html\",\"xhv4-in.html\" );" );
d.write("var preMap = new Array(\"XHV 4-in   50 Lit موجود در انبار  Martin XHV 4-in   50 Lit XHV 4-in   100 Lit موجود در انبار  Martin XHV 4-in  100 Lit XHV 4-in   200 Lit موجود در انبار  Martin XHV 4-in  200 Lit XHV 4-in   25 Lit موج\",\"About Us فروش انواع ایر بلاستر مارتین فروش انواع شات بلاستر مارتین فروش انواع بیگ بلاستر مارتین  AIR CANNONS POWERFUL  SAFE   EFFICIENT POWER  TO PUT MATERIALS IN MOTION    \",\"Problems in material flow can bring an operation's  efficiency and productivity to a halt  Hang-ups in  storage systems and accumulations in process  vessels choke material flow while bottlenecks  cre\",\"info Airblaster ir  02144036728  \",\"یر بلاستر دستگاه ایر بایتر یا  بیگ بلاستر مارتین یک واسط میان هوای فشرده با مواد داخل مخزن می باشدکه پس از پالس هوا مواد دپو شده را به سمت خروجی مخزن هدایت کرده و از تجمع مواد و یا به اصطلاح از طاق بس\",\"\",\"\" );" );
d.write("function doNav(ind)" );
d.write("{" );
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
else
d.write("		 parent.window.location.href=linkMap[ind];" );
d.write("}" );
d.write("function wpDoSearch(searchTerms){" );
d.write("var terms = searchTerms.split(\" \" );" );
d.write("if (terms==\"\") return;" );
d.write("var results = \"\";" );
d.write("var resultscount = 0;" );
d.write("for (var i=0; i<wordMap.length; i++)" );
d.write("{" );
d.write("			var found=true;" );
d.write("			for (var j=0; j<terms.length; j++)" );
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;" );
d.write("			if (found)" );
d.write("			{" );
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\" );\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";" );
d.write("				 resultscount++;" );
d.write("			}" );
d.write("}" );
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;" );
d.write("}" );
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","" );
};
d.write("wpDoSearch(\""+sTerms+"\" );" );
d.write("</script>" );
d.write("</body></html>" );
d.close();
}