function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let MultiplicationResult = multiply(num1, num2);
        let AdditionResult = add(num1, num2);
        let DivisionResult = divide(num1, num2);

        // Display the result
        displayResult(MultiplicationResult, AdditionResult, DivisionResult);
    } else { debugger;
        const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Please enter numbers only`;
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    debugger;

    return a + b;
}

function divide(a, b) {
    debugger;

    return a / b;
}

function displayResult(MultiplicationResult, AdditionResult, DivisionResult) {
    // Display the result in the paragraph element
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `The multiplication result is: ${MultiplicationResult} <br> The addition result is: ${AdditionResult} <br> The division result is: ${DivisionResult}`;
}
