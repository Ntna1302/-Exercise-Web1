// Function to calculate the future value
function calcFutureValue(investment, rate, years) {
    return investment * Math.pow(1 + rate / 100, years);
}

// Validation function
function isNotValid(val) {
    return isNaN(val) || val < 0;
}

// Event handler for the "Calculate" button
function calcButtonClick() {
    const investment = parseFloat(document.getElementById('investment').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);

    // Validate inputs
    if (isNotValid(investment)) {
        alert("Please enter a valid investment amount.");
        document.getElementById('investment').focus();
        return;
    }

    if (isNotValid(rate)) {
        alert("Please enter a valid annual interest rate.");
        document.getElementById('rate').focus();
        return;
    }

    if (isNotValid(years)) {
        alert("Please enter a valid number of years.");
        document.getElementById('years').focus();
        return;
    }

    // Calculate future value
    const futureValue = calcFutureValue(investment, rate, years);
    document.getElementById('future_value').value = futureValue.toFixed(2);
}

// Attach event handler to the "Calculate" button
window.onload = function() {
    document.getElementById('calculate').onclick = calcButtonClick;
};
