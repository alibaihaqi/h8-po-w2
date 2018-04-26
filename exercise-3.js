/*1. Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"*/
var nama = '';
var peran = '';

if (nama === '') {
    console.log('Nama harus diisi!')
}
else {
    console.log ("Halo, " + nama)
}

/*Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!*/

var nama = 'Mikael';
var peran = '';

if (nama === 'Mikael' && peran ==='' ) {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
}
else {
    console.log ("Halo, " + nama + ', selamat bergabung di permainan ini!')
}

/* Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game! */

/*Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka." */

/*//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"*/

var nama = 'Nina';
var peran = 'Ksatria';

console.log('Selamat datang di Dunia Proxytia, ' + nama);

if (nama === 'Nina' && peran === 'Ksatria') {
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama === 'Danu' && peran === 'Tabib') {
    console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka');
} else if (nama === 'Zero' && peran === 'Penyihir') {
    console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else   {
    console.log ('Siapa anda?');
}