<?php

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_literature);
    $statement->execute();
    $literatureList = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $literatureList );
    echo $json;
 ?>