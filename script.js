let displayBar = document.querySelector("#displayBar");
// select number buttons
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");

// select operator buttons
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let remainder = document.querySelector("#remainder");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
//
let numberArray = [one, two, three, four, five, six, seven, eight, nine, zero];

let displayValue = "";
let a = undefined;
let b = displayValue;
let operator = "";

numberArray.forEach((number) =>
  number.addEventListener("click", function (e) {
    displayValue += number.textContent;
    displayBar.textContent = displayValue;
    b = displayValue;
  })
);

equals.addEventListener("click", function (e) {
  Equals();
});

plus.addEventListener("click", function (e) {
  if (operator != "") {
    Equals();
    operator = "+";
  } else {
    operator = "+";
    a = displayValue;
    console.log(a);
    displayBar.textContent = displayValue;
    displayValue = "";
  }
});

minus.addEventListener("click", function (e) {
  if (operator != "") {
    Equals();
    operator = "-";
  } else {
    operator = "-";
    a = displayValue;
    console.log(a);
    displayBar.textContent = displayValue;
    displayValue = "";
  }
});

multiply.addEventListener("click", function (e) {
  if (operator != "") {
    Equals();
    operator = "x";
  } else {
    operator = "x";
    a = displayValue;
    console.log(a);
    displayBar.textContent = displayValue;
    displayValue = "";
  }
});

divide.addEventListener("click", function (e) {
  if (operator != "") {
    Equals();
    operator = "/";
  } else {
    operator = "/";
    a = displayValue;
    console.log(a);
    displayBar.textContent = displayValue;
    displayValue = "";
  }
});

function operate(a, b, operator) {
  if (operator === "+") {
    return Add(a, b);
  } else if (operator === "-") {
    return Subtract(a, b);
  } else if (operator === "x") {
    return Multiply(a, b);
  } else if (operator === "/") {
    return Divide(a, b);
  }
}

function Add(a, b) {
  return Number(a) + Number(b);
}
function Subtract(a, b) {
  return Number(a) - Number(b);
}
function Multiply(a, b) {
  return Number(a) * Number(b);
}
function Divide(a, b) {
  return Number(a) / Number(b);
}

function Equals() {
  if (operator != "") {
    b = displayValue;
    a = operate(a, b, operator);
    displayBar.textContent = a;
    displayValue = "";
    console.log(a);
  }
}

clear.addEventListener("click", function (e) {
  a = 0;
  b = 0;
  operator = "";
  displayValue = "";
  displayBar.textContent = 0;
});
