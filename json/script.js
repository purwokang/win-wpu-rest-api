// mengubah object menjadi JSON menggunakan vanilla js

// let mahasiswa = {
//     nama: "Sandhika Galih",
//     nrp: "030403023",
//     emai: "sandhikagalih@unpas.ac.id"
// }

// console.log(JSON.stringify(mahasiswa));


// mengubah JSON menjadi object menggunakan vanilla js
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function (data) {
    console.log(data);
});