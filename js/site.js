// Get the values from the Page
// starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    //We need to validate our inputs
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);   
    } else {
        //display error message
        alert("Please enter a valid integer");
    }

    //we call displayNumbers
    displayNumbers(numbers);
}   

// Generate numbers from startValue to the endValue
// logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //we want to get all numbers from start to end
    for (let i = sValue; i <= eValue; i++) {

        //this will execute in a loop until index= endValue
        numbers.push(i);
    }

    return numbers;
}

// Display the numbers and mark even numbers bold
// display or view functions
function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;
    }
}