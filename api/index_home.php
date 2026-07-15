<?php

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_home);
    $statement->execute();
    $homeList = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $homeList );
    echo $json;
 ?>