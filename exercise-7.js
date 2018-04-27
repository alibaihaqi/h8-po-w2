/* 1. Menyusun Barisan Bintang */
var rows1 = 1

for (rows1; rows1 <= 5; rows1++) {
    console.log('*')
}

/* 2. Menyusun Barisan Bintang dengan Nested Looping */

for (var rows2 = 1; rows2 <= 5; rows2++) {
    var star = '';
    for (var col2 = 1; col2 <= 5; col2++) {
      star = star + '*';
    }
  console.log(star);
}

/* 3. Menyusun Barisan Tangga Bintang dengan Nested Looping */

var star = '';

for (var rows3 = 0; rows3 < 5; rows3++) {
      star = star + '*';
      console.log(star);
}