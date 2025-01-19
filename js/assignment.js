"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(num1, num2) {
    return num1 % num2;  // get the remainder using %


}

// Function that checks if a number is even or not
function checkIfEven(number) {
    return number % 2 === 0;  // use division to determine even or odd
}

// Function that returns the fourth element in the lostNumbers array
function getTheFourthElement(lostNumbers) {
    return lostNumbers[3];  // The fourth element is at index 3
}

// Call the functions and display the results in the HTML
function renderAnswers() {
    // Output the result of returnTheRemainder with 5 and 4
    const remainderResult = returnTheRemainder(5, 4);
    remainderElement.textContent = remainderResult;  // Set the value in the HTML element

    // Output the result of checkIfEven for the number 47
    const isEven = checkIfEven(47);
    checkIfEvenElement.textContent = isEven;  // Set the value in the HTML element

    // Output the result of getTheFourthElement
    const fourthElement = getTheFourthElement(lostNumbers);
    lostNumbersElement.textContent = fourthElement;  // Set the value in the HTML element
}
submissionBtn.addEventListener("click", renderAnswers);