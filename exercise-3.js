/*1. Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"*/

/* 2.Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!*/

/* 3. Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game! */

/*4. Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka." */

/* 5.Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"*/

var nama = '';
var peran = '';

if (nama !== '' || nama === undefined) {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    if (peran === 'Ksatria') {
        console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Tabib') {
        console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka');
    } else if (peran === 'Penyihir') {
        console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
    } else   {
        console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
    }
}
else {
    console.log('Nama harus diisi!')
}