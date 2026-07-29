<?php

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_sources);
    $statement->execute();
    $sourcesList = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $sourcesList );
    echo $json;
 ?>