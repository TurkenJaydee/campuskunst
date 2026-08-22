<?php

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_institutions);
    $statement->execute();
    $institutionsList = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $institutionsList );
    echo $json;
 ?>