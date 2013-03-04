<?php

include('./SimDB.php');

$requestType =  $_SERVER['REQUEST_METHOD'];

$SimDB = new SimDB();

if ($requestType == 'GET') {

    $data = $SimDB->readData('lieferanten');

} else if ($requestType == 'POST') {
    $data = $SimDB->readData('lieferanten');

    $newData = array(
        'lieferantenId' => time(),
        'lieferant' => 'Pizza Aquario',
        'adresse' => 'Mustergasse 21, 12345 Musterstadt',
        'telefon' => '+49 123 456789',
        'url' => 'http://www.google.de'
    );

    array_push($data, $newData);

    $SimDB->saveData($data);
} else if ($requestType == 'PUT') {

} else if ($requestType == 'DELETE') {

}

echo json_encode($data);