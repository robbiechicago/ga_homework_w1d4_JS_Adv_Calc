// console.log("hi");

// function to work the basic calculator
// function basicCalc () {
  
  //variables getting the numbers, operator and calculate button
  
  var basicCalcButton = document.getElementById('basic-calc');

  basicCalcButton.addEventListener ('click', function() {
    var goodNumOne = parseFloat(document.getElementById('basic-num-1').value);
    var goodNumTwo = parseFloat(document.getElementById('basic-num-2').value);
    console.log('button clicked');
    console.log(typeof(goodNumOne));
    console.log(typeof(goodNumTwo));
  });

//}