/* 1. Melakukan Looping Menggunakan While */
var number = 0;

console.log('LOOPING PERTAMA');

while (number <= 18) {
    number = number + 2;
    console.log(number + " - I love coding");
    
}


console.log('LOOPING KEDUA');

while (number >= 1) {
    console.log(number + " - I will become fullstack developer");
    number = number - 2;
}

/* 2. Melakukan Looping Menggunakan For */

console.log('LOOPING PERTAMA');

for (var number2 = 1; number2 <= 20; number2 = number2 + 1) {
    console.log(number2 + ' - I love Coding');
}

console.log('LOOPING KEDUA');

for (var number2 = 1; number2 <= 20; number2 = number2 + 1) {
    console.log(number2 + " - I will become fullstack developer");
    number2 = number2 + deret;
}

/* 3. Angka Ganjil dan Genap */

//contoh - ganjil genap
var counter = 1;

for (counter ;counter <= 100; counter++) {
    if (counter % 2 !== 0) {
        console.log('GANJIL')
    }
    else {
        console.log('GENAP')
    }
}