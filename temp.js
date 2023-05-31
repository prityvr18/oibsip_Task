/* ***********************
 * ******  Globals  ******
 * ***********************
 */

window.addEventListener('load', function () {

    let getResult = document.querySelector('#getResult');
    
    let numkeys = document.querySelectorAll('#numkey');
    
    const backspace = document.querySelector('#backspace');
    
    const minus = document.querySelector('#minus');
    
    const clear = document.querySelector('#clear');
    
    let output = document.querySelector('#output');
    
    
    
    /* ***************************
     * ** Function declarations **
     * ***************************
     */
    
    // Show numbers
    function showNumber(n) {
        n = this.innerHTML;
        output.value += n;
    }
    
    // This function converts Fahrenheit
    function fahrenheitToCelsius(f) {
        return (5/9) * (f-32);
    }
    
    
    function celsiusToFahrenheit(c) {
        return ((9/5) * c) + 32;
    }
    
    
    // This function converts Kelvin to Celsius
    function kelvinToCelsius(k) {
        return k - 273;
    }
    
    
    // This function converts Celsius to Kelvin
    function celsiusToKelvin(c) {
        return 273 + Number(c); // Number() is used to convert 'c' to a number
    }
    
    
    // This function converts Fahrenheit to Kelvin
    function fahrenheitToKelvin(f) {
        return 273 + ((5/9) * (f-32));
    }
    
    
    // This function converts Kelvin to Fahrenheit
    function kelvinToFahrenheit(k) {
        return ((9/5) * (k - 273)) + 32;
    }
    
    
    // This function turns the input value to a negative value
    function negateValue() {
        output.value = -output.value;
    }
    
    
    // Delete the last digit on the screen.
    function backSpace() {
        output.value = output.value.substring(0, output.value.length -1);
    }
    
    
    // Delete all inputs
    function clearInput() {
        output.value = '';
    }
    
    
    // This function checks the scale selected by the user, changes the formula according to the scale and shows the result.
    function checkAndCalculate() {
     if (!output.value == '') {
        let scale = document.querySelector("#scale").value;
        if (scale == 'c_to_f') {
            output.value = celsiusToFahrenheit(output.value);
        } else if (scale == 'c_to_k') {
            output.value = 
            celsiusToKelvin(output.value);
        } else if (scale == 'f_to_c') {
            output.value = fahrenheitToCelsius(output.value);
        } else if (scale == 'f_to_k') {
            output.value = fahrenheitToKelvin(output.value);
        } else if (scale == 'k_to_c') {
            output.value = 
            kelvinToCelsius(output.value);
        } else if (scale == 'k_to_f') {
            output.value = kelvinToFahrenheit(output.value);
        }
      }
    }
    
    
    /* ********************
     * *****  Events  *****
     * ********************
     */
     
     // Add showNumber() function to all numeric keys
     for (let i = 0; i < numkeys.length; i++) {
        numkeys[i].addEventListener('click', showNumber, false);
     }
     
     backspace.addEventListener('click', backSpace, false);
     
     clear.addEventListener('click', clearInput, false);
     
     minus.addEventListener('click', negateValue, false);
    
    getResult.addEventListener 
    ('click', checkAndCalculate, false);
    
    });
    
    
    alert(`Don't hesitate to give this code an ^ upvote if you like it.\n\nAny contribution is also welcome.`);