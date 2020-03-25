// define variable to hold numb1 and numb2
var numb1;
var numb2;

// define an array for all possible numbers and symbols
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "0", "-", "", "=", ""];

// build html
const html = GetHtml(numbers);

// build the html to be injected into numbersContainer
function GetHtml(numbers) {

    var htmlString = '';
    for(let i = 0; i < numbers.length; i++) {
        htmlString += `<div class="calculator">${numbers[i]}</div>`;
    }
    return htmlString;
}

// get html element numbersContainer as array
var numbersContainer = document.getElementsByClassName("numbersContainer");

// inject html into div
numbersContainer[0].innerHTML = html;

// phase 2
// get all html elements that have a calculator class
var htmlElements = document.getElementsByClassName("calculator");

// loop through all the html elements in array
for(let i = 0; i < htmlElements.length; i++) {
    htmlElements[i].addEventListener('click', function() {
        // get the content
        let content = htmlElements[i].innerHTML;
        Display(content);
    });
}

function Display(textToDisplay) {

    if(textToDisplay == '+' || textToDisplay == '-' || textToDisplay == '=') {
        switch(textToDisplay) {
            case '+':
                Add();
            break;
            case '-':
                Minus();
            break;
            case '=':
                EqualTo();
            break;
        }
    } else {
        // get the value in display, add textToDisplay to it
        let displayValue = document.getElementsByClassName("display")[0];
        displayValue.value = displayValue.value + textToDisplay;
    }

}

function Add() {
    // get the current value in display and save in numb1
    var display = document.getElementsByClassName("display")[0];
    numb1 = display.value;

    // clear display
    display.value = "";
}

function EqualTo() {
    // get the current value in display and save in numb1
    var display = document.getElementsByClassName("display")[0];
    numb2 = display.value;

    // add numb1 and numb2 together. Remember to convert numb1 and numb2 to integers
    var numb3 = parseInt(numb1) + parseInt(numb2);

    // set numb3 as display
    display.value = numb3;
}