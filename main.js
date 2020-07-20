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
  num += ".";
  document.getElementById("display").value = num;
}

function ac() {
  num = "";
  firstOperand = "";
  secondOperand = "";
  document.getElementById("history").value = "";
  document.getElementById("display").value = "";
}

function ce() {
  num = num.substring(0, num.length-1);
  document.getElementById("display").value = num;
}

function divide() {
  firstOperand = parseFloat(num);
  document.getElementById("history").value = firstOperand + " / ";
  num = "";
  operator = "/";
}
function multiply() {
  firstOperand = parseFloat(num);
  document.getElementById("history").value = firstOperand + " * ";
  num = "";
  operator = "*";
}
function addition() {
  firstOperand = parseFloat(num);
  document.getElementById("history").value = firstOperand + " + ";
  num = "";
  operator = "+";
}
function subtraction() {
  firstOperand = parseFloat(num);
  document.getElementById("history").value = firstOperand + " - ";
  num = "";
  operator = "-";
}

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
