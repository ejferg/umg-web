<?php ob_start() ?>
<?php
if ($_GET['randomId'] != "ZsZSxBXJU0yrBWpyxEPJLrx7W2FgEaeLYnMQSSGeoFm0ACjW_jIbS86ygI0K0TAsJwmmDnRpCYbCSoiM4MD6xnM2yUiim5628ZSsXBwwkYjro7o2bKorxnX0kQqeKswZIPSfFsZkP_PuIYOqtltFnZ5_4VJB1K6ixHjos3V78X4h8VEwvTlNZMmGo5PjjJCQly8kZEpLidGUee6MuHwYPY083vckf6k4J8RWFYwmcmJQXXW33dcvLS1dQyfumEQX") {
    echo "Access Denied";
    exit();
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Editing index.html</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<style type="text/css">body {background-color:threedface; border: 0px 0px; padding: 0px 0px; margin: 0px 0px}</style>
</head>
<body>
<div align="center">

<div id="saveform" style="display:none;">
<form METHOD="POST" name=mform action="https://www.ullisen.com:2083/frontend/x3/filemanager/savehtmlfile.html">
    <input type="hidden" name="charset" value="ISO-8859-1">
    <input type="hidden" name="baseurl" value="http://www.ullisen.com/public_html/ullisenmedia.com/">
    <input type="hidden" name="basedir" value="/home/ullisen/public_html/">
    <input type="hidden" name="udir" value="/home/ullisen/public_html/ullisenmedia.com">
    <input type="hidden" name="ufile" value="index.html">
    <input type="hidden" name="dir" value="%2fhome%2fullisen%2fpublic_html%2fullisenmedia.com">
    <input type="hidden" name="file" value="index.html">
    <input type="hidden" name="doubledecode" value="1">
<textarea name=page rows=1 cols=1></textarea></form>
</div>
<div id="abortform" style="display:none;">
<form METHOD="POST" name="abortform" action="https://www.ullisen.com:2083/frontend/x3/filemanager/aborthtmlfile.html">
    <input type="hidden" name="charset" value="ISO-8859-1">
    <input type="hidden" name="baseurl" value="http://www.ullisen.com/public_html/ullisenmedia.com/">
    <input type="hidden" name="basedir" value="/home/ullisen/public_html/">
    <input type="hidden" name="dir" value="%2fhome%2fullisen%2fpublic_html%2fullisenmedia.com">
        <input type="hidden" name="file" value="index.html">
    <input type="hidden" name="udir" value="/home/ullisen/public_html/ullisenmedia.com">
    <input type="hidden" name="ufile" value="index.html">

        </form>
</div>
<script language="javascript">
<!--//

function setHtmlFilters(editor) {
// Design view filter
editor.addHTMLFilter('design', function (editor, html) {
        return html.replace(/\<meta\s+http\-equiv\="Content\-Type"[^\>]+\>/gi, '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />');
});

// Source view filter
editor.addHTMLFilter('source', function (editor, html) {
        return html.replace(/\<meta\s+http\-equiv\="Content\-Type"[^\>]+\>/gi, '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />');
});
}

// this function updates the code in the textarea and then closes this window
function do_save() {
    document.mform.page.value = WPro.editors[0].getValue();
	document.mform.submit();
}
function do_abort() {
	document.abortform.submit();
}
//-->
</script>
<?php
// make sure these includes point correctly:
include_once ('/usr/local/cpanel/base/3rdparty/wysiwygPro/wysiwygPro.class.php');

// create a new instance of the wysiwygPro class:
$editor = new wysiwygPro();

$editor->registerButton('save', 'Save',
        'do_save();', '##buttonURL##save.gif', 22, 22,
        'savehandler'); 
$editor->addRegisteredButton('save', 'before:print' );
$editor->addJSButtonStateHandler ('savehandler', 'function (EDITOR,srcElement,cid,inTable,inA,range){ 
        return "wproReady"; 
        }'); 


$editor->registerButton('cancel', 'Cancel',
        'do_abort();', '##buttonURL##close.gif', 22, 22,
        'cancelhandler'); 
$editor->addRegisteredButton('cancel', 'before:print' );
$editor->addJSButtonStateHandler ('cancelhandler', 'function (EDITOR,srcElement,cid,inTable,inA,range){ 
        return "wproReady"; 
        }'); 
$editor->theme = 'blue'; 
$editor->addJSEditorEvent('load', 'function(editor){editor.fullWindow();setHtmlFilters(editor);}');

$editor->baseURL = "http://www.ullisen.com/public_html/ullisenmedia.com/";

$editor->loadValueFromFile('/home/ullisen/public_html/ullisenmedia.com/index.html');

$editor->registerSeparator('savecan');

// add a spacer:
$editor->addRegisteredButton('savecan', 'after:cancel');

//$editor->set_charset('iso-8859-1');
$editor->mediaDir = '/home/ullisen/public_html/';
$editor->mediaURL = 'http://www.ullisen.com/';
$editor->imageDir = '/home/ullisen/public_html/';
$editor->imageURL = 'http://www.ullisen.com/';
$editor->documentDir = '/home/ullisen/public_html/';
$editor->documentURL = 'http://www.ullisen.com/';
$editor->emoticonDir = '/home/ullisen/public_html/.smileys/';
$editor->emoticonURL = 'http://www.ullisen.com/.smileys/';
$editor->loadPlugin('serverPreview'); 
$editor->plugins['serverPreview']->URL = 'http://www.ullisen.com/public_html/ullisenmedia.com/.wysiwygPro_preview_eacf331f0ffc35d4b482f1d15a887d3b.php?randomId=ZsZSxBXJU0yrBWpyxEPJLrx7W2FgEaeLYnMQSSGeoFm0ACjW_jIbS86ygI0K0TAsJwmmDnRpCYbCSoiM4MD6xnM2yUiim5628ZSsXBwwkYjro7o2bKorxnX0kQqeKswZIPSfFsZkP_PuIYOqtltFnZ5_4VJB1K6ixHjos3V78X4h8VEwvTlNZMmGo5PjjJCQly8kZEpLidGUee6MuHwYPY083vckf6k4J8RWFYwmcmJQXXW33dcvLS1dQyfumEQX';
// print the editor to the browser:
$editor->htmlCharset = 'ISO-8859-1';
$editor->urlFormat = 'relative';
$editor->display('100%','450');

?>
</div>
<script>

</script>

</body>
</html>
<?php ob_end_flush() ?>
