<?php

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_mapsapikey);
    $statement->execute();
    $mapsapikey = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $mapsapikey );
    echo $json;
 ?>