<?php

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_artists);
    $statement->execute();
    $artistsList = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $artistsList );
    echo $json;
 ?>