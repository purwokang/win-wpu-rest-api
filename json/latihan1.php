<?php

// $mahasiswa = [
//     [
//         "nama" => "Sandhika Galih",
//         "nrp" => "043040023",
//         "email" => "sandhikagalih@unpas.ac.id"
//     ],
//     [
//         "nama" => "Erik Doang",
//         "nrp" => "043040044",
//         "email" => "erik@gmail.com"
//     ]
// ];

// var_dump($mahasiswa);


$dbh = new PDO('mysql:host=localhost;dbname=toko', 'root', '');

$db = $dbh->prepare('SELECT * FROM produk');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);


$data = json_encode($mahasiswa);
echo $data;
