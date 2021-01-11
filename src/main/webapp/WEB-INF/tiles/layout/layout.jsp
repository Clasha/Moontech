<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>s
${page} = ${pageContext.request.contextPath};
    <head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>MoonTech&Soft</title>
	<meta property="fb:admins" content="100004289979533">
	

<meta name="google-site-verification"
	content="lF2I3xIdSIcg1ALYcALMBjhtREDtNC7QiQucRVqjfu4">
<meta property="wb:webmaster" content="15121c2664a0187c">
<!--20121210 for weibo-->

<link rel="stylesheet" type="text/css"
	href="${page}/resources/common/css/main.css">
<link rel="stylesheet" type="text/css"
	href="${page}/resources/common/css/fotorama.css">
<script type="text/javascript" id="www-widgetapi-script"
	src="https://www.youtube.com/s/player/5dd3f3b2/www-widgetapi.vflset/www-widgetapi.js"
	async=""></script>
<script src="//www.youtube.com/iframe_api" async=""></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/analytics.js"></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/plugins/ua/linkid.js"></script>
<script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-PGGK2S"></script>
<script async="" src="//www.google-analytics.com/analytics.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="${path}/resources/common/js/ui.js"></script>
<script type="text/javascript" src="${path}/resources/common/js/fotorama.js"></script>
<style type="text/css"></style>
</head>
<div id="wrap">

	<div id="header">
		<tiles:insertAttribute name="header" />
	</div><!-- //header -->
	<div id="content">
		<tiles:insertAttribute name="content" />
	</div><!-- content -->
</div>