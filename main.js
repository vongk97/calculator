const container=document.querySelector('#display'); // display will show digits based on calculator button inputs
var num = "";
var firstOperand = null;
var secondOperand = null;
var operator = "";
var output = null;
function zero() {
  num += "0";
  document.getElementById("display").value = num;
}
function one() {
  num += "1";
  document.getElementById("display").value = num;
}
function two() {
  num += "2";
  document.getElementById("display").value = num;
}
function three() {
  num += "3";
  document.getElementById("display").value = num;
}
function four() {
  num += "4";
  document.getElementById("display").value = num;
}
function five() {
  num += "5";
  document.getElementById("display").value = num;
}
function six() {
  num += "6";
  document.getElementById("display").value = num;
}
function seven() {
  num += "7";
  document.getElementById("display").value = num;
}
function eight() {
  num += "8";
  document.getElementById("display").value = num;
}
function nine() {
  num += "9";
  document.getElementById("display").value = num;
}

function dot() {
  if(num.includes(".")) { return ;}
  num += ".";
  document.getElementById("display").value = num;
}

function ac() {
  document.getElementById("history").value = "";
  document.getElementById("display").value = "";
  num = "";
  firstOperand = null;
  secondOperand = null;
  output = null;
  operator = "";
}

function ce() {
  if(num == "") { return; }
  num = num.substring(0, num.length-1);
  document.getElementById("display").value = num;
}

function divide() {
  if(operator=="") {
    firstOperand = parseFloat(num);
    document.getElementById("history").value = firstOperand + " / ";
    num = "";
    operator = "/";
  }
  else {
    operate();
    operator = "/";
    num = "";
  }
}
function multiply() {
  if(operator=="") {
    firstOperand = parseFloat(num);
    document.getElementById("history").value = firstOperand + " * ";
    num = "";
    operator = "*";
  }
  else {
    operate();
    operator = "*";
    num = "";
  }
}
function addition() {
  if(operator=="") {
    firstOperand = parseFloat(num);
    document.getElementById("history").value = firstOperand + " + ";
    num = "";
    operator = "+";
  }
  else {
    operate();
    operator = "+";
    num = "";
  }
}

function subtraction() {
  if(operator=="") {
    firstOperand = parseFloat(num);
    document.getElementById("history").value = firstOperand + " - ";
    num = "";
    operator = "-";
  }
  else {
    operate();
    operator = "-";
    num = "";
  }
}

/*
function equals() {
  secondOperand = parseFloat(num);
  if (operator == "/") {
    if(secondOperand == 0) {
      document.getElementById("display").value = "CANNOT DIVIDE BY ZERO!!!";
    }
    else {
      output = firstOperand / secondOperand;
      document.getElementById("history").value = firstOperand + " / " + secondOperand;
      document.getElementById("display").value = output;
      num = output;
    }
  }
  if (operator == "*") {
    output = firstOperand * secondOperand;
    document.getElementById("history").value = firstOperand + " * " + secondOperand;
    document.getElementById("display").value = output;
    num = output;
  }
  if (operator == "+") {
    output = firstOperand + secondOperand;
    document.getElementById("history").value = firstOperand + " + " + secondOperand;
    document.getElementById("display").value = output;
    num = output;
  }
  if (operator == "-") {
    output = firstOperand - secondOperand;
    document.getElementById("history").value = firstOperand + " - " + secondOperand;
    document.getElementById("display").value = output;
    num = output;
  }

  secondOperand = null;
}
*/

/*
1. Enter digits
2. enter an operator. operate function is called. digits are stored in firstOperand. operator symbol is stored. secondOperand is NULL, so end function
3. Enter digits
4. Enter an operator or equal symbol. operate function called. firstOperand is NOT null, so store digits in secondOperand. perform operation based on previous operator.
    5. Store output in firstOperand. change secondOperand to null. change operator to the most recent one.

*/
function operate() {
  // if num == "", then an operator symbol has been pressed twice
  if(num==""){ return; }
  secondOperand = parseFloat(num);

  if (operator == "*") {
    output = firstOperand * secondOperand;
    document.getElementById("history").value = firstOperand + " * " + secondOperand;
    document.getElementById("display").value = output;
    firstOperand = output;
    num = "";
  }
  if (operator == "/") {
    if(secondOperand == 0) { document.getElementById("display").value = "CANNOT DIVIDE BY ZERO!!!"; }
    else {
      output = firstOperand / secondOperand;
      document.getElementById("history").value = firstOperand + " / " + secondOperand;
      document.getElementById("display").value = output;
      firstOperand = output;
      num = "";
    }
  }
  if (operator == "+") {
    output = firstOperand + secondOperand;
    document.getElementById("history").value = firstOperand + " + " + secondOperand;
    document.getElementById("display").value = output;
    firstOperand = output;
    num = "";
  }
  if (operator == "-") {
    output = firstOperand - secondOperand;
    document.getElementById("history").value = firstOperand + " - " + secondOperand;
    document.getElementById("display").value = output;
    firstOperand = output;
    num = "";
  }
}
