<?php

include('./SimDB.php');

$requestType =  $_SERVER['REQUEST_METHOD'];

$SimDB = new SimDB();

if ($requestType == 'GET') {

    $data = $SimDB->readData('lieferanten');

    $returnValue = $data;

} else if ($requestType == 'POST') {
    $data = $SimDB->readData('lieferanten');

    $newData = array(
        'lieferantId' => time(),
        'lieferant' => null,
        'adresse' => null,
        'telefon' => null,
        'url' => null
    );


    array_push($data, $newData);

    $SimDB->saveData($data);

    $returnValue = $newData;
} else if ($requestType == 'PUT') {
    $data = $SimDB->readData('lieferanten');

    $putContent = json_decode(file_get_contents('php://input'));

    foreach($data as $key => $value) {
        if ($value['lieferantId'] == $putContent->lieferantId) {

            $data[$key]['lieferant'] = $putContent->lieferant;
            $data[$key]['adresse'] = $putContent->adresse;
            $data[$key]['telefon'] = $putContent->telefon;
            $data[$key]['url'] = $putContent->url;

            $returnValue = $data[$key];

            break;
        }
    }

    $SimDB->saveData($data);

} else if ($requestType == 'DELETE') {
    $data = $SimDB->readData('lieferanten');

    $deleteContent = $_REQUEST['deleteId'];

    foreach ($data as $key => $value) {
        if ($value['lieferantId'] == $deleteContent) {

            unset($data[$key]);

            break;
        }
    }

    $SimDB->saveData($data);

    $returnValue = array();
}

echo json_encode($returnValue);