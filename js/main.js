// function to work the basic calculator

//Button event listener  
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

//-----------------------------------------------------------------------------------------------------------------------------------

//BMI Calculator

//units select input change
var bmiSelecter = document.getElementById('bmi-units');
var bmiSelectedUnit = bmiSelecter.value
bmiSelecter.addEventListener('change', function() {
  bmiSelectedUnit = bmiSelecter.value
  console.log("changed unit to " + bmiSelectedUnit);
  //AAARGGGHH! This bit's stopped working!! #sadface
  if (bmiSelectedUnit === 'imperial') {
    document.getElementById('bmi-mass-unit').innerHTML = 'lb';
    document.getElementById('bmi-height-unit').innerHTML = 'in';
  } else {
    document.getElementById('bmi-mass-unit').innerHTML = 'kg';
    document.getElementById('bmi-height-unit').innerHTML = 'm';
  };
});

//Button event listener  
var bmiButton = document.getElementById('bmi-calc');
bmiButton.addEventListener ('click', function() {
  
  //variables for units, mass and height
  var goodMass = parseFloat(document.getElementById('bmi-mass').value);
  var goodHeight = parseFloat(document.getElementById('bmi-height').value);
  var units = document.getElementById('bmi-units').value;
  var bmiResultDiv = document.getElementById('bmi-answer');
  var bmiResult;

  //calculations
  if (bmiSelectedUnit === 'imperial') {
    bmiResult = (goodMass/(goodHeight*goodHeight))*703;
  } else {
    bmiResult = goodMass/(goodHeight*goodHeight);
  };

  //actions
  bmiResultDiv.innerHTML = '<div id="bmi-answer-alert" class="col-sm-offset-2 col-sm-2 alert alert-success">' + bmiResult.toFixed(2) + '</div>';
  bmiResultDiv.className = 'show';

  console.log('button clicked');
  console.log(units);
  console.log(goodMass);
  console.log(goodHeight);
  console.log(bmiResult);
});


//-----------------------------------------------------------------------------------------------------------------------------------
//MORTGAGE CALCULATOR

//Button event listener  
var mortgageButton = document.getElementById('mortgage-calc');
mortgageButton.addEventListener ('click', function() {
  
  //variables getting the numbers and hidden div
  var goodloan = parseFloat(document.getElementById('mortgage-loan').value);
  var goodApr = parseFloat(document.getElementById('mortgage-apr').value);
  var goodTerm = parseFloat(document.getElementById('mortgage-term').value);
  var mortResultDiv = document.getElementById('mortgage-answer');

  //calculations
  var uglyBit = Math.pow(1+goodApr,goodTerm);
  var mortResult = goodloan*((goodApr*uglyBit)/uglyBit-1);

  //actions
  mortResultDiv.innerHTML = '<div id="mortgage-answer-alert" class="col-sm-offset-2 col-sm-2 alert alert-success">' + mortResult.toFixed(2) + '</div>';
  mortResultDiv.className = 'show';

  console.log('mortgage button clicked');
  console.log(goodloan);
  console.log(goodApr);
  console.log(goodTerm);
  console.log(mortResult);
});


//-----------------------------------------------------------------------------------------------------------------------------------
//TRIP CALCULATOR

//Button event listener  
var tripButton = document.getElementById('trip-calc');
tripButton.addEventListener ('click', function() {
  
  //variables getting the numbers and hidden div
  var goodDist = parseFloat(document.getElementById('trip-distance').value);
  var goodMpg = parseFloat(document.getElementById('trip-mpg').value);
  var goodCost = parseFloat(document.getElementById('trip-cost').value);
  var goodSpeed = parseFloat(document.getElementById('trip-speed').value);
  var tripResultDiv = document.getElementById('trip-answer');

  //calculations
  //time calc
  var timeResult = goodDist/goodSpeed;
  //cost calc
  if (goodSpeed > 60) {
    var speedDiff = goodSpeed - 60;
    goodMpg = goodMpg - (2*speedDiff);
  }
  var costResult = goodDist*goodMpg;

  var tripResult = "Trip duration is " + timeResult.toFixed(2) + "hours . Cost is $" + costResult.toFixed(2);

  //actions
  tripResultDiv.innerHTML = '<div id="mortgage-answer-alert" class="col-sm-offset-2 col-sm-2 alert alert-success">' + tripResult + '</div>';
  tripResultDiv.className = 'show';

  console.log('trip button clicked');
  console.log(goodDist);
  console.log(goodMpg);
  console.log(goodCost);
  console.log(goodSpeed);
  console.log(tripResult);
});




















