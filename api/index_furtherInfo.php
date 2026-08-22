<?php

include('../../config.php');
include('conn.php');
header('Content-Type: application/json');

    $statement = $conn->prepare($sql_furtherInfo);
    $statement->execute();
    $furtherInfoList = $statement->fetchAll( PDO::FETCH_ASSOC );
    $json = json_encode( $furtherInfoList );
    echo $json;
 ?>