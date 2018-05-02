var star1 = '';
var row1 = 1;
while (row1 <=5) {
    star1 = star1 + '*';
    row1++;
    console.log (star1);
}

console.log('-----')

for (var rows2 = 5; rows2 >= 1; rows2--) {
    var star = '';
    for (var col2 = rows2; col2 >= 1; col2--) {
      star = star + '*';
    }
  console.log(star);
}