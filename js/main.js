// function to work the basic calculator
  
var basicCalcButton = document.getElementById('basic-calc');
basicCalcButton.addEventListener ('click', function() {
  
  //variables getting the numbers, operator and calculate button
  var goodNumOne = parseFloat(document.getElementById('basic-num-1').value);
  var goodNumTwo = parseFloat(document.getElementById('basic-num-2').value);
  var op = document.getElementById('basic-operation').value;
  var result;

  //calculations
  if (op === '+') {
    result = goodNumOne + goodNumTwo;
  } else if (op === '-') {
    result = goodNumOne - goodNumTwo;
  } else if (op === '*') {
    result = goodNumOne * goodNumTwo;
  } else {
    result = goodNumOne / goodNumTwo;
  }

  console.log('button clicked');
  console.log(goodNumOne);
  console.log(op);
  console.log(goodNumTwo);
  console.log(result);


});

