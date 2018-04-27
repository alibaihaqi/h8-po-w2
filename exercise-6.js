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

var number2 = 1;

console.log('LOOPING PERTAMA');

for (number2; number2 <= 20; number2 = number2 + 1) {
    console.log(number2 + ' - I love Coding');
}

console.log('LOOPING KEDUA');

number2 = 20;

for (number2; number2 >= 1 ; number2 = number2 - 1) {
    console.log(number2 + " - I will become fullstack developer");
 
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

//contoh - untuk pertambahan counter 2
var counter = 1;

for (counter ;counter <= 100; counter = counter + 2) {
    if (counter % 3 === 0) {
        console.log(counter + ' KELIPATAN 3')
    }
    else {
        console.log('')
    }
}

//contoh - untuk pertambahan counter 5
var counter = 1;

for (counter ;counter <= 100; counter = counter + 5) {
    if (counter % 6 === 0) {
        console.log(counter + ' KELIPATAN 6')
    }
    else {
        console.log('')
    }
}

//contoh - untuk pertambahan counter 10
var counter = 1;

for (counter ;counter <= 100; counter = counter + 9) {
    if (counter % 10 === 0) {
        console.log(counter + ' KELIPATAN 10')
    }
    else {
        console.log('')
    }
}