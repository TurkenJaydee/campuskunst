<?php

error_reporting(E_ERROR | E_PARSE);

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_artpieces);
    $statement->execute();
    $artpiecesList = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $artpiecesList );
    echo $json;
 ?>