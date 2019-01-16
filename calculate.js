
// Здесь хранятся идентификаторы чисел
let
  sevenItem        = document.getElementById("sevenItem"),
  eightItem        = document.getElementById("eightItem"),
  nineItem         = document.getElementById("nineItem"),
  fourItem         = document.getElementById("fourItem"),
  fiveItem         = document.getElementById("fiveItem"),
  sixItem          = document.getElementById("sixItem"),
  oneItem          = document.getElementById("oneItem"),
  twoItem          = document.getElementById("twoItem"),
  threeItem        = document.getElementById("threeItem"),
  zeroItem         = document.getElementById("zeroItem"),
  fractionalItem   = document.getElementById("fractionalItem"),
  enterValue       = document.querySelector("#enterValue");

// Идентификатор формы
let mainForm         = document.getElementById("mainForm");

// Идентификатор очистки (clear id)
let clearItem        = document.getElementById("clearItem");

// Здесь хранятся идентификаторы операторов
let
  multiplacationItem     = document.getElementById("multiplacationItem"),
  subtractionItem        = document.getElementById("subtractionItem"),
  additionItem           = document.getElementById("additionItem"),
  divisionItem           = document.getElementById("divisionItem"),
  equallyItem            = document.getElementById("equallyItem");

mainForm.onsubmit = function(e) {
    e.preventDefault();
    console.log('Отправка сброшена успешно!');
}

function getOperations() {

    if (logValAddition) {
        enterValue.value = firstValue + secValue;
        logValAddition = false;
    }

    if (logValSubtraction) {
        enterValue.value = firstValue - secValue;
        logValSubtraction = false;
    }

    if (logValMultiplacation) {
        enterValue.value = firstValue * secValue;
        logValMultiplacation = false;
    }

    if (logValDivision) {
        enterValue.value = firstValue / secValue;
        logValDivision = false;
    }

}

clearItem.onclick = function() {
    enterValue.value = '';
}

zeroItem.onclick = function() {
    let zero = "0";
    enterValue.value += zero;
}

oneItem.onclick = function() {
    let one = "1";
    enterValue.value += one;
}

twoItem.onclick = function() {
    let two = "2";
    enterValue.value += two;
}

threeItem.onclick = function() {
    let three = "3";
    enterValue.value += three;
}

fourItem.onclick = function() {
    let four = "4";
    enterValue.value += four;
}

fiveItem.onclick = function() {
    let five = "5";
    enterValue.value += five;
}

sixItem.onclick = function() {
    let six = "6";
    enterValue.value += six;
}

sevenItem.onclick = function() {
    let seven = "7";
    enterValue.value += seven;
}

eightItem.onclick = function() {
    let eight = "8";
    enterValue.value += eight;
}

nineItem.onclick = function() {
    let nine = "9";
    enterValue.value += nine;
}

fractionalItem.onclick = function() {

	if (enterValue.value.charAt(0) != '.') {

   		enterValue.value += '.';

	}
}

let firstValue = 0;
let secValue   = 0;

let logValAddition         = false;
let logValSubtraction      = false;
let logValMultiplacation   = false;
let logValDivision         = false;


additionItem.onclick = function() {

    firstValue = +enterValue.value;
    logValAddition = true;
    enterValue.value = '';

    console.log(logValAddition);
    console.log(firstValue);
}

subtractionItem.onclick = function() {

    firstValue = +enterValue.value;
    logValSubtraction = true;
    enterValue.value = '';

    console.log(logValSubtraction);
    console.log(firstValue);
}

multiplacationItem.onclick = function() {

    firstValue = +enterValue.value;
    logValMultiplacation = true;
    enterValue.value = '';

    console.log(logValMultiplacation);
    console.log(firstValue);
}

divisionItem.onclick = function() {

    firstValue = +enterValue.value;
    logValDivision = true;
    enterValue.value = '';

    console.log(logValDivision);
    console.log(firstValue);
}

equallyItem.onclick = function() {
    secValue = +enterValue.value;

    getOperations();
}
