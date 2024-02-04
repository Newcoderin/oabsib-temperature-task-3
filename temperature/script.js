function convertTemperature() {
    // Get user input
    let temperatureInput = document.getElementById("temperatureInput").value;
    let selectedUnit = document.getElementById("unitSelect").value;

    // Validate input is a number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temperature
    let convertedTemperature;
    switch (selectedUnit) {
        case "celsius":
            convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
            break;
        case "fahrenheit":
            convertedTemperature = (parseFloat(temperatureInput) * (9 / 5)) + 32;
            break;
        case "kelvin":
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            break;
        default:
            alert("Invalid unit selected.");
            return;
    }

    // Display the result
    let resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${selectedUnit}`;
}
