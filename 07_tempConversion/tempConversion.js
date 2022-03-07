const ftoc = function(temp) {
  //formula is (x - 32) * .5556
  let c = (temp - 32) * .5556
  return Number(Math.round(c + "e+1") + "e-1")
};

const ctof = function(temp) {
  //formula is (x * 1.8) + 32
  let f = (temp * 1.8) + 32
  return Number(Math.round(f + "e+1") + "e-1")
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
