<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);

$servername = "mysql.zfn.uni-bremen.de";
$username = "archivst";
$password = "4ZkI6WokZUUY";
$dbname = "archivst_campuskunst";
$options = array(
	PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
	PDO::MYSQL_ATTR_SSL_CA => '/path/to/cacert.pem',
	PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
);

?>