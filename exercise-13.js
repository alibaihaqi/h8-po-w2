function xo(str) {
    var nilaix = (str.match(/x/g) || []).length;
    var nilaio = (str.match(/o/g) || []).length;
    if (nilaix === nilaio) {
        return true
    }
    else {
        return false
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true