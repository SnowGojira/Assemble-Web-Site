<?php
require_once "jssdk1.php";
$jssdk = new JSSDK("wxc6d64ef0eca24344", "3932dfba5269689d369ad47062dfe21d",'http://115.159.194.93');
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
?>