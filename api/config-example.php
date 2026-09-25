<?php
/**
 * Datenbank-Konfiguration (Beispiel-Datei)
 * 
 * Anleitung zur Nutzung:
 * 1. Kopiere diese Datei und benenne die Kopie in "config.php" um.
 * 2. Trage hier deine tatsächlichen Datenbank-Zugangsdaten ein.
 * 3. Die echte "config.php" darf niemals in das öffentliche Git-Repository hochgeladen werden!
 */

header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);

$servername = "dein-mysql-server.uni-bremen.de"; // z.B. mysql.zfn.uni-bremen.de
$username = "dein_datenbank_benutzer";           // z.B. archivst
$password = "dein_passwort_hier_eintragen";     // Dein lokales Passwort

$dbname = "dein_datenbank_name";                // z.B. archivst_campuskunst

$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    // Falls ein SSL-Zertifikatpfad benötigt wird, hier den lokalen Pfad eintragen oder anpassen:
    PDO::MYSQL_ATTR_SSL_CA => '/pfad/zu/deiner/cacert.pem',
    PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
);
?>