function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function setImage(strImageName, strImageFullPath) {
    var objImage;

    objImage = MM_findObj(strImageName);
    if (objImage != null) { objImage.src = strImageFullPath; }
}


function leftnavExpand(strLeftNavRowElementName){

	var objLeftNavRowElement;
	// list of navigation layers should be defined here
	var navLayers = new Array('Intro', 'AboutSBVR', 'ReadingRoom', 'InTheMedia', 'Events', 'Litigation', 'CareerOpp');

    for(i=0;i<navLayers.length;i++) {
	objTempLeftNavRowElement = MM_findObj(navLayers[i]);
	if (objTempLeftNavRowElement != null) {
	    if (objTempLeftNavRowElement.style) { objTempLeftNavRowElement = objTempLeftNavRowElement.style; } 
	    objTempLeftNavRowElement.display = "none";		
	}

    }
    
    objLeftNavRowElement = MM_findObj(strLeftNavRowElementName);
    if (objLeftNavRowElement != null) {
        if (objLeftNavRowElement.style) { objLeftNavRowElement = objLeftNavRowElement.style; } 
	objLeftNavRowElement.display = "";		
    }
}




function layersShowOrHide() {
    var arrayArgs = layersShowOrHide.arguments;
    var objLayer;
    var strShowOrHide = arrayArgs[0];
    var i;
	
    for (i=1;i<=arrayArgs.length-1;i++) {
        if ((objLayer=MM_findObj(arrayArgs[i]))!=null) {
	    // for IE and NS compatibility
            if (objLayer.style) { objLayer = objLayer.style; } 
            objLayer.visibility = strShowOrHide;            
        } 
    }
}


/* 
Functions that swaps images.  These functions were generated by Dreamweaver, but are
not used by e-guana.
*/
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

var isDOM = (document.getElementById ? true : false); 
var isIE4 = ((document.all && !isDOM) ? true : false);
var isNS4 = (document.layers ? true : false);
function getRef(id) {
if (isDOM) return document.getElementById(id);
if (isIE4) return document.all[id];
if (isNS4) return document.layers[id];
}
function getSty(id) {
return (isNS4 ? getRef(id) : getRef(id).style);
} 


<!--

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}
var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		//nav_Content_h = newImage("/images/nav_Content_h.jpg");
		//nav_Community_h = newImage("/images/nav_Community_h.jpg");
		//nav_ECommerce_h = newImage("/images/nav_ECommerce_h.jpg");
		//nav_LinkGen_h = newImage("/images/nav_LinkGen_h.jpg");
		//nav_Help_h = newImage("/images/nav_Helpt_h.jpg");
		//nav_LogOff_h = newImage("/images/nav_LogOff_h.jpg");

		preloadFlag = true;
	}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function layersShowOrHide() {
    var arrayArgs = layersShowOrHide.arguments;
    var objLayer;
    var strShowOrHide = arrayArgs[0];
    var i;
	
    for (i=1;i<=arrayArgs.length-1;i++) {
        if ((objLayer=MM_findObj(arrayArgs[i]))!=null) {
	    // for IE and NS compatibility
            if (objLayer.style) { objLayer = objLayer.style; } 
            objLayer.visibility = strShowOrHide;            
        } 
    }
}

function openPopup(fileName, windowName, windowFeatures) {
	if (!windowFeatures) {
		windowFeatures = 'scrollbars=no,status=no,width=300,height=300';
	}
	if (!windowName) {
		windowName = 'popupWindow';
	}
    
	popup = window.open(fileName, windowName, windowFeatures);
}


preloadImages();

// -->
