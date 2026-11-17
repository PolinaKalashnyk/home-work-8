
function mul(a, b) {
  return a * b;
}

var doubleMul = function(a) {
  return function(b) {
    return mul(a, b);
  };
}(2);

var quadraMul = function(a) {
  return function(b) {
    return mul(a, b);
  };
}(4);

console.log(doubleMul(5)); // 10
console.log(quadraMul(5)); // 20
