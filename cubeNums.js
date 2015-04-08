function cubeNums(str){
  str = str.split(';');
  var cubeArr = str.map(function(n) {
    return Math.pow(n,3);
  });

  return cubeArr;
}

// TEST
var s = '3;4;5';
var o = cubeNums(s);
console.log(o)
// => [27, 64, 125]
