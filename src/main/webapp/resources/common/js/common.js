jQuery.ajaxSetup({cache:false}); 
// �좏깮�� �꾪떚�ㅽ듃
function InitArtLists(selartidx, selSort){
	document.getElementById("SelArtIdx").value = selartidx;
	document.getElementById("SelArtISort").value = selSort;
}

// �� �곗삁�� �좏깮 
function Fn_ChngArtists(idx,lang,secdiv,OUTDIV,pg,cidx,atype){
	Fn_ChngSectionMenu(idx, lang,secdiv,'Y','',0,0,'',atype);
}

// 硫붾돱 �곗씠�� 遺덈윭�ㅺ린
function Fn_ChngSectionMenu(idx, lang,secdiv, INDIV,OUTDIV,pg,cidx,key, atype){
	var strURL = "/artists/Artists_Section_Proc.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&SECDIV="+secdiv+"&INDIV="+ INDIV+"&OUTDIV="+ OUTDIV+"&PG="+ pg+"&CIDX="+ cidx+"&SchKey="+ key+"&ATYPE="+ atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_section_menu").empty();
			$("#Art_section_menu").append(html);
		}
	});
}

// 硫붿씤 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionMAIN(idx,lang){
	var strURL = "/artists/Artists_Main_Proc.asp?LANGDIV="+lang+"&ARTIDX="+idx;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �대컮�� �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionABOUT(idx,lang){
	var strURL = "/artists/Artists_About_Proc.asp?LANGDIV="+lang+"&ARTIDX="+idx;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}


// 怨듭��ы빆 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionNOTICE(idx,lang,key,title,pg,size,cidx,atype){
	var strURL = "/artists/Artists_Notice.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&SchKey="+key+"&SchTitle="+title+"&Page="+pg+"&n2PageSize="+size+"&CIDX="+cidx+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}


// �쒕씪留� �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionDRAMA(idx,lang,pg,size){
	var strURL = "/artists/Artists_Drama.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �곹솕 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionMOVIE(idx,lang,pg,size){
	var strURL = "/artists/Artists_Movie.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// 裕ㅼ�而� �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionMUSICAL(idx,lang,pg,size){
	var strURL = "/artists/Artists_Musical.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �곌레 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionPLAY(idx,lang,pg,size){
	var strURL = "/artists/Artists_Play.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �ㅽ듃�뚰겕 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionNETWORK(idx,lang,pg,size, atype){
	var strURL = "/artists/Artists_Network.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}


// �⑤쾾 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionALBUM(idx,lang,pg,size,cidx, atype){
	var strURL = "/artists/Artists_Album.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size+"&CDTYPE=A"+"&CIDX="+cidx+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// DVD �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionDVD(idx,lang,pg,size,cidx, atype){
	var strURL = "/artists/Artists_Album.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size+"&CDTYPE=D"+"&CIDX="+cidx+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// CONCERT �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionCONCERT(idx,lang,pg,size,cidx, atype){
	var strURL = "/artists/Artists_Album.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size+"&CDTYPE=C"+"&CIDX="+cidx+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// MV �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionMV(idx,lang,pg,size,cidx,atype){
	var strURL = "/artists/Artists_MV.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&Page="+pg+"&n2PageSize="+size+"&CIDX="+cidx+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty().slideUp("slow");
			$("#Art_sectionContents").append(html).slideDown("slow");
		}
	});
}

// 媛ㅻ윭由� �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionGALLERY(idx,lang,key,title,pg,size){
	var strURL = "/artists/Artists_Gallery.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&SchTitle="+title+"&Page="+pg+"&n2PageSize="+size;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �ㅼ슫濡쒕뱶 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionDOWNLOAD(idx,lang,key,pg,size){
	var strURL = "/artists/Artists_Download.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&SchKey="+key+"&Page="+pg+"&n2PageSize="+size;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �대깽�� 由ъ뒪�� 遺덈윭�ㅺ린
function Fn_GetSectionEVENT(idx,lang,key,pg,size,atype){
	var strURL = "/artists/Artists_Event.asp?LANGDIV="+lang+"&ARTIDX="+idx+"&SchKey="+key+"&Page="+pg+"&n2PageSize="+size+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �대깽�� �뺣낫 遺덈윭�ㅺ린
function Fn_EventVIew(artidx,lang,key,pg,size,Cidx,atype){
	var strURL = "/artists/Artists_EVENT_INFO.asp?LANGDIV="+lang+"&ARTIDX="+artidx+"&SchKey="+key+"&Page="+pg+"&n2PageSize="+size+"&IDX="+Cidx+"&ATYPE="+atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �ㅼ�以� 遺덈윭�ㅺ린
function Fn_GetSectionSCHEDULE(artidx,lang,key){
	var strURL = "/artists/Artists_Schedule_M.asp?LANGDIV="+lang+"&ARTIDX="+artidx;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �ㅽ듃�뚰겕 �뺣낫 遺덈윭�ㅺ린
function Fn_GetSectionNETWORKVIEW(artidx,lang,pg,size,Cidx,atype){
	var strURL = "/artists/Artists_Network_INFO.asp?LANGDIV="+lang+"&ARTIDX="+artidx+"&Page="+pg+"&n2PageSize="+size+"&IDX="+Cidx + "&ATYPE=" + atype;
	$.ajax({		
		type: "get",
		url: strURL,
		dataType: "html",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//alert("硫붿씤由ъ뒪�몄뿉��="+XMLHttpRequest.responseText);
			alert("�댁슜�� �놁뒿�덈떎.");
		},
		success:function(html, textStatus){
			$("#Art_sectionContents").empty();
			$("#Art_sectionContents").append(html);
		}
	});
}

// �몃� URL 
function StartSection(secdiv,idx,lang,pg,cidx){
	switch(secdiv){
		case "0" :
			Fn_GetSectionMAIN(idx,lang);
			break;

		case "1" :
			Fn_GetSectionNETWORKVIEW(idx,lang,pg,12,cidx,atype);
			break;

		case "2" :
			Fn_GetSectionNETWORK(idx,lang,pg,12,atype);
			break;

		case "3" :
			Fn_GetSectionNOTICE(idx,lang,"","",pg,8, cidx ,atype)
			break;
		
		case "4" :
			Fn_GetSectionALBUM(idx,lang,pg,8, cidx,atype);
			break;
		case "5" :
			Fn_GetSectionDVD(idx,lang,pg,8, cidx,atype);
			break;		
		case "6" :
			Fn_GetSectionCONCERT(idx,lang,pg,8, cidx,atype);
			break;		
		case "7" :
			Fn_GetSectionMV(idx,lang,pg,8, cidx,atype);
			break;		
		case "10" :
			Fn_EventVIew(idx,lang,key,pg,6,Cidx,atype);
			break;		
	}
}

// Google Analytics 2012.9.12 KJH
/*
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34563949-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
*/
// 20150122 by migo
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-34563949-1', 'auto');
ga('send', 'pageview');

// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGGK2S');
// End Google Tag Manager