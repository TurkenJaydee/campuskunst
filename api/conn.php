<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);

try {
    $conn = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password, $options);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully";
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

    	$sql_artpieces = "SELECT * FROM artpieces";
	$sql_home = "SELECT * FROM home";
	$sql_literature = "SELECT * FROM literature";
    	$sql_sources = "SELECT * FROM Sources";
    	$sql_artists = "SELECT * FROM artists";
    	$sql_furtherInfo = "SELECT * FROM furtherInfo";
    	$sql_institutions = "SELECT * FROM institutions";
	$sql_mapsapikey = "SELECT * FROM mapsapikey";
    	
    ?>