exports.sumOfAMultiple = function(n) {
  var sum = 0;
  // do your work here
  for (var x = 1; x < n; x++) {
    if ((x % 3 == 0) || (x % 5 == 0)) {
      sum += x;
      console.log('HI', sum);
    }
  }
  return sum;
};