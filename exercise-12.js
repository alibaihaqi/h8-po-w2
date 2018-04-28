function konversiMenit(menit) {
    var hours = (menit/60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rminutes < 10) {
        return rhours + ':0' + rminutes
    }
    else {
        return rhours + ':' + rminutes
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00