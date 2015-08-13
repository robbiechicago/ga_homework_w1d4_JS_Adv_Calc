// function to work the basic calculator
  
var basicCalcButton = document.getElementById('basic-calc');
basicCalcButton.addEventListener ('click', function() {
  
  //variables getting the numbers, operator and hidden div
  var goodNumOne = parseFloat(document.getElementById('basic-num-1').value);
  var goodNumTwo = parseFloat(document.getElementById('basic-num-2').value);
  var op = document.getElementById('basic-operation').value;
  var resultDiv = document.getElementById('basic-answer');
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

  //actions
  resultDiv.innerHTML = '<div id="basic-answer-alert" class="col-sm-offset-2 col-sm-2 alert alert-success">' + result + '</div>';
  resultDiv.className = 'show';

  console.log('button clicked');
  console.log(goodNumOne);
  console.log(op);
  console.log(goodNumTwo);
  console.log(result);


});

