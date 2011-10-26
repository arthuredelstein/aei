

<?php

foreach ($_POST as $key => $value) {
	if (strlen($value)>0)
		$data = $data.$key.": ".$value."\n";
	}



$msg = $data;

if (strlen($msg)>2) {
	mail("einstein@igc.org","AEI Web Site Publications Order",$msg);
	mail("arthuredelstein@gmail.com","AEI Web Site Publications Order",$msg);
	}

?>



<HTML>
<HEAD>
<TITLE>Albert Einstein Institution - Thank you</TITLE>
<style>P,td{		font-family:Verdana,arial;	font-size:10pt;}ul,li{		font-family:Verdana,arial;	font-size:10pt;	list-style-type:disk;}H1,H2,H3,H4{	font-family:Verdana,arial;	font-size:14pt;}.bodytext{	font-family:Verdana,arial;	font-size:10pt;	list-style-type:disk;}.bordertext{	font-size:1pt;	}.title{}.header{	font-family:Verdana,arial;	font-size:8pt;}.footer{	font-family:Verdana,arial;	font-size:8pt;}.pageheading{}.pagehighlight{	font-family:Verdana,arial;	font-size:8pt;}.categories{	font-family:Verdana,arial;	font-size:8pt;}.feature_report{	font-family:Verdana,arial;	font-size:8pt;	color:'#FFFFFF';}.section_heading{	font-family:Verdana,arial;	font-size:10pt;	font-weight:bold;}.section_subheading{	font-family:Verdana,arial;	font-size:8pt;	font-style:italic;}.article_title{	font-weight:bold;}.article_author,.article_date{	font-style:italic;}.article_text{	font-family:Verdana,arial;	font-size:10pt;}</style>
<meta name=description content="The Albert Einstein Institution is a nonprofit organization advancing the study and use of strategic nonviolent action in conflicts throughout the world. We are committed to the defense of freedom, democracy, and the reduction of political violence through the use of nonviolent action">
<meta name=keywords content="freedom, civil disobedience, conflict, protest, resistance, nonviolence, non-violence, nonviolent action, non-violent action">
<link rel=stylesheet href=includes/styles.css type=text/css>
<script language="JavaScript" src="includes/global_functions_javascript.js"></script>
</head>
<?php
include 'headerFile.php';
?>
</td>
<td width=26><img src=images/spacer.gif width=26 height=1></td>
<td valign=top><br>
<p class=title>Thank you for your order!</p>
<table border=0 cellpadding=0 cellspacing=0 align=left>
</table>
<p class=text>Your order has been received. We will contact you to arrange payment and shipping.</p>
<?php
include 'footerFile.php';
?>
