/* Bandingkan Angka */

function bandingkanAngka(angka1, angka2) {
    var number1 = angka1;
    var number2 = angka2;
    if (number2 > number1) {
        return true;
    }
    else if (number2 === number1) {
        return -1;
    }
    else {
        return false;
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8));
  console.log(bandingkanAngka(5, 3));
  console.log(bandingkanAngka(4, 4));
  console.log(bandingkanAngka(3, 3));
  console.log(bandingkanAngka(17, 2));