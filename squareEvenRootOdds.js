function squareEvensRootOdds(str){
  var strArray = str.split('|');
  var numArray = strArray.map(function(x){
    if (parseInt(x) % 2 === 0){
      return x * x;
    }
    else {
      return Math.sqrt(x);
    }
  });
  return numArray;
}





//Tests:
var s = '3|4|5|6';
var o = squareEvensRootOdds(s);
console.log(o);
// => [1.7,16,2.2,36]
